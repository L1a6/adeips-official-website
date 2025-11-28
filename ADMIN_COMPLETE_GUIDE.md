# 🎉 ADEIPS Admin System - Complete Setup

## ✅ What Has Been Created

### 1. Database Files (Supabase)
- ✅ `supabase/migrations/20251127_initial_schema.sql` - Database structure
- ✅ `supabase/seed.sql` - Sample data for testing

### 2. Admin Pages
- ✅ `/admin/login/page.tsx` - Simple password login
- ✅ `/admin/page.tsx` - Dashboard with stats
- ✅ `/admin/enrollments/page.tsx` - Manage enrollment applications
- ✅ `/admin/layout.tsx` - Navigation and authentication

### 3. API Routes
- ✅ `/api/admin/enrollments/route.ts` - GET/PATCH/DELETE enrollments
- ✅ `/api/admin/blog/route.ts` - GET blog posts
- ✅ `/api/enroll/route.ts` - Handle form submissions (already existed)

### 4. Library Files
- ✅ `/lib/supabase.ts` - All database functions (already existed)
- ✅ `/lib/nodemailer.ts` - Email sending (already existed)

## 🚀 QUICK START GUIDE

### Step 1: Install Supabase Package
```bash
npm install @supabase/supabase-js
```

### Step 2: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Wait 2-3 minutes for setup

### Step 3: Run Database Migration
1. In Supabase → SQL Editor
2. Copy content from `supabase/migrations/20251127_initial_schema.sql`
3. Paste and click "Run"
4. (Optional) Run `supabase/seed.sql` for sample data

### Step 4: Get API Keys
In Supabase → Settings → API, copy:
- Project URL
- anon public key  
- service_role key

### Step 5: Update `.env.local`
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Admin Password (CHANGE THIS!)
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_123

# Email (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_16_char_app_password
EMAIL_FROM="ADEIPS <your.email@gmail.com>"
ADMIN_EMAIL=admin@adeips.com

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 6: Start Development Server
```bash
npm run dev
```

### Step 7: Access Admin Panel
1. Go to: `http://localhost:3000/admin/login`
2. Enter password from `.env.local`
3. You're in!

## 📱 HOW TO USE ADMIN PANEL

### Dashboard (`/admin`)
- View statistics
- Quick actions
- System status

### Enrollments (`/admin/enrollments`)
- View all applications
- Filter by status (All, Pending, Contacted, Enrolled, Rejected)
- Change status with dropdown
- Delete applications

### Blog Posts (`/admin/blog`) - COMING NEXT
- List all posts
- Create new posts
- Edit existing posts
- Toggle published/featured status

## 🔐 HOW ADMIN ACCESS WORKS

### Development:
URL: `http://localhost:3000/admin/login`
Password: From `.env.local` file

### Production (After Hosting):
URL: `https://yourwebsite.com/admin/login`
Password: Set in Vercel/Netlify environment variables

### Security Features:
- Password-protected
- Session expires after 24 hours
- Login required for all admin pages
- Logout button in navigation

## 📧 EMAIL SETUP (Gmail)

### Get App Password:
1. Google Account → Security
2. Enable 2-Step Verification
3. Security → App Passwords
4. Select "Mail" → Generate
5. Copy 16-character password
6. Use in `.env.local` as `EMAIL_PASS`

### What Emails Are Sent:
- **To Applicant**: Welcome email with next steps
- **To Admin**: Notification of new enrollment

## 🌐 HOSTING SETUP (Vercel/Netlify)

### Vercel:
1. Push code to GitHub
2. Import project in Vercel
3. Add ALL environment variables from `.env.local`
4. Deploy!
5. Admin URL: `https://yoursite.vercel.app/admin/login`

### Environment Variables to Add:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_ADMIN_PASSWORD`
- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_FROM`
- `ADMIN_EMAIL`
- `NEXT_PUBLIC_SITE_URL` (your production URL)

## ❓ COMMON ISSUES & SOLUTIONS

### "Cannot find module @supabase/supabase-js"
```bash
npm install @supabase/supabase-js
```

### "Missing Supabase environment variables"
- Check `.env.local` has all SUPABASE_ variables
- Restart dev server: Stop (Ctrl+C) and `npm run dev`

### "Admin login not working"
- Verify password matches `.env.local`
- Clear browser cache or try incognito mode
- Check browser console for errors

### "Enrollments not showing"
- Verify Supabase migration ran successfully
- Check data in Supabase → Table Editor
- Verify API keys are correct

### "Emails not sending"
- Verify Gmail app password is correct
- Check spam folder
- View logs in terminal for error messages

## 📊 WHAT EACH FILE DOES

### Supabase Files
- **migrations/*.sql** - Creates database tables and structure
- **seed.sql** - Adds sample data (optional, for testing)

### Admin Pages
- **admin/login/page.tsx** - Login form
- **admin/page.tsx** - Dashboard with statistics
- **admin/enrollments/page.tsx** - Manage applications
- **admin/layout.tsx** - Navigation wrapper for all admin pages

### API Routes
- **api/admin/enrollments** - Fetch, update, delete enrollments
- **api/admin/blog** - Fetch blog posts
- **api/enroll** - Handle enrollment form submissions from website

### Library Files
- **lib/supabase.ts** - Database functions (CRUD operations)
- **lib/nodemailer.ts** - Email sending functions

## 🎯 NEXT STEPS

### What You Have Now:
✅ Admin login system
✅ Dashboard with stats
✅ Enrollment management
✅ Email notifications
✅ Database integration

### What Still Needs to Be Created:
- [ ] Blog management pages (create/edit/delete)
- [ ] Update main blog page to fetch from Supabase
- [ ] File upload for blog images (optional)
- [ ] Admin user profile page (optional)

### To Complete Blog System:
We need to create:
1. `/admin/blog/page.tsx` - List all posts
2. `/admin/blog/new/page.tsx` - Create new post
3. `/admin/blog/[id]/edit/page.tsx` - Edit existing post
4. Update `/app/blog/page.tsx` - Fetch from Supabase instead of JSON

Would you like me to create these blog management pages next?

## 🆘 NEED HELP?

### Check These First:
1. Browser console (F12) for errors
2. Terminal for server errors
3. Supabase logs in dashboard
4. `.env.local` file has all variables

### Debug Commands:
```bash
# Restart dev server
npm run dev

# Check for TypeScript errors
npm run build

# View all environment variables (don't commit this!)
node -e "console.log(process.env)"
```

## 🎉 YOU'RE READY!

Your admin system is now set up with:
- 🔐 Secure password-protected access
- 📊 Dashboard with real-time stats
- 📝 Enrollment management
- 📧 Automatic email notifications
- 💾 Cloud database storage

Access it at: `http://localhost:3000/admin/login`

**Remember to change the admin password before hosting!**
