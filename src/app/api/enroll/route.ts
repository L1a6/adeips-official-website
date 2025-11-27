import { NextRequest, NextResponse } from 'next/server';

// This API route handles enrollment form submissions
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { firstName, lastName, email, phone, course } = body;
    
    if (!firstName || !lastName || !email || !phone || !course) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email to user
    // 3. Send notification to admin
    // 4. Integrate with CRM or email marketing service
    
    // For now, we'll just log the data
    console.log('Enrollment submission received:', {
      firstName,
      lastName,
      email,
      phone,
      course,
      experience: body.experience,
      message: body.message,
      timestamp: new Date().toISOString()
    });

    // Example: Send email using a service like Resend, SendGrid, or Nodemailer
    // await sendEnrollmentEmail(body);
    
    // Example: Save to database
    // await db.enrollments.create({ data: body });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Enrollment submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing enrollment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optionally handle GET requests (e.g., to retrieve enrollment data)
export async function GET() {
  return NextResponse.json(
    { message: 'Enrollment API endpoint' },
    { status: 200 }
  );
}