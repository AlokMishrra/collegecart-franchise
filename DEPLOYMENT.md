# Deployment Guide - CollegeCart Franchise

## 🚀 Recommended: Deploy to Cloudflare Pages

This app is built with TanStack Start and optimized for Cloudflare Pages.

### Option 1: Deploy via Cloudflare Dashboard (Easiest)

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com
   - Navigate to **Workers & Pages** → **Create Application** → **Pages**

2. **Connect GitHub Repository**
   - Select: `AlokMishrra/collegecart-franchise`
   - Click **Begin setup**

3. **Configure Build Settings**
   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

4. **Add Environment Variables**
   ```
   SUPABASE_URL=https://jpxqkrekkzvyvafhxzzr.supabase.co
   SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpweHFrcmVra3p2eXZhZmh4enpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNjk5MTgsImV4cCI6MjA5Mzc0NTkxOH0.5bqbESqLgOshtSHqGR0Uh3oqN7lCMQLtDUTk1Hf8IDk
   VITE_SUPABASE_URL=https://jpxqkrekkzvyvafhxzzr.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpweHFrcmVra3p2eXZhZmh4enpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNjk5MTgsImV4cCI6MjA5Mzc0NTkxOH0.5bqbESqLgOshtSHqGR0Uh3oqN7lCMQLtDUTk1Hf8IDk
   VITE_SUPABASE_PROJECT_ID=jpxqkrekkzvyvafhxzzr
   ```

5. **Click "Save and Deploy"**

Your site will be live at: `https://collegecart-franchise.pages.dev`

### Option 2: Deploy via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run build
wrangler pages deploy dist --project-name=collegecart-franchise
```

---

## ⚠️ Vercel Deployment (Not Recommended)

Vercel deployment has compatibility issues with TanStack Start + Cloudflare adapter.

If you still want to use Vercel:

1. Remove `@cloudflare/vite-plugin` from dependencies
2. Switch to a Vercel-compatible adapter
3. Update `vite.config.ts` and `wrangler.jsonc`

**This requires significant code changes and is not recommended.**

---

## 🔧 Environment Variables Required

Make sure to add these environment variables in your deployment platform:

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

---

## 📝 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎯 Current Deployment Status

- **Platform**: Attempting Vercel (has compatibility issues)
- **Recommended**: Cloudflare Pages
- **Local Dev**: http://localhost:8080 ✅

---

## 🆘 Troubleshooting

### 404 Errors After Deployment
- Ensure build output directory is set to `dist`
- Check that environment variables are properly configured
- Verify the build completed successfully

### Build Failures
- Check Node.js version (requires 18+)
- Ensure all environment variables are set
- Review build logs for specific errors

### Supabase Connection Issues
- Verify Supabase URL and keys are correct
- Check Supabase project is active
- Ensure CORS is configured in Supabase dashboard
