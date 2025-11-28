import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// GET - Fetch site settings
export async function GET() {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from('site_settings')
      .select('*')
      .single();

    if (error) {
      // If no settings exist, return defaults
      if (error.code === 'PGRST116') {
        return NextResponse.json({
          settings: {
            registration_open: true,
            current_cohort: 15,
            cohort_message: 'Join our next cohort and transform your speaking skills',
          }
        });
      }
      throw error;
    }

    return NextResponse.json({ settings: data });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

// PATCH - Update site settings
export async function PATCH(request: NextRequest) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { registration_open, current_cohort, cohort_message } = body;

    // Check if settings exist
    const { data: existing } = await supabaseAdmin
      .from('site_settings')
      .select('id')
      .single();

    let result;
    
    if (existing) {
      // Update existing settings
      const { data, error } = await supabaseAdmin
        .from('site_settings')
        .update({
          registration_open,
          current_cohort,
          cohort_message,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existing.id)
        .select()
        .single();

      if (error) throw error;
      result = data;
    } else {
      // Create new settings
      const { data, error } = await supabaseAdmin
        .from('site_settings')
        .insert([{
          registration_open,
          current_cohort,
          cohort_message,
        }])
        .select()
        .single();

      if (error) throw error;
      result = data;
    }

    return NextResponse.json({ settings: result });
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}
