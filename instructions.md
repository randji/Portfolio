Use the following instructions to build a modern portfolio for my activity developper web and app mobile website.

- Next.js Version: 14 (specific version to avoid hydration issues)
- React: 18.2.0
- Node.js: >=14.x
- Package Manager: npm (not yarn)

  Install the following dependencies:

```bash
npm install autoprefixer@^10.0.0 \
            lucide-react@^0.244.0 \
            next@14 \
            postcss@^8.4.0 \
            react@18.2.0 \
            react-dom@18.2.0 \
            tailwindcss@^3.2.0 \
            shadcn@latest init
```

## Technical Foundation

### 1. Project Architecture

```
/
├── components/          # Reusable UI components
├── pages/              # Next.js pages and routing
├── public/             # Static assets
├── styles/            # Global styles and Tailwind
└── utils/             # Helper functions if needed
```

3. Configuration Files Setup:

- Create `next.config.js` for image domains
- Setup `tailwind.config.js` with custom theme
- Configure `postcss.config.js`
- Add global styles in `styles/globals.css`

### 4. Key Technical Considerations

1. **Design Wesite**

- use uses exactly the same graphic charter as on this link. same color, same typography, same effect, same architecture. but does not copy the navbar.

2. **Responsive Design**

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

3. **State Management**

- Use React hooks for local state
- Implement context for theme/global states
- Avoid unnecessary re-renders

4. **Animation Implementation**

- Use CSS transitions for simple animations
- Implement smooth scroll behavior
- Add hover effects using Tailwind
- use all the technologies, frameworks that you need to respect the same graphic charter

### 5. Development Best Practices

1. **Code Organization**

- Keep components small and focused
- Use consistent file naming
- Implement proper commenting
- Follow DRY principle

2. **Styling Methodology**

- use this url for the graphic charter : https://voyager.cosmicthemes.com/fr/
- Use Tailwind utility classes
- Implement consistent spacing
- Follow color system
- Maintain responsive design patterns
- use all the technologies, frameworks that you need to respect the same graphic charter

3. **Performance Considerations**

- Minimize third-party dependencies
- No Typescript

4. **Image Optimization**

- Next.js Image component usage throughout the app
- Remote domains configured in next.config.js for freepik.com
- Gradient overlays for text contrast
- Priority loading for hero first image

5. **Layout Optimization**

- Responsive grid layouts (1 column mobile, 3 columns desktop)
- Tailwind's container class for consistent spacing
- Mobile-first approach with md: breakpoint
- Proper spacing units through Tailwind classes

6. **Component Structure**

- Modular component architecture
- Reusable button styles
- Consistent styling patterns
- Clean component hierarchy
