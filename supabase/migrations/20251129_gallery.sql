-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id SERIAL PRIMARY KEY,
  src TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('candlelight', 'cultural', 'defence', 'field', 'graduation', 'dinner')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for category filtering
CREATE INDEX IF NOT EXISTS idx_gallery_images_category ON gallery_images(category);

-- Create index for ordering
CREATE INDEX IF NOT EXISTS idx_gallery_images_created_at ON gallery_images(created_at DESC);

-- Enable RLS
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access on gallery_images"
  ON gallery_images FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated insert on gallery_images"
  ON gallery_images FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update on gallery_images"
  ON gallery_images FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated delete on gallery_images"
  ON gallery_images FOR DELETE
  TO authenticated
  USING (true);
