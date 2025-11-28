import { NextRequest, NextResponse } from 'next/server';
import { getEnrollments, updateEnrollmentStatus, deleteEnrollment } from '@/lib/supabase';

export async function GET() {
  try {
    const enrollments = await getEnrollments();
    return NextResponse.json({ enrollments });
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch enrollments' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, status, notes } = await request.json();
    await updateEnrollmentStatus(id, status, notes);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating enrollment:', error);
    return NextResponse.json(
      { error: 'Failed to update enrollment' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    await deleteEnrollment(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting enrollment:', error);
    return NextResponse.json(
      { error: 'Failed to delete enrollment' },
      { status: 500 }
    );
  }
}
