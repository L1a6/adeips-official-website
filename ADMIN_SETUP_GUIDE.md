# ADEIPS Admin Panel Setup Guide

## 🎯 What You Need To Know

### 1. **What are the Admin Files For?**

- **`/admin/page.tsx`** - Main admin dashboard (overview stats)
- **`/admin/enrollments/page.tsx`** - View and manage enrollment applications
- **`/admin/blog/page.tsx`** - List all blog posts
- **`/admin/blog/new/page.tsx`** - Create new blog posts
- **`/admin/blog/[id]/edit/page.tsx`** - Edit existing blog posts
- **Components in `/components/home/admin/`** - Reusable admin UI components

### 2. **What is Supabase For?**

Supabase is your database (like MySQL but better). It stores:
- **Enrollment applications** from your website
- **Blog posts** that appear on your blog page
- Everything is stored in the cloud, not in JSON files

### 3. **How to Access Admin Panel**

**Development (localhost):**
- Go to: `http://localhost:3000/admin/login`
- Enter password (set in `.env.local`)

**Production (after hosting):**
- Go to: `https://your-website.com/admin/login`
- Enter same password

**Important:** Only people with the password can access it!

## 📋 Setup Steps

### Step 1: Set Up Supabase (Database)

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up/login with GitHub
4. Click "New Project"
5. Fill in:
   - Name: `adeips-website`
   - Database Password: (create a strong one, save it!)
   - Region: Choose closest to Nigeria
6. Click "Create new project" (wait 2-3 minutes)

### Step 2: Run Database Migration

1. In Supabase dashboard, click "SQL Editor" (left sidebar)
2. Click "New query"
3. Copy ALL content from `supabase/migrations/20251127_initial_schema.sql`
4. Paste into SQL editor
5. Click "Run" (bottom right)
6. You should see "Success. No rows returned"

### Step 3: Add Sample Data (Optional)

1. Still in SQL Editor, click "New query"
2. Copy content from `supabase/seed.sql`
3. Paste and click "Run"
4. This adds sample blog posts for testing

### Step 4: Get Supabase Keys

1. In Supabase, click "Settings" → "API"
2. You'll see:
   - **Project URL**
   - **anon public** key
   - **service_role** key (click "Reveal" button)
3. Copy these - you need them next!

### Step 5: Update Environment Variables

Open `.env.local` and add/update:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Admin Password (change this!)
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM="ADEIPS <your_email@gmail.com>"
ADMIN_EMAIL=admin@adeips.com

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 6: Install Missing Packages

```bash
npm install @supabase/supabase-js
```

## 🚀 Usage Guide

### Accessing Admin Panel

1. Start your dev server: `npm run dev`
2. Go to: `http://localhost:3000/admin/login`
3. Enter password from `.env.local`
4. You're in!

### Managing Enrollments

1. Click "Enrollments" in admin nav
2. See all applications in a table
3. You can:
   - View details
   - Change status (Pending → Contacted → Enrolled)
   - Add notes
   - Delete applications

### Managing Blog Posts

1. Click "Blog" in admin nav
2. See all posts (published and drafts)
3. Click "New Post" to create
4. Click edit icon to modify
5. Toggle "Published" to show/hide on website
6. Toggle "Featured" to show in hero carousel

## 🔒 Security Notes

### For Development:
- Password in `.env.local` is fine

### For Production (When Hosting):
1. **Change the admin password!**
2. Use Vercel/Netlify environment variables
3. Never commit `.env.local` to GitHub
4. Consider adding IP whitelist in Supabase

## 🌐 After Hosting (Vercel/Netlify)

1. Add all environment variables in dashboard
2. Admin URL will be: `https://yoursite.com/admin/login`
3. Share password only with trusted admins
4. Session lasts 24 hours, then re-login required

## 📧 Email Setup (Gmail)

1. Go to Google Account settings
2. Security → 2-Step Verification (enable it)
3. Security → App passwords
4. Create app password for "Mail"
5. Copy the 16-character password
6. Use in `.env.local` as `EMAIL_PASS`

## ❓ Common Issues

**"Cannot find module Supabase"**
- Run: `npm install @supabase/supabase-js`

**"Missing Supabase environment variables"**
- Check `.env.local` has all SUPABASE_ variables
- Restart dev server after adding

**"Admin login not working"**
- Check password matches `.env.local`
- Clear browser cache/localStorage
- Try incognito mode

**"Enrollments not showing"**
- Check Supabase migration ran successfully
- Check RLS policies in Supabase
- Check service role key is correct

## 📁 File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── layout.tsx          # Admin wrapper with auth
│   │   ├── page.tsx            # Dashboard
│   │   ├── login/
│   │   │   └── page.tsx        # Login page
│   │   ├── enrollments/
│   │   │   └── page.tsx        # Enrollments list
│   │   └── blog/
│   │       ├── page.tsx        # Blog list
│   │       ├── new/page.tsx    # Create post
│   │       └── [id]/edit/page.tsx  # Edit post
│   └── api/
│       └── enroll/
│           └── route.ts        # Handles enrollment submissions
├── lib/
│   ├── supabase.ts             # Database functions
│   └── nodemailer.ts           # Email functions
└── components/
    └── home/admin/             # Admin UI components

supabase/
├── migrations/
│   └── 20251127_initial_schema.sql  # Database structure
└── seed.sql                    # Sample data
```

## 🎉 You're All Set!

Once setup is complete:
1. Enrollments from website → Saved to Supabase
2. View/manage them in admin panel
3. Create/edit blog posts in admin
4. Posts appear automatically on website
5. Email notifications sent to applicants

Need help? Check the code comments or ask!