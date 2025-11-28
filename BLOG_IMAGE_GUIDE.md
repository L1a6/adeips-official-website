# 📸 Blog Image Upload Guide

## Quick Overview
Since we don't have a built-in image uploader yet, you have **3 easy options** for adding images to blog posts:

---

## ✅ Option 1: Use Supabase Storage (Recommended)

### Steps:
1. **Go to Supabase Dashboard** → https://supabase.com/dashboard
2. **Navigate to Storage** (left sidebar)
3. **Create a bucket** (if you haven't already):
   - Click "New Bucket"
   - Name: `blog-images`
   - Make it **Public** (toggle the public option)
4. **Upload your image**:
   - Click on the `blog-images` bucket
   - Click "Upload file"
   - Select your image (JPG, PNG, WebP recommended)
5. **Get the URL**:
   - Click on the uploaded image
   - Copy the public URL
   - It will look like: `https://[project-id].supabase.co/storage/v1/object/public/blog-images/[filename].jpg`
6. **Paste the URL** in the "Featured Image URL" field when creating/editing a blog post

### Advantages:
✅ Free (up to 1GB)  
✅ Fast CDN delivery  
✅ Secure and scalable  
✅ Images stay with your project  

---

## ✅ Option 2: Use the Gallery Folder

### Steps:
1. **Add images to your project**:
   - Go to `public/images/blog/` folder in your project
   - If the folder doesn't exist, create it
   - Add your image file (e.g., `my-post.jpg`)

2. **Use the relative URL**:
   - In the blog post form, enter: `/images/blog/my-post.jpg`
   - Next.js will automatically serve it

### Advantages:
✅ Simple and straightforward  
✅ No external dependencies  
✅ Works offline  

### Disadvantages:
❌ Increases project size  
❌ Need to redeploy when adding new images  

---

## ✅ Option 3: Use Free Image Hosting

### Recommended Services:

### **ImgBB** (easiest)
1. Go to https://imgbb.com/
2. Upload your image (no account needed)
3. Copy the "Direct Link"
4. Paste into blog form

### **Cloudinary** (professional)
1. Sign up at https://cloudinary.com/
2. Upload image
3. Copy the image URL
4. Paste into blog form

### Advantages:
✅ No setup needed  
✅ Free tier available  
✅ Good for quick posts  

---

## 📋 Image Best Practices

### Recommended Sizes:
- **Featured images** (slideshow): `1200 x 600px` (2:1 ratio)
- **Blog thumbnails**: `800 x 600px` (4:3 ratio)
- **File size**: Keep under 500KB for fast loading

### Optimization Tools:
- **TinyPNG**: https://tinypng.com/ (compress images)
- **Squoosh**: https://squoosh.app/ (resize & compress)

### Image Formats:
- ✅ **WebP** (best quality & small size)
- ✅ **JPG** (photos)
- ✅ **PNG** (graphics, transparent backgrounds)
- ❌ Avoid large GIFs

---

## 🎨 Quick Image Workflow

### For a new blog post:

1. **Prepare your image**:
   - Resize to 1200x600px
   - Compress to under 500KB
   - Convert to WebP if possible

2. **Upload to Supabase**:
   - Dashboard → Storage → blog-images → Upload
   - Copy the public URL

3. **Create your blog post**:
   - Go to `/admin/blog/new`
   - Select category: **Announcements**, **Tips and Guides**, or **Events**
   - Enter title (slug auto-generates)
   - Write excerpt and content
   - Enter author name
   - **Paste image URL**
   - Check "Featured" if you want it in the slideshow (max 6)
   - Check "Publish Immediately"
   - Click "Create Post"

---

## 🎬 Featured Posts Slideshow

### How it works:
- Automatically cycles through featured posts every **5 seconds**
- Users can manually navigate with left/right arrows
- **Maximum 6 featured posts** allowed at once
- If you try to feature a 7th post, you'll get an error

### To feature a post:
1. Edit the post in `/admin/blog`
2. Check "Featured Post (Max 6)"
3. Save

### To unfeature a post:
1. Edit a featured post
2. Uncheck "Featured Post (Max 6)"
3. Save
4. Now you can feature another post

---

## 📝 Blog Categories

You can only post in these **3 categories**:

1. **Announcements** - News, updates, course launches
2. **Tips and Guides** - How-to articles, tutorials, advice
3. **Events** - Workshops, seminars, speaking events

---

## 🚀 Quick Setup Checklist

- [ ] Run the new migration: `20251127_blog_categories_update.sql` in Supabase
- [ ] Create `blog-images` bucket in Supabase Storage (make it public)
- [ ] Test creating a blog post
- [ ] Test featuring/unfeaturing posts
- [ ] Check that slideshow auto-plays

---

## 🆘 Troubleshooting

### "Image not loading"
- Check if the URL is correct and publicly accessible
- Make sure Supabase bucket is set to "Public"
- Try opening the URL in a new browser tab

### "Cannot feature this post"
- You have 6 featured posts already
- Go to `/admin/blog` and unfeature one post first

### "Category not in list"
- Only 3 categories allowed: Announcements, Tips and Guides, Events
- Edit the post and select a valid category

---

## 📧 Need Help?

Contact your developer or check:
- `ADMIN_COMPLETE_GUIDE.md` - Full admin system documentation
- `ADMIN_SETUP_GUIDE.md` - Initial Supabase setup
