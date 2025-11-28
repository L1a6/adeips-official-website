-- ============================================
-- ADEIPS Database Schema
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- ENROLLMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'enrolled', 'rejected')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster queries
CREATE INDEX idx_enrollments_email ON enrollments(email);
CREATE INDEX idx_enrollments_status ON enrollments(status);
CREATE INDEX idx_enrollments_created_at ON enrollments(created_at DESC);

-- ============================================
-- BLOG POSTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image_url TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for blog posts
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for auto-updating updated_at
CREATE TRIGGER update_enrollments_updated_at 
  BEFORE UPDATE ON enrollments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at 
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Enrollments policies
-- Allow public to insert (for enrollment form submissions)
CREATE POLICY "Allow public insert enrollments" 
  ON enrollments FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Allow service role full access (for admin operations)
CREATE POLICY "Allow service role all on enrollments" 
  ON enrollments FOR ALL 
  TO service_role
  USING (true);

-- Blog posts policies
-- Allow public to read published posts
CREATE POLICY "Allow public read published blog posts" 
  ON blog_posts FOR SELECT 
  TO anon
  USING (published = true);

-- Allow authenticated users to read all posts
CREATE POLICY "Allow authenticated read all blog posts" 
  ON blog_posts FOR SELECT 
  TO authenticated
  USING (true);

-- Allow service role full access (for admin operations)
CREATE POLICY "Allow service role all on blog posts" 
  ON blog_posts FOR ALL 
  TO service_role
  USING (true);
