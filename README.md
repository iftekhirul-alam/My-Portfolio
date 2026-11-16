# Md. Iftekhirul Alam — Personal Portfolio Website

![Next.js 16](https://img.shields.io/badge/Next.js-16.4.6-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Resend](https://img.shields.io/badge/Email_API-Resend-000000?style=for-the-badge&logo=resend)

> **"Bridging reliable IT operations and modern, user-focused web applications."**

A modern, high-performance, fully responsive one-page personal portfolio website built for **Md. Iftekhirul Alam** (IT Administrator & Junior Frontend Developer). Engineered using **Next.js 16 App Router**, **React 19**, and **Tailwind CSS v4**, featuring a sleek dark bento aesthetic, a dual-mode theme system (Dark/Light), and a fully operational contact delivery pipeline powered by **Resend**.

---

## 🌟 Key Features & Highlights

### 🎨 1. Modern Bento Grid & Visual Design
- **Dark & Light Bento Aesthetic**: Deep obsidian theme (`#090d16`) with frosted glass cards (`backdrop-blur-md`), subtle radial lighting, glowing accent rings, and clean modern typography.
- **Adaptive Ambient Lighting**: Subtle radial gradient spotlights that adjust dynamically based on the active color theme.
- **Micro-Interactions**: Hover lifts, smooth link scrolling, pulsing availability indicator, and smooth icon state transitions.
- **Zero-Dependency SVG Icon Library**: Bespoke inline SVG icon system in `components/Icons.tsx` styled directly with Tailwind utility classes.

### 🌓 2. Complete Dark & Light Theme System
- **Dual-Mode Theme Tokens**: Full CSS variable system in `app/globals.css` with `@custom-variant dark (&:where(.dark, .dark *));`.
- **One-Click Theme Toggle**: Accessible toggle button in both desktop navbar and mobile drawer with animated Sun/Moon transitions.
- **Zero-Flicker Hydration**: Embedded anti-flicker script in `app/layout.tsx` combined with React 19's `useSyncExternalStore` in `components/ThemeContext.tsx`, eliminating layout shifts and cascading render warnings.
- **Persistent State**: Theme preference automatically stored and synchronized via `localStorage`.

### 📬 3. Fully Functional Contact Engine (Resend)
- **Real-Time Email Delivery**: Server-rendered Next.js Route Handler at `app/api/contact/route.ts` powered by the **Resend API**.
- **Direct Reply-To**: Incoming messages set the sender's email as `replyTo`, allowing one-click direct replies from Gmail.
- **Full Form UX**: Client-side validation, disabled states during submission, animated loading spinner, error alerts, and instant success confirmation cards.
- **One-Click Quick Copy**: Copy email (`mmdtahin@gmail.com`) and phone (`+880 1679-279663`) with real-time checkmark feedback.

### 📱 4. Content Architecture & Sections
- **Hero Section**: High-resolution profile photo ([IftekhirulAlam2.png](file:///c:/Projects/Portfolio/my-portfolio/src/assets/image/IftekhirulAlam2.png)), animated availability status badge (*"Available for Opportunities"*), dual designation badges, headline, one-click copy buttons, and quick bento metric highlights.
- **About Section**: Professional summary, B.Sc. & M.Sc. computer science background, dedicated cards for technical problem-solving passions, and community background (FSET Debate Club, competitive programming).
- **Core Skills**: Categorized technical toolkit (IT & Infrastructure, Web Development, Programming & Databases, Tools & Deployment) with clean interactive tags.
- **Featured Projects**: Highlights real projects (*Bazar Monitoring Web App* & *Fit Log Frontend Web Project*) with Next.js image previews, live deployment links, GitHub client repositories, key engineering challenges solved, and roadmap scopes.
- **Career Timeline**: Detailed professional milestones at **KDS Shares & Securities Ltd.** (IT & CDBL In-charge) and **SKYS Securities Limited** (IT Officer) with concrete responsibilities.
- **Credentials & Education**: Academic degrees (M.Sc. in CSE from IIUC with CGPA 3.75, B.Sc. in CSE from USTC with CGPA 3.58) and professional Google IT Support Professional Certification.
- **Footer**: Dynamic copyright year calculated via `useSyncExternalStore`, fast back-to-top smooth scrolling, and social links.

### ⚙️ 5. Centralized Data Management
All content, links, text, and image imports are decoupled into a single typed configuration file: **`data/portfolioData.ts`**. Updating personal information, adding new projects, or editing skills requires editing only this file.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.4.6](https://nextjs.org/) | App Router, static generation (SSG), and server API route handlers |
| **UI Library** | [React 19.3.0](https://react.dev/) | React Server Components, Client Components, `useSyncExternalStore` |
| **Styling** | [Tailwind CSS v4.3.3](https://tailwindcss.com/) | Next-generation utility-first CSS engine with `@theme` and custom dark variants |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict static type-checking and interface definitions |
| **Email Delivery** | [Resend](https://resend.com/) | Server-side email delivery via Next.js REST API |
| **Linting** | [ESLint 9](https://eslint.org/) | Strict Next.js & React 19 lint rules |
| **Icons** | Custom Inline SVG | Lightweight, zero-dependency, styled with Tailwind classes |

---

## 📂 Project Structure

```
my-portfolio/
├── .env.local                    # Local environment secrets (Resend API key & email)
├── .gitignore                    # Git ignore file protecting .env* and node_modules
├── next.config.ts                # Next.js build & compilation configuration
├── package.json                  # Project dependencies and npm scripts
├── tsconfig.json                 # TypeScript compiler paths and aliases (@/*)
│
├── app/
│   ├── favicon.ico               # Website favicon
│   ├── globals.css               # Dual-theme design tokens, dark variant, bento glass styling
│   ├── layout.tsx                # Anti-flicker theme script, SEO metadata, ThemeProvider
│   ├── page.tsx                  # Main one-page portfolio layout with adaptive background grid
│   └── api/
│       └── contact/
│           └── route.ts          # Resend POST route handler with input validation
│
├── components/
│   ├── About.tsx                 # Career narrative, philosophy, and interest bento cards
│   ├── Contact.tsx               # Direct message form + email/phone one-click copy buttons
│   ├── Education.tsx             # Academic degrees (M.Sc., B.Sc.) & certifications
│   ├── Experience.tsx            # Career history & operational technology achievements
│   ├── Footer.tsx                # Dynamic year copyright, social links, back-to-top button
│   ├── Hero.tsx                  # Profile image, availability badge, headline, and stats
│   ├── Icons.tsx                 # Zero-dependency SVG icon system
│   ├── Navbar.tsx                # Fixed blurred header, mobile navigation, theme toggle, resume CTA
│   ├── Projects.tsx              # Featured project cards with screenshots, metrics & links
│   ├── Skills.tsx                # Categorized skill badges (IT, Web Dev, DB, Tools)
│   ├── ThemeContext.tsx          # Dual-theme provider using React 19 useSyncExternalStore
│   └── ThemeToggle.tsx           # Sun/Moon interactive toggle button
│
├── data/
│   └── portfolioData.ts          # Single source of truth containing all personal data & types
│
└── src/
    └── assets/
        └── image/                # Profile photo & project screenshots
            ├── Bazar Monitoring.png
            ├── FitLog.png
            ├── IftekhirulAlam1.png
            └── IftekhirulAlam2.png
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) version 18.18.0 or newer
- [npm](https://www.npmjs.com/) (or pnpm / yarn)

### 2. Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/iftekhirul-alam/my-portfolio.git
cd my-portfolio
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory and add your Resend API key and recipient email:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=mmdtahin@gmail.com
```

> **Note:** `.env.local` is already included in `.gitignore` and will never be committed to source control.

### 4. Run Development Server
Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 🧪 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack / Fast Refresh |
| `npm run build` | Builds the project for production with static pre-rendering |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint 9 checks across all TypeScript and React files |

---

## 🌐 Deployment (Vercel)

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Import your repository into Vercel.
3. In the Vercel project settings, navigate to **Environment Variables** and add:
   - `RESEND_API_KEY`: Your Resend API key (`re_...`)
   - `CONTACT_TO_EMAIL`: `mmdtahin@gmail.com`
4. Deploy! Your portfolio will be live with full static prerendering, edge caching, and active email delivery.

---

## 👤 Author & Contact

**Md. Iftekhirul Alam**  
*IT Administrator & Junior Frontend Developer*  
📍 Dhaka, Bangladesh  

- **Email**: [mmdtahin@gmail.com](mailto:mmdtahin@gmail.com)
- **Phone**: [+880 1679-279663](tel:+8801679279663)
- **LinkedIn**: [linkedin.com/in/md-iftekhirul-alam](https://www.linkedin.com/in/md-iftekhirul-alam/)
- **GitHub**: [github.com/iftekhirul-alam](https://github.com/iftekhirul-alam)
- **Resume**: [Google Drive Resume](https://drive.google.com/file/d/1mvZhVUq30IZDpx5KKqhtpHrisn9gxrsz/view)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
