# Deploying Umesh Goli's Portfolio to Vercel

This guide will help you push the project to GitHub and deploy to Vercel quickly.

## 1) Prepare locally
- Ensure Node 18+ and npm are installed.
- Rename `.env.example` to `.env.local` and fill in your EmailJS keys:
  - VITE_EMAILJS_SERVICE_ID
  - VITE_EMAILJS_TEMPLATE_ID
  - VITE_EMAILJS_PUBLIC_KEY
- Example `.env.local`:
```
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=public_xxx
VITE_PORTFOLIO_URL=https://umeshgoli.vercel.app
```

## 2) Install & run locally
```
npm install
npm run dev
```
Open http://localhost:5173 to preview.

## 3) Push to GitHub
- Initialize git and commit your files:
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/umeshgoli-portfolio.git
git push -u origin main
```

## 4) Deploy on Vercel (GUI method)
1. Go to https://vercel.com and sign in with GitHub.
2. Click "New Project" → Import your `umeshgoli-portfolio` repository.
3. Set the Environment Variables in Vercel project settings:
   - VITE_EMAILJS_SERVICE_ID
   - VITE_EMAILJS_TEMPLATE_ID
   - VITE_EMAILJS_PUBLIC_KEY
4. Click Deploy.

## 5) Manual deploy via Vercel CLI
```
npm i -g vercel
vercel login
vercel
# follow CLI prompts to link or create a project
```

## Notes
- EmailJS requires the public key and template/service IDs — get them from https://www.emailjs.com/
- The contact form falls back to showing "EmailJS keys missing" message if environment variables are not set.
- After deployment, your site will be live at `https://umeshgoli.vercel.app` if you select that project name in Vercel.

If you'd like, I can prepare the GitHub repo and help trigger the Vercel deploy — I will need your permission to create a public repo under your GitHub account or you can push the files yourself.
