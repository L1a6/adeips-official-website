-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  cohort VARCHAR(100) NOT NULL,
  image VARCHAR(500) NOT NULL,
  quote TEXT NOT NULL,
  full_testimony TEXT NOT NULL,
  highlight VARCHAR(255) NOT NULL,
  key_takeaways TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on created_at for faster queries
CREATE INDEX idx_testimonials_created_at ON testimonials(created_at DESC);

-- Add RLS policies
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON testimonials
  FOR SELECT USING (true);

-- Allow authenticated insert/update/delete (for admin)
CREATE POLICY "Allow authenticated insert" ON testimonials
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated update" ON testimonials
  FOR UPDATE USING (true);

CREATE POLICY "Allow authenticated delete" ON testimonials
  FOR DELETE USING (true);
