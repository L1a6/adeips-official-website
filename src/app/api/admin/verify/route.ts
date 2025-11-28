import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    // Check password against server-side env variable
    const correctPassword = process.env.ADMIN_PASSWORD;
    
    console.log('Verify attempt - password provided:', !!password);
    console.log('Verify attempt - password value:', password);
    console.log('Verify attempt - env var exists:', !!correctPassword);
    console.log('Verify attempt - env var value:', correctPassword);
    console.log('Verify attempt - match:', password === correctPassword);
    
    if (!correctPassword) {
      console.error('ADMIN_PASSWORD environment variable not set!');
      return NextResponse.json(
        { error: 'Admin password not configured. Check environment variables.' },
        { status: 500 }
      );
    }
    
    // Trim whitespace from both values
    const trimmedPassword = password?.trim();
    const trimmedCorrectPassword = correctPassword?.trim();
    
    if (trimmedPassword === trimmedCorrectPassword) {
      console.log('Password matched successfully');
      return NextResponse.json({ authenticated: true });
    } else {
      console.log('Password mismatch - provided:', trimmedPassword, 'expected:', trimmedCorrectPassword);
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Admin verify error:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
