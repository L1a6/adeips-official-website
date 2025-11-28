import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Test environment variables
    const envCheck = {
      hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSupabaseAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      hasServiceRoleKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30) + '...',
    };

    // Test database connection
    const { data, error } = await supabase
      .from('enrollments')
      .select('count')
      .limit(1);

    if (error) {
      return NextResponse.json({
        success: false,
        envCheck,
        error: error.message,
        errorDetails: error,
      });
    }

    return NextResponse.json({
      success: true,
      envCheck,
      message: 'Supabase connection successful',
      canAccessEnrollments: true,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
}
