# 🚀 QUICK START GUIDE

## Get Your Website Running in 5 Minutes

### Step 1: Install Dependencies
```bash
cd more-success-academy
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: http://localhost:3000

**That's it! Your site is live locally!** 🎉

---

## 🎨 Quick Customizations

### Change Colors
Open `tailwind.config.js` and modify:
```js
primary: '#00D4FF',  // Your brand color
gold: '#D4AF37',     // Secondary color
```

### Update Content
- **Homepage**: Edit `/app/page.tsx`
- **About**: Edit `/app/about/page.tsx`
- **Contact**: Edit `/app/contact/page.tsx`

### Update Logo/Branding
- Replace "MSA" text in `/components/layout/Header.tsx` (line 39)
- Add your logo image to `/public` folder
- Import and use: `<Image src="/logo.png" ... />`

### Change Social Links
Edit `/components/layout/Footer.tsx`:
- LinkedIn URL (line 26)
- Twitter URL (line 32)
- Instagram URL (line 38)

### Email Address
Update in:
- `/components/layout/Footer.tsx` (line 58)
- `/app/contact/page.tsx` (line 46)

---

## 📧 Connect Email Waitlist

### Option 1: Resend (Recommended)

1. Sign up at https://resend.com (free tier: 3,000 emails/month)

2. Get your API key from dashboard

3. Create `.env.local` file:
```env
RESEND_API_KEY=re_your_key_here
```

4. Create file `app/api/waitlist/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, name } = await request.json();
  
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'info@moresuccessacademy.com',
    subject: 'New Waitlist Signup',
    html: `<h2>New Waitlist Member</h2><p>Name: ${name}<br>Email: ${email}</p>`
  });
  
  return Response.json({ success: true });
}
```

5. Update `/components/sections/Waitlist.tsx` handleSubmit:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  
  try {
    await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    })
    setIsSubmitted(true)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setIsLoading(false)
  }
}
```

### Option 2: Google Sheets (No Code)

Use a service like:
- https://sheet.best
- https://sheetdb.io

Follow their setup guides to send form data to Google Sheets.

---

## 🌐 Deploy to Production

### Vercel (Easiest - Free)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"

**Your site will be live in 2 minutes!**

Custom domain: Add in Vercel settings → Domains

### Netlify

1. Build project: `npm run build`
2. Drag `.next` folder to https://netlify.com

---

## 🎯 Next Steps

- [ ] Replace placeholder content
- [ ] Add your logo
- [ ] Update social links
- [ ] Connect email service
- [ ] Deploy to production
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain

---

## 🆘 Need Help?

- Check `README.md` for full documentation
- Contact: info@moresuccessacademy.com

**Happy building! 🚀**
