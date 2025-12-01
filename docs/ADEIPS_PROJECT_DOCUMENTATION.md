# ADEIPS Official Website
## Complete Project Documentation

---

`[INSERT HERO BANNER IMAGE - Recommended size: 1200x400px]`

---

> **Document Version:** 1.0  
> **Last Updated:** November 2025  
> **Classification:** Client Deliverable

---

# Table of Contents

| Section | Title |
|:-------:|:------|
| 01 | [Project Overview](#1-project-overview) |
| 02 | [Tech Stack & Technologies](#2-tech-stack-and-technologies) |
| 03 | [Project Architecture](#3-project-architecture) |
| 04 | [Features Overview](#4-features-overview) |
| 05 | [Page-by-Page Breakdown](#5-page-by-page-breakdown) |
| 06 | [Admin Dashboard Guide](#6-admin-dashboard-guide) |
| 07 | [Database Schema](#7-database-schema) |
| 08 | [API Routes Reference](#8-api-routes-reference) |
| 09 | [Deployment & Hosting](#9-deployment-and-hosting) |
| 10 | [Development Challenges](#10-development-challenges) |
| 11 | [Cost Breakdown](#11-cost-breakdown) |
| 12 | [Maintenance Guide](#12-maintenance-guide) |
| 13 | [Future Enhancements](#13-future-enhancements) |

---

# 1. Project Overview

> [!NOTE]
> **ADEIPS (AkanDavid Executive Institute of Public Speaking)** is a premium public speaking training institute based in Uyo, Nigeria.

## Project Purpose

This website serves as the official digital footprint of the institute, establishing a professional online presence that reflects the organization's commitment to excellence in public speaking education. The platform enables prospective students to discover programs, current students to stay connected, and the institution to maintain a lasting digital legacy.

## Key Deliverables

| Deliverable | Status |
|-------------|:------:|
| Modern, responsive marketing website | Completed |
| Student enrollment system with email notifications | Completed |
| Admin dashboard for content management | Completed |
| Blog system for thought leadership | Completed |
| Testimonials management | Completed |
| Gallery management | Completed |

## Project Links

> [!TIP]
> **Live Preview:** https://adeips-official-website.vercel.app/
> 
> **Repository:** https://github.com/L1a6/adeips-official-website.git

## Development Timeline

| Milestone | Date |
|-----------|------|
| Project Start | November 2025 |
| Project Completion | November 2025 |
| Total Duration | ~2 weeks |

---

# 2. Tech Stack and Technologies

## Core Technologies

| Category | Technology | Version | Purpose |
|:---------|:-----------|:-------:|:--------|
| Framework | **Next.js** | 16.0.3 | React framework with App Router |
| Language | **TypeScript** | 5.x | Type-safe JavaScript |
| Styling | **Tailwind CSS** | 4.x | Utility-first CSS framework |
| Database | **PostgreSQL** | 15.x | Relational database (via Supabase) |
| Backend | **Supabase** | Latest | Database + Storage + Auth |
| Animation | **Framer Motion** | 11.x | React animation library |
| Animation | **GSAP** | 3.x | Advanced scroll animations (ScrollTrigger) |
| Animation | **Lottie** | - | JSON-based vector animations |
| Email | **Nodemailer** | 6.x | Email sending service |
| Theming | **next-themes** | 0.x | Dark/Light mode support |
| Hosting | **Vercel** | - | Serverless deployment |

## Key Dependencies

```json
{
  "next": "^16.0.3",
  "react": "^19.0.0",
  "typescript": "^5.x",
  "tailwindcss": "^4.x",
  "@supabase/supabase-js": "^2.x",
  "framer-motion": "^11.x",
  "gsap": "^3.x",
  "lottie-react": "^2.x",
  "nodemailer": "^6.x",
  "next-themes": "^0.x",
  "lucide-react": "^0.x"
}
```

## Design System

| Element | Value | Preview |
|---------|-------|---------|
| Primary Color | `#0A1236` | Navy Blue |
| Accent Color | `#E62A2A` | Red |
| Heading Font | Outfit | - |
| Body Font | System Default | - |
| Theme | Light/Dark | Default: Light |

---

# 3. Project Architecture

## Folder Structure

```
adeips-official-website/
│
├── public/
│   ├── animations/           Lottie JSON files
│   └── images/
│       ├── facilitators/     Team member photos
│       ├── gallery/          Gallery images
│       ├── hero/             Hero section backgrounds
│       ├── leadership/       Leadership photos
│       ├── testimonials/     Testimonial photos
│       └── uploads/          User-uploaded content
│
├── src/
│   ├── app/                  Next.js App Router pages
│   │   ├── about/            About pages
│   │   ├── admin/            Admin dashboard
│   │   ├── api/              API routes
│   │   ├── blog/             Blog pages
│   │   ├── courses/          Courses page
│   │   ├── enroll/           Enrollment page
│   │   ├── gallery/          Gallery page
│   │   └── testimonials/     Testimonials pages
│   │
│   ├── components/
│   │   ├── emails/           Email templates
│   │   ├── home/             Home page components
│   │   ├── layout/           Navbar, Footer
│   │   ├── shared/           Reusable components
│   │   └── ui/               UI primitives
│   │
│   ├── data/                 Static data files
│   ├── hooks/                Custom React hooks
│   ├── lib/                  Utility functions
│   └── types/                TypeScript types
│
├── supabase/
│   ├── migrations/           Database migrations
│   └── seed.sql              Seed data
│
└── docs/                     Documentation
```

## Data Flow Architecture

> [!NOTE]
> The application follows a modern serverless architecture with clear separation of concerns.

### How Data Moves Through the System

---

**Step 1: User Interaction**
> User visits the website and interacts with pages

| Layer | Technology | Role |
|:------|:-----------|:-----|
| Browser | Chrome, Safari, etc. | Renders the UI |
| Frontend | Next.js + React | Handles user interactions |

---

**Step 2: API Communication**
> Frontend sends requests to backend API routes

| Request Type | Example | Purpose |
|:-------------|:--------|:--------|
| GET | `/api/blog` | Fetch blog posts |
| POST | `/api/enroll` | Submit enrollment form |
| PUT | `/api/admin/blog` | Update a blog post |
| DELETE | `/api/admin/gallery` | Remove an image |

---

**Step 3: Data Processing**
> API routes process requests and interact with services

| Service | Purpose | Example |
|:--------|:--------|:--------|
| Supabase Database | Store and retrieve data | Save new enrollment |
| Supabase Storage | Handle file uploads | Store gallery images |
| Nodemailer | Send emails | Welcome email to student |

---

**Step 4: Response**
> Processed data returns to user

| Response | Action |
|:---------|:-------|
| Success | Display confirmation, update UI |
| Error | Show error message, prompt retry |

---

### Data Flow Summary

| # | From | To | What Happens |
|:-:|:-----|:---|:-------------|
| 1 | User | Frontend | Browses pages, fills forms |
| 2 | Frontend | API Routes | Sends HTTP requests |
| 3 | API | Database | Reads/writes records |
| 4 | API | Storage | Uploads/downloads files |
| 5 | API | Email Service | Triggers notifications |
| 6 | API | Frontend | Returns JSON response |
| 7 | Frontend | User | Updates the display |

---

# 4. Features Overview

## Public-Facing Features

| Feature | Description | Status |
|:--------|:------------|:------:|
| Home Page | Hero section, course highlights, testimonials, FAQ | Active |
| About Pages | Organization info, leadership, facilitators | Active |
| Courses Page | Detailed course information with icons | Active |
| Enrollment | Multi-step enrollment form with validation | Active |
| Blog | Dynamic blog with categories and full articles | Active |
| Testimonials | Student success stories with full testimonies | Active |
| Gallery | Photo gallery with category filtering | Active |
| Dark Mode | Light/Dark theme toggle | Active |

## Admin Dashboard Features

| Feature | Description | Access Level |
|:--------|:------------|:------------:|
| Dashboard | Overview with key statistics | Admin |
| Enrollments | View and manage student enrollments | Admin |
| Blog Management | Create, edit, delete blog posts | Admin |
| Testimonials | Manage student testimonials | Admin |
| Gallery | Upload and manage gallery images | Admin |
| Settings | Site configuration options | Admin |

---

# 5. Page-by-Page Breakdown

---

## 5.1 Home Page (Landing Page)

> **Route:** `/`

`[INSERT HOME PAGE SCREENSHOT]`

### Page Sections Overview

| # | Section | Component File |
|:-:|:--------|:---------------|
| 1 | Hero Section | `HeroSection.tsx` |
| 2 | Transform Section | `TransformSection.tsx` |
| 3 | Iconic Moments | `IconicMoments.tsx` |
| 4 | Testimonials Section | `TestimonialsSection.tsx` |
| 5 | FAQ Section | `FAQSection.tsx` |
| 6 | Enroll Section | `EnrollSection.tsx` |
| 7 | Closing Section | `ClosingSection.tsx` |
| 8 | Footer | `Footer.tsx` |

---

### Section 1: Hero Section

> **Component:** `src/components/home/HeroSection.tsx`

`[INSERT HERO SECTION SCREENSHOT]`

| Feature | Description |
|:--------|:------------|
| Layout | Full-screen hero with gradient overlay |
| Background | High-quality background image with dark overlay |
| Headline | Animated text with typewriter effect |
| Subheadline | Supporting text describing the institute |
| CTA Buttons | "Enroll Now" and "Explore Programs" buttons |
| Animation | Framer Motion fade-in and slide-up effects |
| Responsive | Adapts to mobile, tablet, and desktop screens |

**Technical Implementation:**
- Uses Framer Motion for entrance animations
- Gradient overlay for text readability
- Responsive typography scaling
- Smooth scroll to next section

---

### Section 2: Transform Section

> **Component:** `src/components/home/TransformSection.tsx`

`[INSERT TRANSFORM SECTION SCREENSHOT]`

| Feature | Description |
|:--------|:------------|
| Purpose | Value proposition and statistics showcase |
| Layout | Split layout with content and visuals |
| Statistics | Key numbers highlighting institute achievements |
| Animation | Scroll-triggered fade and slide animations |
| Content | Compelling copy about transformation journey |

**Key Elements:**
- Years of experience counter
- Number of graduates
- Success rate statistics
- Cohorts completed

---

### Section 3: Iconic Moments (GSAP Gallery)

> **Component:** `src/components/home/IconicMoments.tsx`

`[INSERT ICONIC MOMENTS SCREENSHOT]`

> [!NOTE]
> This section uses **GSAP (GreenSock Animation Platform)** for advanced scroll-triggered animations.

| Feature | Description |
|:--------|:------------|
| Layout | Horizontal scrolling gallery |
| Animation Library | GSAP with ScrollTrigger plugin |
| Scroll Effect | Horizontal scroll on vertical page scroll |
| Images | Gallery of institute moments and events |
| Performance | GPU-accelerated animations for smooth performance |

**GSAP Implementation Details:**

```typescript
// Horizontal scroll effect triggered by vertical scrolling
gsap.to(container, {
  x: -scrollWidth,
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: () => `+=${scrollWidth}`,
    scrub: 1,
    pin: true,
    anticipatePin: 1
  }
});
```

**Key Animation Features:**
- **ScrollTrigger:** Pins the section while user scrolls vertically
- **Scrub Animation:** Smooth interpolation between scroll position and animation progress
- **Horizontal Movement:** Images move horizontally as user scrolls down
- **Pin Effect:** Section stays fixed while animation plays out
- **Performance:** Uses `will-change` and GPU acceleration

---

### Section 4: Testimonials Section

> **Component:** `src/components/home/TestimonialsSection.tsx`

`[INSERT TESTIMONIALS SECTION SCREENSHOT]`

| Feature | Description |
|:--------|:------------|
| Data Source | Dynamic from Supabase database |
| Layout | Rotating carousel of testimonial cards |
| Content | Student photo, name, cohort, quote |
| Animation | Fade transitions between testimonials |
| Interactivity | Auto-rotate with manual navigation |

---

### Section 5: FAQ Section

> **Component:** `src/components/home/FAQSection.tsx`

`[INSERT FAQ SECTION SCREENSHOT]`

| Feature | Description |
|:--------|:------------|
| Layout | Accordion-style expandable questions |
| Animation | Smooth expand/collapse transitions |
| Content | Common questions about programs and enrollment |
| Accessibility | Keyboard navigation support |

---

### Section 6: Enroll Section

> **Component:** `src/components/home/EnrollSection.tsx`

`[INSERT ENROLL SECTION SCREENSHOT]`

| Feature | Description |
|:--------|:------------|
| Purpose | Call-to-action for enrollment |
| Content | Compelling copy encouraging enrollment |
| CTA Button | Link to enrollment form page |
| Design | Eye-catching design with brand colors |

---

### Section 7: Closing Section

> **Component:** `src/components/home/ClosingSection.tsx`

`[INSERT CLOSING SECTION SCREENSHOT]`

| Feature | Description |
|:--------|:------------|
| Animation | Lottie animation of speaking character |
| Background | Starry night effect with CSS animations |
| Floating Text | Inspirational phrases floating near character |
| CTA Box | Glass-morphism card with final call-to-action |
| Buttons | "Begin Your Journey" and "Explore Programs" |

**Technical Features:**
- **Lottie Animation:** JSON-based vector animation
- **CSS Twinkle Effect:** Stars with CSS keyframe animations
- **Shimmer Button:** Animated gradient sweep on CTA button
- **Responsive Sizing:** Animation scales for different devices

---

### Section 8: Footer

> **Component:** `src/components/layout/Footer.tsx`

`[INSERT FOOTER SCREENSHOT]`

| Feature | Description |
|:--------|:------------|
| Layout | 4-column grid on desktop, stacked on mobile |
| Logo | ADEIPS logo with inverted colors |
| Description | Brief about the institute |
| Quick Links | Navigation to main pages |
| Programs | Links to course offerings |
| Contact | Email, phone, and location |
| Social Icons | Facebook, Instagram, LinkedIn |
| Branding | "Powered by LYNX" credit |

**Footer Columns:**

| Column | Content |
|:-------|:--------|
| 1 | Logo, description, social media icons |
| 2 | Quick Links (Home, Programs, About, Blog, Enroll) |
| 3 | Programs list (top 5 courses) |
| 4 | Contact information |

---

## 5.2 About Page

> **Route:** `/about`

`[INSERT ABOUT PAGE SCREENSHOT]`

### Content Sections
- Organization history
- Mission and vision
- Core values
- Navigation to leadership and facilitators pages

---

## 5.3 Leadership Page

> **Route:** `/about/leadership`

`[INSERT LEADERSHIP PAGE SCREENSHOT]`

### Content Elements
- Founder profile with detailed biography
- Leadership team cards
- Social media links
- Professional profile images

---

## 5.4 Facilitators Page

> **Route:** `/about/facilitators`

`[INSERT FACILITATORS PAGE SCREENSHOT]`

### Content Elements
- Grid layout of facilitator cards
- Name, title, and specialization
- Profile photos
- Hover animations

---

## 5.5 Courses Page

> **Route:** `/courses`

`[INSERT COURSES PAGE SCREENSHOT]`

### Course Catalog

| # | Course Name |
|:-:|:------------|
| 1 | Opening & Closing For Impact |
| 2 | Executive Presence & Stage Mastery |
| 3 | Linguistic Precision & Vocabulary |
| 4 | Memory Optimisation |
| 5 | Emotional Intelligence |
| 6 | Humour Integration |
| 7 | Research & Data Presentation |
| 8 | Vocal Engineering |
| 9 | Handling Q&A Sessions |
| 10 | Personal Branding |

### Features
- Custom Lucide icons for each course
- Expandable course details
- Enrollment CTAs

---

## 5.6 Enrollment Page

> **Route:** `/enroll`

`[INSERT ENROLLMENT PAGE SCREENSHOT]`

### Form Fields

| Field | Type | Required |
|:------|:-----|:--------:|
| Full Name | Text | Yes |
| Email Address | Email | Yes |
| Phone Number | Tel | Yes |
| Country | Select | Yes |
| Occupation | Text | Yes |
| Course Selection | Select | Yes |
| Referral Source | Select | No |
| Personal Statement | Textarea | No |

### Form Features
- Real-time validation
- Success/error feedback
- Email notification to admin
- Welcome email to student
- Data stored in Supabase

---

## 5.7 Blog Page

> **Route:** `/blog`

`[INSERT BLOG PAGE SCREENSHOT]`

### Features
- Blog post cards with featured images
- Category filtering
- Search functionality
- Pagination
- Dynamic content from database

---

## 5.8 Blog Post Page

> **Route:** `/blog/[slug]`

`[INSERT BLOG POST SCREENSHOT]`

### Features
- Full article content with rich formatting
- Author information
- Publication date
- Category tags
- Related posts suggestions
- Social sharing buttons

---

## 5.9 Testimonials Page

> **Route:** `/testimonials`

`[INSERT TESTIMONIALS PAGE SCREENSHOT]`

### Features
- Grid layout of testimonial cards
- Student photos
- Short preview quotes
- Click-through to full testimony

---

## 5.10 Testimonial Detail Page

> **Route:** `/testimonials/[id]`

`[INSERT TESTIMONIAL DETAIL SCREENSHOT]`

### Content Elements
- Full testimony text
- Student photo
- Name, role, and cohort
- Key takeaways list
- Highlighted quote

---

## 5.11 Gallery Page

> **Route:** `/gallery`

`[INSERT GALLERY PAGE SCREENSHOT]`

### Categories

| Category | Description |
|:---------|:------------|
| All | View all images |
| Candlelight | Candlelight ceremony photos |
| Cultural | Cultural day events |
| Defence | Project defence sessions |
| Field | Field trip activities |
| Graduation | Graduation ceremonies |
| Dinner | Dinner events |

### Features
- Category filter buttons
- Masonry-style grid layout
- Lightbox modal for full view
- Dynamic content from database

---

# 6. Admin Dashboard Guide

> [!IMPORTANT]
> The admin dashboard is a password-protected area for managing website content. Access credentials should be kept secure at all times.

---

## 6.1 Accessing the Admin Panel

> **Login URL:** `/admin/login`
> 
> **Dashboard URL:** `/admin`

`[INSERT ADMIN LOGIN SCREENSHOT]`

### Authentication
- Password-based authentication
- Session management via secure cookies
- Auto-logout after inactivity

---

## 6.2 Dashboard Home

> **Route:** `/admin`

`[INSERT ADMIN DASHBOARD SCREENSHOT]`

### Statistics Overview

| Metric | Description |
|:-------|:------------|
| Total Enrollments | Count of all student enrollment submissions |
| Blog Posts | Number of published and draft articles |
| Testimonials | Active student testimonials count |
| Recent Activity | Latest actions and submissions |

---

## 6.3 Enrollments Management

> **Route:** `/admin/enrollments`

`[INSERT ENROLLMENTS MANAGEMENT SCREENSHOT]`

### Available Features
- Table view of all enrollments
- Student details (name, email, phone, country)
- Course selection display
- Enrollment date and time
- Status management
- Export functionality

### How to View Enrollments

| Step | Action |
|:----:|:-------|
| 1 | Navigate to "Enrollments" from sidebar |
| 2 | View all enrollment submissions in table |
| 3 | Click on any row to see full details |
| 4 | Use search/filter to find specific enrollments |

---

## 6.4 Blog Management

> **Route:** `/admin/blog`

`[INSERT BLOG MANAGEMENT SCREENSHOT]`

### Available Features
- List view of all blog posts
- Create new post button
- Edit and Delete actions
- Draft/Published status indicator

### Creating a New Blog Post

`[INSERT NEW BLOG POST FORM]`

| Step | Action |
|:----:|:-------|
| 1 | Click "New Post" button |
| 2 | Enter post title |
| 3 | Set URL slug (auto-generated or custom) |
| 4 | Write content in rich text editor |
| 5 | Upload featured image |
| 6 | Select category |
| 7 | Enter author name |
| 8 | Click "Publish" or "Save as Draft" |

### Editing a Post

| Step | Action |
|:----:|:-------|
| 1 | Click "Edit" on any post in the list |
| 2 | Modify content as needed |
| 3 | Click "Update" to save changes |

---

## 6.5 Testimonials Management

> **Route:** `/admin/testimonials`

`[INSERT TESTIMONIALS MANAGEMENT SCREENSHOT]`

### Available Features
- Grid view of all testimonials
- Add new testimonial button
- Edit existing testimonials
- Delete with confirmation

### Adding a New Testimonial

`[INSERT NEW TESTIMONIAL FORM]`

| Field | Description |
|:------|:------------|
| Full Name | Student's full name |
| Role/Position | Current role or position |
| Cohort | e.g., "11th Cohort" |
| Profile Image | Upload student photo |
| Short Quote | Brief testimonial excerpt |
| Highlight Text | Featured quote for display |
| Full Testimony | Complete testimonial text |
| Key Takeaways | Bullet points of main insights |

---

## 6.6 Gallery Management

> **Route:** `/admin/gallery`

`[INSERT GALLERY MANAGEMENT SCREENSHOT]`

### Available Features
- Grid view of all images
- Category filter with counts
- Add new image functionality
- Delete images with confirmation

### Adding a New Image

`[INSERT ADD GALLERY IMAGE FORM]`

| Step | Action |
|:----:|:-------|
| 1 | Click "Add Image" button |
| 2 | Enter image title |
| 3 | Select category from dropdown |
| 4 | Upload image file |
| 5 | Click "Add Image" to save |

### Available Categories
- Candlelight
- Cultural
- Defence
- Field
- Graduation
- Dinner

### Deleting an Image

| Step | Action |
|:----:|:-------|
| 1 | Locate the image in the grid |
| 2 | Click "Delete" in the image info section |
| 3 | Confirm deletion in the popup |

---

## 6.7 Settings

> **Route:** `/admin/settings`

`[INSERT SETTINGS PAGE SCREENSHOT]`

### Configurable Options
- Site title
- Contact email
- Phone number
- Social media links
- Other site-wide settings

---

# 7. Database Schema

> [!NOTE]
> All tables are hosted on Supabase PostgreSQL. Timestamps are in UTC.

---

## Table: `enrollments`

| Column | Type | Nullable | Description |
|:-------|:-----|:--------:|:------------|
| `id` | SERIAL | No | Primary key |
| `full_name` | TEXT | No | Student's full name |
| `email` | TEXT | No | Email address |
| `phone` | TEXT | No | Phone number |
| `country` | TEXT | No | Country of residence |
| `occupation` | TEXT | Yes | Current occupation |
| `course` | TEXT | No | Selected course |
| `referral_source` | TEXT | Yes | How they heard about ADEIPS |
| `statement` | TEXT | Yes | Personal statement |
| `status` | TEXT | No | Enrollment status |
| `created_at` | TIMESTAMP | No | Submission date |

---

## Table: `blog_posts`

| Column | Type | Nullable | Description |
|:-------|:-----|:--------:|:------------|
| `id` | SERIAL | No | Primary key |
| `title` | TEXT | No | Post title |
| `slug` | TEXT | No | URL-friendly slug |
| `content` | TEXT | No | Post content (HTML/Markdown) |
| `excerpt` | TEXT | Yes | Short excerpt for previews |
| `featured_image` | TEXT | Yes | Image URL |
| `category` | TEXT | No | Post category |
| `author` | TEXT | No | Author name |
| `status` | TEXT | No | draft / published |
| `created_at` | TIMESTAMP | No | Creation date |
| `updated_at` | TIMESTAMP | No | Last modification date |

---

## Table: `testimonials`

| Column | Type | Nullable | Description |
|:-------|:-----|:--------:|:------------|
| `id` | SERIAL | No | Primary key |
| `name` | TEXT | No | Student name |
| `role` | TEXT | Yes | Role/position |
| `cohort` | TEXT | No | Cohort identifier |
| `image` | TEXT | Yes | Photo URL |
| `quote` | TEXT | No | Short quote for cards |
| `full_testimony` | TEXT | No | Complete testimony |
| `highlight` | TEXT | Yes | Featured highlight text |
| `key_takeaways` | JSONB | Yes | Array of takeaway points |
| `created_at` | TIMESTAMP | No | Creation date |
| `updated_at` | TIMESTAMP | No | Last modification date |

---

## Table: `gallery_images`

| Column | Type | Nullable | Description |
|:-------|:-----|:--------:|:------------|
| `id` | SERIAL | No | Primary key |
| `src` | TEXT | No | Image URL |
| `title` | TEXT | No | Image title |
| `category` | TEXT | No | Category name |
| `created_at` | TIMESTAMP | No | Upload date |
| `updated_at` | TIMESTAMP | No | Last modification date |

---

# 8. API Routes Reference

> [!NOTE]
> All API routes are built using Next.js App Router API handlers. Admin routes require authentication.

---

## Public Endpoints

| Endpoint | Method | Description | Auth |
|:---------|:------:|:------------|:----:|
| `/api/blog` | GET | Get all published blog posts | No |
| `/api/blog/[id]` | GET | Get single blog post by ID | No |
| `/api/gallery` | GET | Get all gallery images | No |
| `/api/enroll` | POST | Submit enrollment form | No |

---

## Admin Endpoints

> [!WARNING]
> These endpoints require admin authentication. Unauthorized access will return 401.

| Endpoint | Method | Description |
|:---------|:------:|:------------|
| `/api/admin/verify` | POST | Verify admin password |
| `/api/admin/blog` | GET | Get all blog posts (including drafts) |
| `/api/admin/blog` | POST | Create new blog post |
| `/api/admin/blog` | PUT | Update existing blog post |
| `/api/admin/blog` | DELETE | Delete blog post |
| `/api/admin/enrollments` | GET | Get all enrollments |
| `/api/admin/testimonials` | GET | Get all testimonials |
| `/api/admin/testimonials` | POST | Create new testimonial |
| `/api/admin/testimonials` | PUT | Update existing testimonial |
| `/api/admin/testimonials` | DELETE | Delete testimonial |
| `/api/admin/gallery` | GET | Get all gallery images |
| `/api/admin/gallery` | POST | Add new gallery image |
| `/api/admin/gallery` | DELETE | Delete gallery image |

---

# 9. Deployment and Hosting

---

## Vercel Deployment

### Setup Process

| Step | Action |
|:----:|:-------|
| 1 | Connect GitHub repository to Vercel |
| 2 | Configure environment variables |
| 3 | Deploy automatically on push |

---

## Environment Variables

> [!CAUTION]
> Never commit these values to version control. Store them securely in Vercel dashboard.

```env
# ═══════════════════════════════════════════════
# SUPABASE CONFIGURATION
# ═══════════════════════════════════════════════
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# ═══════════════════════════════════════════════
# EMAIL CONFIGURATION (Nodemailer)
# ═══════════════════════════════════════════════
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=noreply@adeips.org

# ═══════════════════════════════════════════════
# ADMIN AUTHENTICATION
# ═══════════════════════════════════════════════
ADMIN_PASSWORD=your_secure_password

# ═══════════════════════════════════════════════
# NEXTAUTH (if applicable)
# ═══════════════════════════════════════════════
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=https://adeips.org
```

---

## Domain Configuration

| Step | Action |
|:----:|:-------|
| 1 | Add custom domain in Vercel Dashboard |
| 2 | Configure DNS records with your registrar |
| 3 | HTTPS enabled automatically by Vercel |

---

# 10. Development Challenges

> [!NOTE]
> The following technical challenges were encountered and resolved during development.

---

## Challenge 1: React Error #310 (Hooks Order)

| Aspect | Details |
|:-------|:--------|
| **Problem** | Application crashed with "Rendered more hooks than during the previous render" |
| **Root Cause** | `useEffect` hooks placed after early return statements |
| **Impact** | Application crash on certain page loads |

### Solution

```tsx
// INCORRECT - Hooks after conditional return
if (loading) return <Loader />;
useEffect(() => { ... }, []);

// CORRECT - Hooks before any conditional returns
useEffect(() => { ... }, []);
if (loading) return <Loader />;
```

---

## Challenge 2: Hydration Errors

| Aspect | Details |
|:-------|:--------|
| **Problem** | React hydration mismatch causing content flickering |
| **Root Cause** | Server HTML differed from client render |
| **Impact** | Console warnings and UI flickering |

### Solutions Applied
- Used `useState` with `useEffect` for client-only values
- Implemented `suppressHydrationWarning` where appropriate
- Used fixed values for animations instead of random generation
- Wrapped browser APIs in `typeof window !== 'undefined'` checks

---

## Challenge 3: Next.js 16 and Tailwind CSS v4 Incompatibility

| Aspect | Details |
|:-------|:--------|
| **Problem** | Breaking changes between Next.js 16 and Tailwind CSS v4 |
| **Root Cause** | New configuration syntax and deprecated utilities |
| **Impact** | Styling inconsistencies and build errors |

### Solutions Applied
- Updated Tailwind configuration to compatible syntax
- Replaced deprecated utility classes
- Configured PostCSS correctly
- Used CSS variables for theme colors

---

## Challenge 4: TypeScript Type Mismatches

| Aspect | Details |
|:-------|:--------|
| **Problem** | Type mismatches between API responses and component props |
| **Solution** | Created proper TypeScript interfaces in `/src/types/` |

---

## Challenge 5: Mobile Responsiveness

| Aspect | Details |
|:-------|:--------|
| **Problem** | Excessive whitespace on mobile devices |
| **Solution** | Mobile-first Tailwind classes |

```tsx
className="pt-24 md:pt-28 lg:pt-32"
```

---

# 11. Cost Breakdown

---

## Infrastructure Costs

| Item | Annual Cost | Notes |
|:-----|:-----------:|:------|
| Domain (.org) | N6,000 | Annual domain registration |
| Hosting (Vercel Preview) | N0 | Preview deployment URL |
| Database & Storage (Supabase Pro) | N37,500 | 8GB database + 100GB file storage |
| Email Service | N0 | Gmail SMTP integration |
| **Infrastructure Total** | **N43,500** | |

---

## Development Investment

> [!NOTE]
> The following represents professional development work over approximately 80-100 hours.

| Category | Amount | Scope |
|:---------|-------:|:------|
| Frontend Development & UX | N232,000 | Responsive pages, animations, components, user flows |
| Backend/API Development | N120,000 | RESTful APIs, database integration, auth logic |
| Admin Dashboard CRUD | N75,000 | Full CMS with create, read, update, delete |
| UI/UX Design | N0 | Included in frontend development |
| Testing & QA | N0 | Included in development process |
| Documentation | N0 | Included in project scope |
| **Development Total** | **N427,000** | |

---

## Total Project Investment

| Category | Amount |
|:---------|-------:|
| Domain (1 Year) | N6,000 |
| Database & Storage (1 Year) | N37,500 |
| Development Labor | N427,000 |
| | |
| **Grand Total** | **N470,500** |

---

> [!IMPORTANT]
> **Cost Notes:**
> - All prices in Nigerian Naira (N)
> - Supabase Pro includes database (8GB) and file storage (100GB)
> - Annual renewal required for domain and hosting
> - Additional features beyond current scope incur additional costs
> - Exchange rates may affect international service pricing

---

# 12. Maintenance Guide For Developers

---

## Scheduled Maintenance Tasks

### Weekly Checklist

- [ ] Review new enrollment submissions
- [ ] Moderate user-generated content
- [ ] Check Vercel error logs
- [ ] Respond to contact inquiries

### Monthly Checklist For Developers

- [ ] Update npm dependencies
- [ ] Review Supabase storage usage
- [ ] Perform database backup
- [ ] Analyze traffic and analytics
- [ ] Test all contact forms

### Quarterly Checklist

- [ ] Content audit and refresh
- [ ] Security vulnerability scan
- [ ] Performance optimization review
- [ ] Update images and media assets
- [ ] Review and update documentation

---

## Dependency Management

```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Update specific package
npm install package-name@latest

# Security audit
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## Security Best Practices

| Priority | Practice |
|:--------:|:---------|
| Critical | Rotate admin password every 90 days |
| Critical | Never commit `.env` files to git |
| High | Keep all dependencies updated |
| High | Enable 2FA on Vercel and Supabase |
| Medium | Monitor for suspicious login attempts |
| Medium | Regular database backups |
| Low | Review access logs monthly |

---

# 13. Future Enhancements

## Recommended Feature Roadmap

| Feature | Priority | Complexity | Estimated Effort |
|:--------|:--------:|:----------:|:----------------:|
| Student Portal/Login | High | Medium | 2-3 weeks |
| Course Videos Integration | High | High | 3-4 weeks |
| Online Payment Integration | High | Medium | 2-3 weeks |
| Certificate Generation | Medium | Medium | 1-2 weeks |
| Alumni Network Page | Medium | Low | 1 week |
| Event Calendar | Medium | Medium | 2 weeks |
| Live Chat Support | Low | Medium | 2 weeks |
| Multi-language Support | Low | High | 4+ weeks |
| Mobile App | Low | High | 8+ weeks |

---

# Appendix

# Document Credits

---

<div align="center">

## Powered by

# LYNX

*Precision-Engineered Digital Solutions*

---

| | |
|:--|:--|
| **Project** | ADEIPS Official Website |
| **Client** | AkanDavid Executive Institute of Public Speaking |
| **Development Team** | Lynx Digital Labs |
| **Tagline** | Web & App Development Services |
| **Lead Developer** | Larry David |
| **Completion** | November 2025 |

</div>

---

> *This documentation is maintained as part of the project repository and should be updated whenever significant changes are made to the codebase or features.*

---

**Document Version:** 1.0  
**Last Updated:** November 2025  
**Classification:** Client Deliverable
