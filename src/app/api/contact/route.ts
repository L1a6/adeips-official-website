import { NextRequest, NextResponse } from 'next/server';

// This API route handles contact form submissions
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
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
    // 2. Send email notification to admin
    // 3. Send auto-reply to user
    // 4. Integrate with customer support system
    
    // For now, we'll just log the data
    console.log('Contact form submission received:', {
      name,
      email,
      subject,
      message,
      phone: body.phone,
      timestamp: new Date().toISOString()
    });

    // Example: Send email notification
    // await sendContactEmail(body);
    
    // Example: Save to database
    // await db.contacts.create({ data: body });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optionally handle GET requests
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint' },
    { status: 200 }
  );
}