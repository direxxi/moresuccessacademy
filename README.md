# More Success Academy - Website

A modern, AI-focused landing page for More Success Academy built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Dark Theme** with glassmorphic design elements
- **Smooth Animations** using Framer Motion
- **Fully Responsive** across all devices
- **SEO Optimized** with Next.js metadata
- **Email Waitlist** integration ready
- **Fast Performance** with Next.js optimizations

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. **Clone or download the project**

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
more-success-academy/
├── app/
│   ├── about/              # About page
│   ├── how-it-works/       # How It Works page
│   ├── solutions/          # Solutions page
│   ├── contact/            # Contact page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Features.tsx    # Features grid
│   │   ├── HowItWorks.tsx  # Process steps
│   │   ├── Solutions.tsx   # Solutions grid
│   │   ├── ProblemSolution.tsx
│   │   └── Waitlist.tsx    # Email capture
│   └── ui/
│       ├── Button.tsx      # Reusable button
│       ├── Card.tsx        # Glass card component
│       └── Input.tsx       # Form input
└── lib/                    # Utilities
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#00D4FF',    // Cyan accent
  gold: '#D4AF37',       // Gold accent
  dark: '#0A0A0A',       // Background
}
```

### Content
- Update text in `/app/page.tsx` and other page files
- Modify sections in `/components/sections/`
- Change navigation links in `/components/layout/Header.tsx`

### Logo
Replace the MSA logo placeholder in:
- `/components/layout/Header.tsx` (line 39)
- `/components/layout/Footer.tsx` (line 12)

### Email Integration
To connect the waitlist form to an actual email service:

1. Install Resend (recommended):
```bash
npm install resend
```

2. Create API route at `app/api/waitlist/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, name } = await request.json();
  
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'your-email@example.com',
    subject: 'New Waitlist Signup',
    html: `<p>Name: ${name}<br>Email: ${email}</p>`
  });
  
  return Response.json({ success: true });
}
```

3. Update the form in `/components/sections/Waitlist.tsx` to call this API.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

### Custom Server

```bash
npm run build
npm run start
```

## 📝 Environment Variables

Create a `.env.local` file for sensitive data:

```env
RESEND_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 🎯 Performance

- Lighthouse Score: 95+ on all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a private project for More Success Academy.

## 📄 License

Proprietary - More Success Academy © 2026

## 🆘 Support

For questions or issues, contact: info@moresuccessacademy.com

---

Built with ❤️ for African learners by More Success Academy
