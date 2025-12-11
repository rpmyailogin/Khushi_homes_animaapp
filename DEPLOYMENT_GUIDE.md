# Deployment Guide - Khushi Homes Website

This guide explains how to deploy your website with the under construction page and continue development work seamlessly.

## Overview

Your website now has a built-in under construction mode that can be toggled with a single environment variable. This allows you to:
- Show visitors a professional "coming soon" page while you continue development
- Work on the full website locally without any interruptions
- Access the admin panel even when construction mode is active
- Launch the full site instantly when ready by changing one variable

## Environment Variable

The entire system is controlled by one environment variable:

```
VITE_UNDER_CONSTRUCTION=true   # Shows under construction page
VITE_UNDER_CONSTRUCTION=false  # Shows full website
```

## Local Development Setup

### Step 1: Create .env.local File

The `.env.local` file has already been created for you with:

```
VITE_SUPABASE_URL=https://yeznlyebrnkcmkeyykne.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_UNDER_CONSTRUCTION=false
```

This file is automatically ignored by Git and won't be committed.

### Step 2: Run Development Server

```bash
npm run dev
```

When you run `npm run dev`, you'll see the FULL website because `.env.local` has `VITE_UNDER_CONSTRUCTION=false`.

**Your workflow stays exactly the same:**
- All pages accessible
- Admin panel works normally
- Make changes, add content, test features
- No interruptions to your development

## Production Deployment

### Option 1: Deploy to Netlify (Recommended)

#### Step 1: Build the Project
```bash
npm run build
```

#### Step 2: Deploy via Netlify CLI or Drag & Drop
- Drag the `dist` folder to Netlify
- OR use Netlify CLI: `netlify deploy --prod`

#### Step 3: Configure Environment Variables in Netlify
1. Go to your site in Netlify Dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add these variables:
   ```
   VITE_SUPABASE_URL = https://yeznlyebrnkcmkeyykne.supabase.co
   VITE_SUPABASE_ANON_KEY = your_anon_key
   VITE_UNDER_CONSTRUCTION = true
   ```

#### Step 4: Redeploy
Netlify will rebuild your site with the new environment variables.

### Option 2: Deploy to Vercel

#### Step 1: Install Vercel CLI (if not already installed)
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
vercel --prod
```

#### Step 3: Configure Environment Variables in Vercel
1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   ```
   VITE_SUPABASE_URL = https://yeznlyebrnkcmkeyykne.supabase.co
   VITE_SUPABASE_ANON_KEY = your_anon_key
   VITE_UNDER_CONSTRUCTION = true
   ```

#### Step 4: Redeploy
```bash
vercel --prod
```

### Option 3: Deploy to Any Static Host

#### Step 1: Build
```bash
npm run build
```

#### Step 2: Upload dist folder
Upload the contents of the `dist` folder to your hosting provider:
- AWS S3
- Google Cloud Storage
- Azure Static Web Apps
- Your own server
- Any static hosting provider

#### Step 3: Set Environment Variables
Most hosting providers have a way to set environment variables. Set:
```
VITE_UNDER_CONSTRUCTION=true
```

Note: If your hosting provider doesn't support environment variables at build time, you'll need to modify your `.env` file before building.

## What Visitors See

### When VITE_UNDER_CONSTRUCTION=true (Production - Before Launch)
- Visitors see the under construction page
- Professional hero section with company branding
- Contact form that saves submissions to Supabase
- Company contact information displayed
- Admin panel accessible at `yourdomain.com/admin/login`

### When VITE_UNDER_CONSTRUCTION=false (After Launch)
- Full website visible to everyone
- All pages accessible
- Complete navigation
- Admin panel still accessible

## Admin Panel Access

**Important:** The admin panel is ALWAYS accessible regardless of construction mode.

- URL: `yourdomain.com/admin/login`
- Login with your credentials
- Manage blogs, projects, contacts, and newsletter subscribers
- Continue content management while site is under construction

## Development Workflow

### Daily Development (Construction Mode Active in Production)

1. **Morning: Start Development**
   ```bash
   npm run dev
   ```
   You see the full website because `.env.local` has construction mode OFF.

2. **Work Normally**
   - Add features
   - Update content via admin panel
   - Test everything locally
   - Make changes to any component

3. **Commit & Push Changes**
   ```bash
   git add .
   git commit -m "Added new features"
   git push
   ```

4. **Production Deploys Automatically**
   - If using Netlify/Vercel with continuous deployment
   - Production shows under construction page (because production env var is true)
   - Your work is safe and tested

5. **Visitors Experience**
   - See the under construction page
   - Can still contact you via the form
   - Professional presentation

## Launch Day: Going Live

When you're ready to launch the full website to the public:

### Step 1: Ensure Everything is Ready
- Test all features locally
- Verify all content is correct
- Check admin panel functionality
- Test contact forms

### Step 2: Change Production Environment Variable

**For Netlify:**
1. Go to Site settings → Environment variables
2. Change `VITE_UNDER_CONSTRUCTION` from `true` to `false`
3. Trigger a new deploy

**For Vercel:**
1. Go to Settings → Environment Variables
2. Change `VITE_UNDER_CONSTRUCTION` from `true` to `false`
3. Redeploy with `vercel --prod`

**For other hosting:**
1. Update environment variable in your hosting dashboard
2. OR rebuild with updated `.env` file
3. Deploy the new build

### Step 3: Verify Launch
- Visit your domain
- Confirm full website is visible
- Test navigation through all pages
- Verify admin panel still works

## File Structure

### Files Modified/Created
```
.env                          # Production config (not committed)
.env.local                    # Local development config (not committed)
.env.example                  # Template for reference (committed)
src/App.tsx                   # Modified with conditional rendering
src/components/UnderConstruction.tsx  # New component
DEPLOYMENT_GUIDE.md           # This file
```

### What Gets Committed to Git
- `.env.example` (template)
- `src/App.tsx` (updated logic)
- `src/components/UnderConstruction.tsx` (new component)
- `DEPLOYMENT_GUIDE.md` (documentation)

### What Stays Local
- `.env` (your actual credentials)
- `.env.local` (your local development settings)
- `node_modules/`
- `dist/`

## Troubleshooting

### I see the construction page in development
- Check that `.env.local` exists
- Verify it has `VITE_UNDER_CONSTRUCTION=false`
- Restart your dev server: Stop (Ctrl+C) and run `npm run dev` again

### Production still shows full website when it should show construction page
- Check environment variables in your hosting dashboard
- Ensure `VITE_UNDER_CONSTRUCTION=true` is set
- Rebuild and redeploy
- Clear browser cache

### Admin panel not accessible
- Admin panel should always work at `/admin/login`
- Check that you're using the correct URL path
- Verify Supabase connection is working

### Contact form not working on construction page
- Check Supabase credentials are correct in environment variables
- Verify `contact_submissions` table exists in Supabase
- Check browser console for errors

## Custom Domain Setup

If you're using a custom domain:

### For Netlify
1. Go to Domain settings
2. Add custom domain
3. Update DNS records as instructed
4. SSL certificate is automatic

### For Vercel
1. Go to Domains
2. Add your domain
3. Update DNS records
4. SSL certificate is automatic

## Support & Next Steps

Your website is now ready to deploy with zero risk to your development workflow!

**Key Takeaways:**
- Development: Always see full site with `.env.local`
- Production: Show construction page until ready
- Launch: Change one environment variable
- Admin: Always accessible for content management

**Questions?**
- Check Supabase documentation: https://supabase.com/docs
- Check Vite documentation: https://vitejs.dev/
- Check your hosting provider's documentation
