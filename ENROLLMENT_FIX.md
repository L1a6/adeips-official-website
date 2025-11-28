# 🔧 ENROLLMENT FIX CHECKLIST

## The Problem
Your enrollment form isn't submitting because the Supabase migration needs to be run with the updated blog categories.

## ✅ Solution Steps

### 1. Run the New Migration in Supabase

1. **Go to Supabase Dashboard**: https://supabase.com/dashboard
2. **Select your project**: `adeips-official-website`
3. **Go to SQL Editor** (left sidebar)
4. **Click "New Query"**
5. **Copy and paste** the contents of `supabase/migrations/20251127_blog_categories_update.sql`
6. **Click "Run"**

This will:
- Update blog categories to only allow: **Announcements**, **Tips and Guides**, **Events**
- Add a limit of **6 featured posts** maximum
- Fix the database constraints

---

### 2. Test the Enrollment Form

1. **Start your development server**:
   ```powershell
   npm run dev
   ```

2. **Open**: http://localhost:3000/enroll

3. **Fill out the form**:
   - Full Name: Test User
   - Email: your-email@example.com
   - Phone: +234 123 456 7890
   - Message: Test enrollment

4. **Click Submit**

5. **Check for success**:
   - ✅ You should see "Application submitted successfully!"
   - ✅ You should receive a welcome email
   - ✅ Admin should receive a notification email

---

### 3. Verify in Admin Dashboard

1. **Go to**: http://localhost:3000/admin/login
2. **Password**: `adeips-admin-2024` (or whatever you set in `.env.local`)
3. **Go to Enrollments**: You should see the test enrollment
4. **Status**: Should be "pending"

---

### 4. Test Blog Creation

1. **In Admin Dashboard**, click **"Blog Posts"**
2. **Click "Create New Post"**
3. **Fill out the form**:
   - Title: Test Post
   - Category: Select one of: Announcements / Tips and Guides / Events
   - Image URL: Use any public image URL or upload to Supabase (see `BLOG_IMAGE_GUIDE.md`)
   - Author: Your name
   - Content: Some test content
   - Check "Featured" (test the slideshow)
   - Check "Publish Immediately"
4. **Click "Create Post"**
5. **Go to**: http://localhost:3000/blog
6. **Verify**: You should see your post, and if featured, it should appear in the slideshow

---

## 🎯 What Changed

### Blog System Updates:
- ✅ **3 categories only**: Announcements, Tips and Guides, Events
- ✅ **Max 6 featured posts**: Database will prevent featuring more than 6
- ✅ **Auto-slideshow**: Featured posts rotate every 5 seconds
- ✅ **Manual navigation**: Left/right arrows to browse featured posts
- ✅ **Fetches from Supabase**: Blog page now loads posts from database instead of JSON file

### Enrollment Updates:
- ✅ **Better error messages**: Shows actual error from API instead of generic message
- ✅ **Console logging**: Check browser console for detailed error info
- ✅ **Improved validation**: Better email and field validation

---

## ❌ Common Errors & Fixes

### Error: "Missing required fields"
**Cause**: Form data not being sent correctly  
**Fix**: Make sure all required fields (Name, Email, Phone) are filled

### Error: "Failed to process enrollment"
**Cause**: Supabase connection issue or migration not run  
**Fix**: 
1. Check `.env.local` has correct Supabase keys
2. Run the migration in Supabase SQL Editor
3. Check Supabase dashboard → SQL Editor → Run migration

### Error: "Cannot have more than 6 featured posts"
**Cause**: You're trying to feature a 7th post  
**Fix**: Go to admin → blog → unfeature one post first

### Error: "Category not in check constraint"
**Cause**: Old category values in database or form  
**Fix**: 
1. Run the new migration
2. Edit existing posts to use new categories
3. Use only: Announcements, Tips and Guides, Events

---

## 🚀 Deployment Notes

### When you deploy to production (Vercel/Netlify):

1. **Add environment variables** to hosting platform:
   ```
   NEXT_PUBLIC_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY
   SUPABASE_SERVICE_ROLE_KEY
   EMAIL_HOST
   EMAIL_PORT
   EMAIL_USER
   EMAIL_PASS
   EMAIL_FROM
   ADMIN_EMAIL
   NEXT_PUBLIC_ADMIN_PASSWORD
   NEXT_PUBLIC_SITE_URL (change to your domain)
   ```

2. **Run migrations** in Supabase (production):
   - They're already saved in `supabase/migrations/` folder
   - Run them in order in SQL Editor

3. **Test the live site**:
   - Test enrollment form
   - Test admin login
   - Test creating blog posts

---

## 📋 Final Checklist

Before going live, make sure:

- [ ] Supabase migrations run successfully
- [ ] Environment variables all set in `.env.local`
- [ ] Enrollment form submits successfully
- [ ] Welcome emails are sent
- [ ] Admin login works with your password
- [ ] Can create/edit/delete blog posts
- [ ] Featured posts slideshow works
- [ ] Max 6 featured posts enforced
- [ ] Only 3 categories available
- [ ] Blog page loads posts from Supabase
- [ ] Images display correctly

---

## 📞 Still Having Issues?

### Check these in order:

1. **Browser Console** (F12 → Console tab):
   - Look for red error messages
   - Check network tab for failed API calls

2. **Supabase Dashboard** → Logs:
   - Check for database errors
   - Verify RLS policies are active

3. **Terminal/Command Prompt**:
   - Look for server errors
   - Check if dev server is running

4. **Environment Variables**:
   - Make sure `.env.local` exists
   - All keys are correct (no typos)
   - Values have no extra spaces

---

Good luck! 🎉
