# Khushi Homes - Production Deployment Guide

This folder contains production-ready files for the Khushi Homes website.

## Contact Information
- **Phone:** +61 0406 996 223 and +61 0424238507
- **Email:** info@khushihomes.com.au
- **Address:** 440 Docklands Drive Docklands 3008

## Production Files
- **Total Size:** 1.1 MB (optimized)
- **Built with:** React 18, Vite 6, Tailwind CSS 3
- **Database:** Supabase
- **Build Date:** December 8, 2024

## IMPORTANT: Team Images Setup

The team profile images (sunny-profile.jpg, ritesh-profile.jpg, samrita-profile.jpg) are currently placeholder files.

**Before deploying, you must:**
1. Replace these placeholder images with actual team photos
2. Ensure images are properly sized (recommended: 800x800px or square aspect ratio)
3. Optimize images for web (use JPG format, 70-80% quality)

**Image locations to replace:**
- `/sunny-profile.jpg` - Sunny Katyal (Founder & CEO)
- `/samrita-profile.jpg` - Samrita Sharma (Head of Designs)
- `/ritesh-profile.jpg` - Ritesh Patel (Customer Relation Manager)

The logo file (Khushi_homes_logo.svg) is already included and working.

## Deployment Options

### Option 1: Netlify (Recommended)
1. Log in to [Netlify](https://netlify.com)
2. **Replace the placeholder team images with actual photos**
3. Drag and drop this entire folder to deploy
4. Configure environment variables in Site Settings > Environment Variables:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
5. The `_redirects` file is included for proper SPA routing

### Option 2: Vercel
1. Log in to [Vercel](https://vercel.com)
2. **Replace the placeholder team images with actual photos**
3. Import this folder or connect your Git repository
4. Add environment variables in Project Settings:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Option 3: AWS S3 + CloudFront
1. **Replace the placeholder team images with actual photos**
2. Upload all files to an S3 bucket
3. Enable static website hosting
4. Configure CloudFront distribution
5. Set up error pages to redirect to index.html

### Option 4: Traditional Web Hosting (cPanel, etc.)
1. **Replace the placeholder team images with actual photos**
2. Upload all files to public_html or www folder
3. The `.htaccess` file is included for proper routing
4. Set environment variables through hosting control panel

## Required Environment Variables
You must configure these environment variables in your hosting platform:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Features Included
- Responsive design (mobile-first)
- Admin dashboard (/admin)
- Contact form with Supabase integration
- Newsletter subscription
- Project gallery (dynamic from database)
- Blog section (dynamic from database)
- Testimonials slider
- SEO-friendly structure
- All contact information updated

## Admin Access
- URL: `yourdomain.com/admin`
- Uses Supabase authentication
- Manage blogs, projects, contacts, and newsletter subscribers

## Database Requirements
The website requires the following Supabase tables:
- `contact_submissions` - Contact form entries
- `newsletter_subscriptions` - Email subscribers
- `blogs` - Blog posts
- `projects` - Project portfolio

All migrations are included in the source code.

## Post-Deployment Checklist
- [ ] **Replace placeholder team images with actual photos**
- [ ] Verify environment variables are set correctly
- [ ] Test contact form submission
- [ ] Test newsletter subscription
- [ ] Verify admin login works
- [ ] Check all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Verify all contact information displays correctly
- [ ] Test all internal links and navigation
- [ ] Check blog and project pages load from database
- [ ] Verify team images display correctly

## Fixed Issues
- ✓ Logo path corrected (now uses /Khushi_homes_logo.svg)
- ✓ Team image paths corrected (removed /static/ prefix)
- ✓ Contact information updated throughout site
- ✓ SEO meta tags added
- ✓ Production build optimized

## Support
For technical support or questions, contact the development team.

Built: December 2024
