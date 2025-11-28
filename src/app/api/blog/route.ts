import { NextRequest, NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import { 
  getAllBlogPosts, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost 
} from '@/lib/supabase';

// GET - List all blog posts (admin only)
export async function GET(request: NextRequest) {
  try {
    const posts = await getAllBlogPosts();
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST - Create new blog post (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { title, slug, excerpt, content, author, category, image_url } = body;
    
    if (!title || !slug || !excerpt || !content || !author || !category || !image_url) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const post = await createBlogPost({
      title,
      slug,
      excerpt,
      content,
      author,
      category,
      image_url,
      featured: body.featured || false,
      published: body.published || true,
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}

// PUT - Update blog post (admin only)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    const post = await updateBlogPost(id, updates);
    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog post (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    await deleteBlogPost(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}