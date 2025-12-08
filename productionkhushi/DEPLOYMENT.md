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

## Deployment Options

### Option 1: Netlify (Recommended)
1. Log in to [Netlify](https://netlify.com)
2. Drag and drop this entire folder to deploy
3. Configure environment variables in Site Settings > Environment Variables:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. The `_redirects` file is included for proper SPA routing

### Option 2: Vercel
1. Log in to [Vercel](https://vercel.com)
2. Import this folder or connect your Git repository
3. Add environment variables in Project Settings:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Option 3: AWS S3 + CloudFront
1. Upload all files to an S3 bucket
2. Enable static website hosting
3. Configure CloudFront distribution
4. Set up error pages to redirect to index.html

### Option 4: Traditional Web Hosting (cPanel, etc.)
1. Upload all files to public_html or www folder
2. Configure .htaccess for SPA routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
3. Set environment variables through hosting control panel

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
- [ ] Verify environment variables are set correctly
- [ ] Test contact form submission
- [ ] Test newsletter subscription
- [ ] Verify admin login works
- [ ] Check all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Verify all contact information displays correctly
- [ ] Test all internal links and navigation
- [ ] Check blog and project pages load from database

## Support
For technical support or questions, contact the development team.

Built: December 2024
