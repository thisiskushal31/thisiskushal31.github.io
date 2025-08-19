# Personal Portfolio Website

This repository contains the source code for my personal portfolio website, which showcases my professional experience, skills, projects, and achievements.

> **Info:** A public, general-use version of this repository will be available later for open source contribution.

---

## 📝 How to Update Personal Information

### 1. **Edit Personal Details**
   * Open `src/config/portfolio.ts` and update the `personal` section:
   ```typescript
   personal: {
     name: "Kushal Gupta",
     initials: "KG",
     title: "Software Engineer",
     subtitle: "Platform Engineering · DevOps · Cloud Infrastructure",
     description: "Your professional description",
     location: "Mumbai, India",
     timezone: "IST (UTC+5:30)",
     email: "guptakushal070@gmail.com"
   }
   ```

### 2. **Update Skills**
   * Modify the `skills.categories` array in `src/config/portfolio.ts`
   * Add/remove skill categories and individual skills
   * Use emoji icons for each category

### 3. **Add/Edit Projects**
   * Update the `projects` array in `src/config/portfolio.ts`
   * Include project title, description, technologies, features, and links
   * Set project status: "Production", "Development", or "Archived"

### 4. **Update Quick Actions**
   * Modify the `quickActions` array for direct links
   * Use Lucide icon names for icons
   * Include social profiles, contact methods, and important links

### 5. **Edit Experience**
   * Open `src/pages/Experience.tsx`
   * Update the `experiences` array with job history
   * Include achievements, technologies used, and company details
   * Update the `education` array with academic background

### 6. **Customize Social Links**
   * Update the `socialLinks` array in `src/config/portfolio.ts`
   * Add LinkedIn, GitHub, and other professional profiles

---

## 🚀 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 🎨 Customization Notes

- **Colors**: Edit `tailwind.config.ts` for theme customization
- **Fonts**: Change fonts in `tailwind.config.ts` under `fontFamily`
- **Animations**: Custom animations defined in `tailwind.config.ts`
- **Icons**: Use Lucide React icons from [lucide.dev](https://lucide.dev)

---

## 📱 Pages Structure

- **Home** (`/`): Hero section, quick actions, skills overview
- **Skills** (`/skills`): Detailed skills categorization
- **Experience** (`/experience`): Professional timeline and education
- **Projects** (`/projects`): Project showcase with details
- **Contact** (`/contact`): Contact form and direct links

---

## 🔧 Technical Stack

- React 18 + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui components
- React Router DOM with hash routing
- Dark/light theme support

---

## Copyright and Licensing

© 2025 Kushal Gupta. All Rights Reserved.

The source code and all content within this repository are the exclusive property of Kushal Gupta. This content is not to be used, reproduced, or distributed without explicit permission.

## About

A private repository containing the website code for my personal portfolio. All code is for my exclusive use and is not licensed for public distribution.

**Live Site**: [https://thisiskushal31.github.io/](https://thisiskushal31.github.io/)
