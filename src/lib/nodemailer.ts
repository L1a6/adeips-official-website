import nodemailer from 'nodemailer';
import { render } from '@react-email/render';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: parseInt(process.env.EMAIL_PORT || '465') === 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email transporter error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// Send email with React component
export async function sendEmail({
  to,
  subject,
  react,
  html,
}: {
  to: string | string[];
  subject: string;
  react?: React.ReactElement;
  html?: string;
}) {
  try {
    const emailHtml = react ? await render(react) : html;

    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      html: emailHtml,
    });

    console.log('✅ Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email send error:', error);
    throw error;
  }
}

// Send plain text email
export async function sendPlainEmail({
  to,
  subject,
  text,
}: {
  to: string | string[];
  subject: string;
  text: string;
}) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      text,
    });

    console.log('✅ Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email send error:', error);
    throw error;
  }
}

export default transporter;