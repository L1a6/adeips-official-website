# Email Setup Guide for ADEIPS

## Current Status
- ✅ Enrollment saves to database successfully
- ✅ Success message now shows prominently (8 seconds, larger, with icon)
- ✅ Success message indicates if emails were sent or not
- ⚠️ Emails not sending (need SMTP configuration)

## Why Emails Aren't Sending

The `.env.local` file has email variables defined, but they need **valid SMTP credentials**. Common issues:

1. **Wrong SMTP host/port**
2. **Invalid username/password**
3. **Gmail blocking "less secure apps"** (if using Gmail)
4. **Missing App Password** (Gmail requires App Passwords, not regular password)

## How to Fix Email Sending

### Option 1: Gmail SMTP (Recommended for Testing)

1. **Enable 2-Step Verification** on your Google Account:
   - Go to https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Create an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Click "Generate"
   - Copy the 16-character password

3. **Update `.env.local`**:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-char-app-password-here
   EMAIL_FROM="ADEIPS <your-email@gmail.com>"
   ADMIN_EMAIL=admin@adeips.com
   ```

4. **Restart dev server**:
   ```powershell
   # Stop current server (Ctrl+C)
   npm run dev
   ```

### Option 2: Outlook/Office 365 SMTP

```env
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
EMAIL_FROM="ADEIPS <your-email@outlook.com>"
ADMIN_EMAIL=admin@adeips.com
```

### Option 3: Custom SMTP (e.g., Namecheap, GoDaddy)

```env
EMAIL_HOST=mail.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=noreply@yourdomain.com
EMAIL_PASS=your-password
EMAIL_FROM="ADEIPS <noreply@yourdomain.com>"
ADMIN_EMAIL=admin@adeips.com
```

### Option 4: SendGrid (Production Recommended)

1. Sign up at https://sendgrid.com (free tier: 100 emails/day)
2. Create an API key
3. Update `.env.local`:
   ```env
   EMAIL_HOST=smtp.sendgrid.net
   EMAIL_PORT=587
   EMAIL_USER=apikey
   EMAIL_PASS=your-sendgrid-api-key-here
   EMAIL_FROM="ADEIPS <noreply@adeips.com>"
   ADMIN_EMAIL=admin@adeips.com
   ```

## Testing Email Configuration

### 1. Check Server Logs

When someone submits the enrollment form, watch the terminal where `npm run dev` is running:

**Success (emails sent):**
```
📧 Attempting to send emails...
EMAIL_HOST: smtp.gmail.com
EMAIL_USER: Set
EMAIL_FROM: ADEIPS <your-email@gmail.com>
ADMIN_EMAIL: admin@adeips.com
📨 Sending welcome email to: applicant@example.com
✅ Email sent: <message-id>
📨 Sending admin notification to: admin@adeips.com
✅ Email sent: <message-id>
✅ Emails sent successfully
```

**Failure (emails not sent):**
```
📧 Attempting to send emails...
EMAIL_HOST: smtp.gmail.com
EMAIL_USER: Set
...
❌ Email sending failed: Invalid login: 535-5.7.8 Username and Password not accepted
Email error details: ...
```

### 2. Test on Frontend

1. Go to http://localhost:3000/enroll
2. Fill out the form
3. Submit

**Success Messages:**

- **If emails sent**: 
  > ✓ Application submitted successfully!
  > Check your email for confirmation. Our team will contact you within 24 hours.

- **If emails failed** (but enrollment saved):
  > ✓ Application submitted successfully!
  > We have received your application. Our team will contact you soon.

### 3. Check Admin Dashboard

Visit http://localhost:3000/admin/enrollments to verify the enrollment was saved.

## Common Errors & Solutions

### Error: "Invalid login: 535-5.7.8 Username and Password not accepted"
**Solution**: Gmail users need an App Password, not regular password.

### Error: "ECONNREFUSED" or "ETIMEDOUT"
**Solution**: Wrong EMAIL_HOST or EMAIL_PORT. Check your email provider's SMTP settings.

### Error: "Missing credentials"
**Solution**: EMAIL_USER or EMAIL_PASS is empty in `.env.local`.

### Error: "self signed certificate"
**Solution**: Add to nodemailer config (only for development):
```typescript
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false  // Add this for self-signed certs
  }
});
```

## What Was Fixed

1. **Success Message Visibility**:
   - Changed from small green box to large emerald box with icon
   - Increased timeout from 5s to 8s
   - Added email status indicator

2. **Email Status Feedback**:
   - API now returns `emailsSent: true/false`
   - Frontend shows different message based on email status
   - Console logs help debug email issues

3. **Better Error Logging**:
   - Server logs all email configuration
   - Shows which emails are being sent
   - Displays detailed error messages

4. **Removed Emoji**:
   - Admin email subject: "🎓 New Enrollment" → "New Enrollment"
   - Email body header: Same change

## Production Checklist

Before deploying to production:

- [ ] Use a professional email service (SendGrid, AWS SES, etc.)
- [ ] Don't use personal Gmail/Outlook accounts
- [ ] Set up SPF, DKIM, DMARC records for your domain
- [ ] Use a dedicated `noreply@yourdomain.com` address
- [ ] Test email deliverability (check spam folders)
- [ ] Set up email tracking/analytics
- [ ] Add unsubscribe links if sending marketing emails

## Need Help?

1. **Check terminal logs** when form is submitted
2. **Copy the error message** and search for it
3. **Verify SMTP credentials** with your email provider
4. **Test SMTP separately** using an online SMTP tester

The enrollment system works perfectly - emails are optional and won't break enrollment submissions!
