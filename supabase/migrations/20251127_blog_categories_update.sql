-- ============================================
-- Blog Categories Update
-- ============================================

-- Step 1: Update existing blog posts to use new categories
-- Map old categories to new ones
UPDATE blog_posts 
SET category = 'Announcements'
WHERE category IN ('News', 'Announcement', 'Updates');

UPDATE blog_posts 
SET category = 'Tips and Guides'
WHERE category IN ('Public Speaking', 'Communication', 'Personal Development', 'Tips', 'Guide', 'How-to');

UPDATE blog_posts 
SET category = 'Events'
WHERE category IN ('Leadership', 'Event', 'Workshop', 'Seminar');

-- Step 2: Set any remaining unmapped categories to 'Announcements' as default
UPDATE blog_posts 
SET category = 'Announcements'
WHERE category NOT IN ('Announcements', 'Tips and Guides', 'Events');

-- Step 3: Drop old constraint if exists
ALTER TABLE blog_posts 
DROP CONSTRAINT IF EXISTS blog_posts_category_check;

-- Step 4: Add new category constraint (now all existing data matches)
ALTER TABLE blog_posts 
ADD CONSTRAINT blog_posts_category_check 
CHECK (category IN ('Announcements', 'Tips and Guides', 'Events'));

-- Step 5: Limit featured posts to maximum 6
-- First, unfeature all posts beyond the first 6 featured
WITH featured_posts AS (
  SELECT id, ROW_NUMBER() OVER (ORDER BY created_at DESC) as rn
  FROM blog_posts
  WHERE featured = true
)
UPDATE blog_posts
SET featured = false
WHERE id IN (
  SELECT id FROM featured_posts WHERE rn > 6
);

-- Step 6: Create function to limit featured posts to 6
CREATE OR REPLACE FUNCTION check_featured_limit()
RETURNS TRIGGER AS $$
DECLARE
  featured_count INTEGER;
BEGIN
  IF NEW.featured = true THEN
    SELECT COUNT(*) INTO featured_count 
    FROM blog_posts 
    WHERE featured = true AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000'::uuid);
    
    IF featured_count >= 6 THEN
      RAISE EXCEPTION 'Cannot have more than 6 featured posts. Please unfeature another post first.';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 7: Create trigger to enforce featured limit
DROP TRIGGER IF EXISTS enforce_featured_limit ON blog_posts;
CREATE TRIGGER enforce_featured_limit
  BEFORE INSERT OR UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION check_featured_limit();

-- Step 8: Add helpful comments
COMMENT ON CONSTRAINT blog_posts_category_check ON blog_posts 
IS 'Only allows three categories: Announcements, Tips and Guides, Events';

COMMENT ON FUNCTION check_featured_limit() 
IS 'Ensures maximum of 6 featured blog posts at any time';

-- Step 9: Create index for better performance on featured posts
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured_created ON blog_posts(featured, created_at DESC) 
WHERE featured = true;
