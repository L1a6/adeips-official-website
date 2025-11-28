-- ============================================
-- ENROLLMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'enrolled', 'rejected')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_enrollments_created_at ON enrollments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments(email);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);

-- ============================================
-- BLOG POSTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_enrollments_updated_at ON enrollments;
CREATE TRIGGER update_enrollments_updated_at
  BEFORE UPDATE ON enrollments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ADMIN USERS TABLE (for NextAuth)
-- ============================================
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,  -- Hashed password
  name TEXT NOT NULL,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Insert default admin (password will be hashed by NextAuth)
-- Default credentials: admin@adeips.com / adeips-admin-2024
-- YOU MUST CHANGE THIS IN PRODUCTION!
INSERT INTO admin_users (email, password_hash, name, role) 
VALUES (
  'admin@adeips.com',
  '$2a$10$rO3HvB0u3h8X7YLFJyC9qOV.VNKZPzQ4gKZH5xGHbZJ9VqN5eKh0G', -- hashed: adeips-admin-2024
  'Admin User',
  'super_admin'
) ON CONFLICT (email) DO NOTHING;

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Anyone can submit enrollment" ON enrollments;
DROP POLICY IF EXISTS "Service role can view enrollments" ON enrollments;
DROP POLICY IF EXISTS "Service role can update enrollments" ON enrollments;
DROP POLICY IF EXISTS "Service role can delete enrollments" ON enrollments;

DROP POLICY IF EXISTS "Anyone can view published posts" ON blog_posts;
DROP POLICY IF EXISTS "Service role can manage posts" ON blog_posts;

DROP POLICY IF EXISTS "Service role can view admins" ON admin_users;

-- ENROLLMENTS POLICIES
CREATE POLICY "Anyone can submit enrollment"
  ON enrollments FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can view enrollments"
  ON enrollments FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update enrollments"
  ON enrollments FOR UPDATE
  TO service_role
  USING (true);

CREATE POLICY "Service role can delete enrollments"
  ON enrollments FOR DELETE
  TO service_role
  USING (true);

-- BLOG POSTS POLICIES
CREATE POLICY "Anyone can view published posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Service role can manage posts"
  ON blog_posts FOR ALL
  TO service_role
  USING (true);

-- ADMIN USERS POLICIES
CREATE POLICY "Service role can view admins"
  ON admin_users FOR SELECT
  TO service_role
  USING (true);

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function to get enrollment statistics
CREATE OR REPLACE FUNCTION get_enrollment_stats()
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'total', COUNT(*),
    'pending', COUNT(*) FILTER (WHERE status = 'pending'),
    'contacted', COUNT(*) FILTER (WHERE status = 'contacted'),
    'enrolled', COUNT(*) FILTER (WHERE status = 'enrolled'),
    'rejected', COUNT(*) FILTER (WHERE status = 'rejected')
  ) INTO result
  FROM enrollments;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get blog statistics
CREATE OR REPLACE FUNCTION get_blog_stats()
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_build_object(
    'total', COUNT(*),
    'published', COUNT(*) FILTER (WHERE published = true),
    'draft', COUNT(*) FILTER (WHERE published = false),
    'featured', COUNT(*) FILTER (WHERE featured = true)
  ) INTO result
  FROM blog_posts;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;