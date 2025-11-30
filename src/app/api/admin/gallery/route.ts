import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('gallery_images')
      .select('*')
      .order('id', { ascending: true }); // Oldest first (by ID)

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery images' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { src, title, category } = body;

    if (!src || !title || !category) {
      return NextResponse.json(
        { error: 'Missing required fields: src, title, category' },
        { status: 400 }
      );
    }

    const validCategories = ['candlelight', 'cultural', 'defence', 'field', 'graduation', 'dinner'];
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: `Invalid category. Must be one of: ${validCategories.join(', ')}` },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('gallery_images')
      .insert([{ src, title, category }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error creating gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to create gallery image' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Gallery image ID is required' },
        { status: 400 }
      );
    }

    // Get the image first to extract the file path for storage deletion
    const { data: image, error: fetchError } = await supabase
      .from('gallery_images')
      .select('src')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    // Delete from database
    const { error: deleteError } = await supabase
      .from('gallery_images')
      .delete()
      .eq('id', id);

    if (deleteError) throw deleteError;

    // Try to delete from storage if it's a Supabase storage URL
    if (image?.src && image.src.includes('supabase')) {
      try {
        // Extract the file path from the URL
        const urlParts = image.src.split('/storage/v1/object/public/');
        if (urlParts.length > 1) {
          const pathParts = urlParts[1].split('/');
          const bucket = pathParts[0];
          const filePath = pathParts.slice(1).join('/');
          
          await supabase.storage.from(bucket).remove([filePath]);
        }
      } catch (storageError) {
        // Log but don't fail if storage deletion fails
        console.error('Error deleting from storage:', storageError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to delete gallery image' },
      { status: 500 }
    );
  }
}
