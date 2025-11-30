# ADEIPS Official Website - Complete Project Documentation

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Technologies](#2-tech-stack--technologies)
3. [Project Architecture](#3-project-architecture)
4. [Features Overview](#4-features-overview)
5. [Page-by-Page Breakdown](#5-page-by-page-breakdown)
6. [Admin Dashboard Guide](#6-admin-dashboard-guide)
7. [Database Schema](#7-database-schema)
8. [API Routes Reference](#8-api-routes-reference)
9. [Deployment & Hosting](#9-deployment--hosting)
10. [Development Challenges](#10-development-challenges)
11. [Cost Breakdown](#11-cost-breakdown)
12. [Maintenance Guide](#12-maintenance-guide)
13. [Future Enhancements](#13-future-enhancements)

---

# 1. Project Overview

## About the Project

**ADEIPS (AkanDavid Executive Institute of Public Speaking)** is a premium public speaking training institute based in Uyo, Nigeria.

### Project Purpose

This website serves as the official digital footprint of the institute, establishing a professional online presence that reflects the organization's commitment to excellence in public speaking education. The platform enables prospective students to discover programs, current students to stay connected, and the institution to maintain a lasting digital legacy.

### Key Features

- A modern, responsive marketing website
- Student enrollment system with email notifications
- Admin dashboard for content management
- Blog system for thought leadership
- Testimonials management
- Gallery management

## Live Website

**Preview URL:** [https://adeips-official-website.vercel.app/](https://adeips-official-website.vercel.app/)

**Repository:** [https://github.com/L1a6/adeips-official-website.gite](https://github.com/L1a6/adeips-official-website.git)

## Development Timeline

- **Start Date:** November 2025
- **Completion Date:** November 2025
- **Total Development Time:** ~2 weeks

---

# 2. Tech Stack and Technologies

## Core Technologies

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js | 16.0.3 | React framework with App Router |
| **Language** | TypeScript | 5.x | Type-safe JavaScript |
| **Styling** | Tailwind CSS | 4.x | Utility-first CSS framework |
| **Database** | PostgreSQL | 15.x | Relational database (via Supabase) |
| **Backend** | Supabase | Latest | Database + Storage + Auth |
| **Animation** | Framer Motion | 11.x | React animation library |
| **Animation** | Lottie | - | JSON-based animations |
| **Email** | Nodemailer | 6.x | Email sending service |
| **Theming** | next-themes | 0.x | Dark/Light mode support |
| **Preview Hosting** | Vercel | - | Serverless deployment |

## Key Dependencies

```json
{
  "next": "^16.0.3",
  "react": "^19.0.0",
  "typescript": "^5.x",
  "tailwindcss": "^4.x",
  "@supabase/supabase-js": "^2.x",
  "framer-motion": "^11.x",
  "lottie-react": "^2.x",
  "nodemailer": "^6.x",
  "next-themes": "^0.x",
  "lucide-react": "^0.x"
}
```

## Design System

- **Primary Color:** Navy Blue `#0A1236`
- **Accent Color:** Red `#E62A2A`
- **Font (Headings):** Outfit
- **Font (Body):** Default system fonts
- **Theme:** Light/Dark mode support (default: Light)

---

# 3. Summarized Project Architecture

## Folder Structure

```
adeips-official-website/
├── public/
│   ├── animations/          # Lottie JSON files
│   ├── images/
│   │   ├── facilitators/    # Team member photos
│   │   ├── gallery/         # Gallery images
│   │   ├── hero/           # Hero section backgrounds
│   │   ├── leadership/     # Leadership photos
│   │   ├── testimonials/   # Testimonial photos
│   │   └── uploads/        # User-uploaded content
│   └── logo.png
│
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx        # Home page
│   │   ├── layout.tsx      # Root layout
│   │   ├── globals.css     # Global styles
│   │   ├── about/          # About pages
│   │   ├── admin/          # Admin dashboard
│   │   ├── api/            # API routes
│   │   ├── blog/           # Blog pages
│   │   ├── courses/        # Courses page
│   │   ├── enroll/         # Enrollment page
│   │   ├── gallery/        # Gallery page
│   │   └── testimonials/   # Testimonials pages
│   │
│   ├── components/
│   │   ├── emails/         # Email templates
│   │   ├── home/           # Home page components
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   ├── shared/         # Reusable components
│   │   └── ui/             # UI primitives
│   │
│   ├── data/               # Static data files
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript types
│
├── supabase/
│   ├── migrations/         # Database migrations
│   └── seed.sql            # Seed data
│
└── docs/                   # Documentation
```

## Data Flow

```
[User] → [Next.js Frontend] → [API Routes] → [Supabase Database]
                                    ↓
                              [Supabase Storage]
                                    ↓
                              [Email Service]
```

---

# 4. Features Overview

## Public Features

| Feature | Description |
|---------|-------------|
| **Home Page** | Hero section, course highlights, testimonials, FAQ |
| **About Pages** | Organization info, leadership, facilitators |
| **Courses Page** | Detailed course information with icons |
| **Enrollment** | Multi-step enrollment form with validation |
| **Blog** | Dynamic blog with categories and full articles |
| **Testimonials** | Student success stories with full testimonies |
| **Gallery** | Photo gallery with category filtering |
| **Dark Mode** | Light/Dark theme toggle |

## Admin Features

| Feature | Description |
|---------|-------------|
| **Dashboard** | Overview with key statistics |
| **Enrollments** | View and manage student enrollments |
| **Blog Management** | Create, edit, delete blog posts |
| **Testimonials** | Manage student testimonials |
| **Gallery** | Upload and manage gallery images |
| **Settings** | Site configuration options |

---

# 5. Page-by-Page Breakdown

## Home Page (`/`)

**Screenshot placeholder:** `[INSERT HOME PAGE SCREENSHOT]`

### Sections:
1. **Hero Section** - Full-screen hero with animated text and Lottie animation
2. **Transform Section** - Value proposition with statistics
3. **Progressive Scroll** - Course preview with scroll animations
4. **Testimonials Section** - Rotating testimonial cards
5. **FAQ Section** - Expandable FAQ accordion
6. **Enroll Section** - Call-to-action for enrollment
7. **Closing Section** - Final CTA

### Key Features:
- Lottie animation integration
- Framer Motion scroll animations
- Dynamic testimonials from database
- Responsive design

---

## About Page (`/about`)

**Screenshot placeholder:** `[INSERT ABOUT PAGE SCREENSHOT]`

### Content:
- Organization history
- Mission and vision
- Core values
- Link to leadership and facilitators pages

---

## Leadership Page (`/about/leadership`)

**Screenshot placeholder:** `[INSERT LEADERSHIP PAGE SCREENSHOT]`

### Content:
- Founder profile 
- Leadership team cards
- Social media links
- Profile images

---

## Facilitators Page (`/about/facilitators`)

**Screenshot placeholder:** `[INSERT FACILITATORS PAGE SCREENSHOT]`

### Content:
- Grid of facilitator cards
- Name, title, specialization
- Profile photos
- Hover animations

---

## Courses Page (`/courses`)

**Screenshot placeholder:** `[INSERT COURSES PAGE SCREENSHOT]`

### Courses Listed:
1. Opening & Closing For Impact
2. Executive Presence & Stage Mastery
3. Linguistic Precision & Vocabulary
4. Memory Optimisation
5. Emotional Intelligence
6. Humour Integration
7. Research & Data Presentation
8. Vocal Engineering
9. Handling Q&A Sessions
10. Personal Branding

### Features:
- Custom Lucide icons for each course
- Expandable course details
- Enrollment CTAs

---

## Enrollment Page (`/enroll`)

**Screenshot placeholder:** `[INSERT ENROLLMENT PAGE SCREENSHOT]`

### Form Fields:
- Full Name
- Email Address
- Phone Number
- Country
- Occupation
- Course Selection
- How did you hear about us?
- Personal statement/motivation

### Features:
- Form validation
- Success/error feedback
- Email notification to admin
- Welcome email to student
- Data stored in Supabase

---

## Blog Page (`/blog`)

**Screenshot placeholder:** `[INSERT BLOG PAGE SCREENSHOT]`

### Features:
- Blog post cards with featured images
- Category filtering
- Search functionality
- Pagination
- Dynamic content from database

---

## Blog Post Page (`/blog/[slug]`)

**Screenshot placeholder:** `[INSERT BLOG POST SCREENSHOT]`

### Features:
- Full article content
- Author info
- Publication date
- Category tags
- Related posts
- Social sharing

---

## Testimonials Page (`/testimonials`)

**Screenshot placeholder:** `[INSERT TESTIMONIALS PAGE SCREENSHOT]`

### Features:
- Grid of testimonial cards
- Student photos
- Short quotes
- Click to view full testimony

---

## Testimonial Detail Page (`/testimonials/[id]`)

**Screenshot placeholder:** `[INSERT TESTIMONIAL DETAIL SCREENSHOT]`

### Content:
- Full testimony text
- Student photo
- Name, role, cohort
- Key takeaways
- Highlight quote

---

## Gallery Page (`/gallery`)

**Screenshot placeholder:** `[INSERT GALLERY PAGE SCREENSHOT]`

### Categories:
- All
- Candlelight
- Cultural
- Defence
- Field
- Graduation
- Dinner

### Features:
- Category filter buttons
- Masonry-style grid
- Lightbox modal for full view
- Dynamic content from database

---

# 6. Admin Dashboard Guide

## Accessing the Admin Panel

**URL:** `/admin`

**Login Page:** `/admin/login`

**Screenshot placeholder:** `[INSERT ADMIN LOGIN SCREENSHOT]`

### Authentication:
- Password-based authentication
- Secure storage

---

## Dashboard Home (`/admin`)

**Screenshot placeholder:** `[INSERT ADMIN DASHBOARD SCREENSHOT]`

### Statistics Displayed:
- Total enrollments
- Blog posts count
- Testimonials count
- Recent activity

---

## Enrollments Management (`/admin/enrollments`)

**Screenshot placeholder:** `[INSERT ENROLLMENTS MANAGEMENT SCREENSHOT]`

### Features:
- Table view of all enrollments
- Student details (name, email, phone, country)
- Course selected
- Enrollment date
- Status management
- Export options

### How to Use:
1. Navigate to Enrollments from sidebar
2. View all enrollment submissions
3. Click on a row to see full details
4. Use filters to search specific enrollments

---

## Blog Management (`/admin/blog`)

**Screenshot placeholder:** `[INSERT BLOG MANAGEMENT SCREENSHOT]`

### Features:
- List of all blog posts
- Create new post button
- Edit/Delete actions
- Draft/Published status

### Creating a New Post:

**Screenshot placeholder:** `[INSERT NEW BLOG POST FORM]`

1. Click "New Post" button
2. Fill in:
   - Title
   - Slug (URL-friendly)
   - Content (rich text)
   - Featured image (upload)
   - Category
   - Author name
3. Click "Publish" or "Save as Draft"

### Editing a Post:
1. Click "Edit" on any post
2. Modify content
3. Click "Update"

---

## Testimonials Management (`/admin/testimonials`)

**Screenshot placeholder:** `[INSERT TESTIMONIALS MANAGEMENT SCREENSHOT]`

### Features:
- Grid view of testimonials
- Add new testimonial
- Edit existing testimonials
- Delete with confirmation

### Adding a Testimonial:

**Screenshot placeholder:** `[INSERT NEW TESTIMONIAL FORM]`

1. Click "Add Testimonial"
2. Fill in:
   - Full Name
   - Role/Position
   - Cohort (e.g., "11th Cohort")
   - Profile Image (upload)
   - Short Quote
   - Highlight Text
   - Full Testimony
   - Key Takeaways (add multiple)
3. Click "Create Testimonial"

---

## Gallery Management (`/admin/gallery`)

**Screenshot placeholder:** `[INSERT GALLERY MANAGEMENT SCREENSHOT]`

### Features:
- Grid view of all images
- Category filter buttons with counts
- Add new image
- Delete images

### Adding an Image:

**Screenshot placeholder:** `[INSERT ADD GALLERY IMAGE FORM]`

1. Click "Add Image"
2. Enter Image Title
3. Select Category from dropdown:
   - Candlelight
   - Cultural
   - Defence
   - Field
   - Graduation
   - Dinner
4. Upload image file
5. Click "Add Image"

### Deleting an Image:
1. Find the image in the grid
2. Click "Delete" in the image info section
3. Confirm deletion

---

## Settings (`/admin/settings`)

**Screenshot placeholder:** `[INSERT SETTINGS PAGE SCREENSHOT]`

### Available Settings:
- Site title
- Contact email
- Phone number
- Social media links
- Other configuration

---

# 7. Database Schema

## Tables

### `enrollments`
| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| full_name | TEXT | Student's full name |
| email | TEXT | Email address |
| phone | TEXT | Phone number |
| country | TEXT | Country of residence |
| occupation | TEXT | Current occupation |
| course | TEXT | Selected course |
| referral_source | TEXT | How they heard about ADEIPS |
| statement | TEXT | Personal statement |
| status | TEXT | Enrollment status |
| created_at | TIMESTAMP | Submission date |

### `blog_posts`
| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| title | TEXT | Post title |
| slug | TEXT | URL slug |
| content | TEXT | Post content |
| excerpt | TEXT | Short excerpt |
| featured_image | TEXT | Image URL |
| category | TEXT | Post category |
| author | TEXT | Author name |
| status | TEXT | draft/published |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last updated |

### `testimonials`
| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| name | TEXT | Student name |
| role | TEXT | Role/position |
| cohort | TEXT | Cohort number |
| image | TEXT | Photo URL |
| quote | TEXT | Short quote |
| full_testimony | TEXT | Full story |
| highlight | TEXT | Highlight text |
| key_takeaways | JSONB | Array of takeaways |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last updated |

### `gallery_images`
| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key |
| src | TEXT | Image URL |
| title | TEXT | Image title |
| category | TEXT | Category name |
| created_at | TIMESTAMP | Upload date |
| updated_at | TIMESTAMP | Last updated |

---

# 8. API Routes Reference

## Public API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/blog` | GET | Get all published blog posts |
| `/api/blog/[id]` | GET | Get single blog post |
| `/api/gallery` | GET | Get gallery images |
| `/api/enroll` | POST | Submit enrollment form |

## Admin API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/verify` | POST | Verify admin password |
| `/api/admin/blog` | GET | Get all blog posts |
| `/api/admin/blog` | POST | Create blog post |
| `/api/admin/blog` | PUT | Update blog post |
| `/api/admin/blog` | DELETE | Delete blog post |
| `/api/admin/enrollments` | GET | Get all enrollments |
| `/api/admin/testimonials` | GET | Get all testimonials |
| `/api/admin/testimonials` | POST | Create testimonial |
| `/api/admin/testimonials` | PUT | Update testimonial |
| `/api/admin/testimonials` | DELETE | Delete testimonial |
| `/api/admin/gallery` | GET | Get all gallery images |
| `/api/admin/gallery` | POST | Add gallery image |
| `/api/admin/gallery` | DELETE | Delete gallery image |

---

# 9. Deployment and Hosting

## Vercel Deployment

### Setup Steps:
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy

### Environment Variables Required:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=noreply@adeips.org

# Admin
ADMIN_PASSWORD=your_secure_password

# NextAuth (if used)
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=https://adeips.org
```

### Domain Configuration:
1. Add custom domain in Vercel
2. Configure DNS records
3. Enable HTTPS (automatic)

---

# 10. Development Challenges

## Some sChallenges Faced and Solutions

### 1. React Error #310 (Hooks Order)

**Problem:** Application crashed with "Rendered more hooks than during the previous render"

**Cause:** `useEffect` hooks were placed after early return statements, causing different hook counts between renders.

**Solution:** Moved all `useEffect` hooks before any conditional returns.

```tsx
// Wrong
if (loading) return <Loader />;
useEffect(() => { ... }, []);

// Correct
useEffect(() => { ... }, []);
if (loading) return <Loader />;
```

---

### 2. Hydration Errors

**Problem:** React hydration mismatch errors causing content flickering and console warnings.

**Cause:** Server-rendered HTML differed from client-side rendered content due to dynamic values like random numbers, dates, or browser-specific APIs.

**Solution:**
- Used `useState` with `useEffect` for client-only values
- Implemented `suppressHydrationWarning` where appropriate
- Used fixed values for animations instead of random generation
- Wrapped browser-specific code in `typeof window !== 'undefined'` checks

---

### 3. Next.js 16 and Tailwind CSS v4 Incompatibility

**Problem:** Breaking changes between Next.js 16 and Tailwind CSS v4 caused styling inconsistencies and build errors.

**Cause:** Tailwind CSS v4 introduced a new configuration syntax and deprecated certain utilities that were incompatible with Next.js 16's app router.

**Solution:**
- Updated Tailwind configuration to v3 syntax
- Replaced deprecated utility classes with new equivalents
- Configured PostCSS correctly for the new Tailwind version
- Used CSS variables for theme colors instead of Tailwind's built-in dark mode

---

### 4. TypeScript Errors

**Problem:** Type mismatches between API responses and component props.

**Solution:** Created proper TypeScript interfaces in `/src/types/` and ensured consistency.

---

### 5. Mobile Responsiveness

**Problem:** Excessive whitespace on mobile devices.

**Solution:** Used responsive Tailwind classes with mobile-first approach:
```tsx
className="pt-24 md:pt-28 lg:pt-32"
```

---

# 11. Cost Breakdown

## Development Costs

| Item | Cost | Notes |
|------|------|-------|
| **Domain** | N6,000/year | .org domain registration |
| **Hosting (Vercel Preview)** | N0 | Preview deployment URL |
| **Database and Storage (Supabase Pro)** | N37,500 | PostgreSQL database hosting with up to 8GB database storage and 100GB file storage |
| **Email Service** | N0 | Gmail SMTP integration |

## Labor Cost

The following breakdown represents the professional development work invested in this project over approximately 80-100 hours:

| Category | Amount | Notes |
|----------|--------|-------|
| Frontend Development and UX Implementation | N232,000 | Building responsive pages, animations, components, and user experience flows |
| Backend/API Development | N120,000 | RESTful API routes, database integration, authentication logic |
| Admin Dashboard CRUD | N75,000 | Full content management system with create, read, update, delete functionality |
| UI/UX Design | N0 | Design work included in frontend development |
| Testing and Bug Fixes | N0 | Quality assurance included in development process |
| Documentation | N0 | Technical documentation included in project scope |
| **Total Labor** | **N427,000** | |

**Note on Labor Costs:** These figures reflect standard professional development rates for a project of this scope and complexity. The labor cost accounts for expertise in modern web technologies including Next.js 16, TypeScript, Tailwind CSS v4, and Supabase integration. Rates may vary based on developer experience level and market conditions.

## Total Project Cost Summary

| Category | Amount |
|----------|--------|
| Domain (1 Year) | N6,000 |
| Database and Storage (Supabase Pro - 1 Year) | N37,500 |
| Development Labor | N427,000 |
| **Grand Total** | **N470,500** |

**Important Notes:**
- All prices are in Nigerian Naira (N) 
- Supabase Pro Plan includes both database (up to 8GB) and file storage (up to 100GB)
- Ongoing hosting costs apply annually after the first year
- Additional features or modifications beyond the current scope would incur additional labor costs
- Exchange rate fluctuations may affect pricing for international services

---

# 12. Maintenance Guide

## Regular Maintenance Tasks

### Weekly:
- [ ] Check enrollment submissions
- [ ] Review and moderate new content
- [ ] Monitor error logs in Vercel

### Monthly:
- [ ] Update npm dependencies
- [ ] Review Supabase storage usage
- [ ] Backup database
- [ ] Check analytics reports

### Quarterly:
- [ ] Review and update content
- [ ] Security audit
- [ ] Performance optimization
- [ ] Update images and media

## Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm install package-name@latest
```

## Security Best Practices

1. Keep admin password secure and rotate regularly
2. Never commit `.env` files to git
3. Regularly update dependencies
4. Monitor for suspicious activity
5. Enable 2FA on Vercel and Supabase

---

# 13. Future Enhancements

## Potential Future Features

| Feature | Priority | Complexity |
|---------|----------|------------|
| Student portal/login | High | Medium |
| Course videos integration | High | High |
| Online payment integration | High | Medium |
| Certificate generation | Medium | Medium |
| Alumni network page | Medium | Low |
| Event calendar | Medium | Medium |
| Live chat support | Low | Medium |
| Multi-language support | Low | High |
| Mobile app | Low | High |

---

## Notion Tips

1. Use `/toc` to insert auto-generated Table of Contents
2. Use `/callout` for important notes
3. Use `/toggle` for expandable sections
4. Use `/image` to add screenshots
5. Use `/divider` between major sections

---

# Credits

<div align="center">

### Powered by

# 𝗟𝗬𝗡𝗫

*Precision-Engineered Digital Solutions*

</div>

---

**Project:** ADEIPS Official Website  
**Client:** AkanDavid Executive Institute of Public Speaking  
**Lead Developer:** Larry David  
**Company:** Lynx Software Development  
**Completion Date:** November 2025

---

*This documentation is maintained as part of the project repository and should be updated whenever significant changes are made to the codebase or features.*
