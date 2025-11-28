import { createClient } from '@supabase/supabase-js';

// Environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables!');
}

// Client for browser (uses anon key - public operations)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for server-side operations (uses service role key)
// Only create if service role key is available (server-side)
const serviceRoleKey = typeof window === 'undefined' 
  ? process.env.SUPABASE_SERVICE_ROLE_KEY 
  : '';

export const supabaseAdmin = serviceRoleKey
  ? createClient(
      supabaseUrl,
      serviceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )
  : supabase; // Fallback to regular client on browser

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Enrollment {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  message?: string;
  status: 'pending' | 'contacted' | 'enrolled' | 'rejected';
  notes?: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image_url: string;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
}

// ============================================
// ENROLLMENT OPERATIONS
// ============================================

export async function createEnrollment(data: {
  full_name: string;
  email: string;
  phone: string;
  message?: string;
}) {
  // Use supabaseAdmin for server-side operations to bypass RLS
  const { data: enrollment, error } = await supabaseAdmin
    .from('enrollments')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('Supabase enrollment error:', error);
    throw error;
  }
  return enrollment;
}

export async function getEnrollments() {
  const { data, error } = await supabaseAdmin
    .from('enrollments')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Enrollment[];
}

export async function updateEnrollmentStatus(
  id: string,
  status: Enrollment['status'],
  notes?: string
) {
  const { error } = await supabaseAdmin
    .from('enrollments')
    .update({ status, notes })
    .eq('id', id);

  if (error) throw error;
}

export async function deleteEnrollment(id: string) {
  const { error } = await supabaseAdmin
    .from('enrollments')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// ============================================
// BLOG POST OPERATIONS
// ============================================

export async function getPublishedBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as BlogPost[];
}

export async function getAllBlogPosts() {
  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as BlogPost[];
}

export async function getBlogPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) throw error;
  return data as BlogPost;
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .insert([post])
    .select()
    .single();

  if (error) throw error;
  return data as BlogPost;
}

export async function updateBlogPost(id: string, updates: Partial<BlogPost>) {
  const { data, error } = await supabaseAdmin
    .from('blog_posts')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as BlogPost;
}

export async function deleteBlogPost(id: string) {
  const { error } = await supabaseAdmin
    .from('blog_posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
}