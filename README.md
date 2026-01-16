# Link/Bio Website

A modern, responsive link-in-bio website that showcases social profiles, curated links, and professional resources. Built with React, TypeScript, and Tailwind CSS, deployed on GitHub Pages.

> **Live Site**: [https://thisiskushal31.github.io/](https://thisiskushal31.github.io/)

---

## 📝 How to Update Content

### 1. **Edit Personal Information**
   Open `src/config/profile.ts` and update the `profile` object:
   ```typescript
   export const profile: Profile = {
     name: "Kushal Gupta",
     title: "DevOps Engineer",
     bio: "Your professional bio",
     avatar: "https://kushal.cv/profile.jpeg",
     location: "Kolkata, India",
     socialLinks: [
       { id: "website", name: "Website", url: "https://kushal.cv/", icon: "Globe" },
       // Add more social links...
     ],
   }
   ```

### 2. **Update Social Links**
   Modify the `socialLinks` array in `src/config/profile.ts`:
   - Add/remove social media profiles
   - Use Lucide icon names or react-icons for brand icons
   - Supported icons: Lucide React, react-icons (Si*, Fa*, Tb*, etc.)

### 3. **Add/Edit Sections**
   Update the `sections` array in `src/config/profile.ts`:
   ```typescript
   sections: [
     {
       id: "section-id",
       title: "Section Title",
       icon: "IconName", // Lucide icon name
       links: [
         {
           id: "link-id",
           title: "Link Title",
           description: "Optional description",
           url: "https://example.com",
           icon: "IconName" // Lucide or react-icons
         }
       ]
     }
   ]
   ```

### 4. **Configure Testimonials** (Optional)
   Uncomment and update the `testimonialSection` in `src/config/profile.ts`:
   ```typescript
   testimonialSection: {
     id: "testimonials",
     title: "Client Testimonials",
     icon: "MessageSquareQuote",
     testimonials: [
       {
         id: "testimonial-1",
         quote: "Testimonial text",
         author: "Author Name",
         role: "Role",
         rating: 5,
         platform: "Platform Name",
         platformUrl: "https://platform.com"
       }
     ],
     platformLinks: [
       { id: "platform", name: "Platform", url: "https://platform.com", icon: "IconName" }
     ]
   }
   ```

---

## 🚀 Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:8080)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 🎨 Features

- **Profile Card**: Display name, title, bio, avatar, and location
- **Social Links**: Quick access to social media profiles and important links
- **Organized Sections**: Collapsible sections for categorizing links
- **Testimonials**: Showcase client reviews and ratings (optional)
- **Theme Toggle**: Dark/light mode support
- **Share Functionality**: Copy shareable links to sections
- **Jump to Section**: Quick navigation to any section
- **Scroll to Top**: Smooth scroll to top button
- **Deep Linking**: Direct links to specific sections and links
- **Responsive Design**: Mobile-first, works on all devices
- **Animations**: Smooth transitions and hover effects

---

## 🔧 Technical Stack

- **React 18** + **TypeScript**
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **React Router DOM** with HashRouter (required for GitHub Pages)
- **Framer Motion** for animations
- **React Icons** (Lucide, Simple Icons, Tabler Icons)
- **TanStack Query** for state management

---

## 🌐 Deployment

### GitHub Pages Deployment

This website is deployed to GitHub Pages at the root of the repository:
- **URL**: `https://thisiskushal31.github.io/`
- **Branch**: `gh-pages` (auto-generated)
- **CI/CD**: GitHub Actions workflow (`.github/workflows/ci.yaml`)

### Routing

Uses **HashRouter** for GitHub Pages compatibility:
- Home: `/#/`
- Section: `/#/section/{sectionId}`
- Link: `/#/section/{sectionId}/link/{linkId}`

### Configuration Files

- `vite.config.ts`: `base: "/"` for root deployment
- `index.html`: Hash redirect script for GitHub Pages SPA
- `404.html`: GitHub Pages 404 handler with redirects

---

## 📁 Project Structure

```
src/
├── components/
│   ├── link/              # Link/bio specific components
│   │   ├── ProfileCard.tsx
│   │   ├── SocialLinks.tsx
│   │   ├── CollapsibleSection.tsx
│   │   ├── TestimonialSection.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ShareButton.tsx
│   │   └── ...
│   └── ui/                # shadcn/ui components
├── config/
│   └── profile.ts         # Main configuration file
├── pages/
│   ├── LinkBio.tsx       # Main page component
│   └── NotFound.tsx      # 404 page
├── utils/
│   └── urlUtils.ts       # URL generation utilities
└── hooks/
    └── useTheme.ts       # Theme management
```

---

## 🔗 Related Websites

- **Portfolio**: [kushal.cv](https://kushal.cv) (Vercel)
- **Blog**: [blog.kushal.cv](https://blog.kushal.cv) (Vercel)
- **Documentation**: [thisiskushal31.github.io/dochub](https://thisiskushal31.github.io/dochub) (GitHub Pages)

For more details about the website architecture, see [WEBSITE_SETUP.md](../WEBSITE_SETUP.md).

---

## 🎯 Customization

### Icons

- **Lucide Icons**: Use icon names as strings (e.g., `"Globe"`, `"Mail"`)
- **React Icons**: Use full icon names (e.g., `"SiGithub"`, `"FaTwitter"`, `"TbBrandFiverr"`)
- Icons are automatically resolved in components

### Colors & Theme

- Edit `tailwind.config.ts` for theme customization
- Dark/light mode is managed by `ThemeProvider`
- Theme preference is stored in localStorage

### Animations

- Framer Motion animations can be customized in component files
- Animation delays and durations are configurable

---

## 📝 Important Notes

1. **HashRouter**: Required for GitHub Pages SPA routing. Do not change to BrowserRouter.
2. **Base Path**: Set to `/` in `vite.config.ts` for root deployment.
3. **404 Handling**: `404.html` handles GitHub Pages 404s and redirects.
4. **Deep Links**: Direct links to sections/links are supported via URL hash routing.

---

## Copyright and Licensing

© 2025 Kushal Gupta. All Rights Reserved.

The source code and all content within this repository are the exclusive property of Kushal Gupta. This content is not to be used, reproduced, or distributed without explicit permission.

## About

A private repository containing the website code for my personal portfolio. All code is for my exclusive use and is not licensed for public distribution.
