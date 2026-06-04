# CV Website - Next.js with i18n

This is a Next.js CV/resume website with internationalization support for English and Russian. The site displays Denis Kiselyov's professional resume as a statically exported site deployed to GitHub Pages.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Prerequisites and Environment Setup
- Node.js >= 18.17.0 is required (CI uses Node.js 22.x)
- npm package manager is used (package-lock.json present)

### Bootstrap, build, and test the repository:
- `npm ci` -- installs dependencies from the lockfile
- `npm run build` -- takes ~18-24 seconds for standard build. NEVER CANCEL. Set timeout to 60+ minutes for safety
- **For GitHub Pages deployment**: Build requires Next.js config with static export. The `next.config.js` file MUST be present with `output: 'export'` configuration

### Development and Testing:
- Development server: `npm run dev` -- starts in ~1.4 seconds on port 3000
- Production server: `npm start` -- requires a successful build first, starts in ~0.3 seconds
- **CRITICAL BUILD ISSUE**: Always run `rm -rf .next && npm run build` before production server to ensure BUILD_ID file is created

### Production Static Export (GitHub Pages):
- Build for static export: `NODE_ENV=production GITHUB_REPOSITORY=marinazzio/cv PATH_PREFIX=/marinazzio/cv npm run build` -- takes ~24 seconds, creates `out/` directory with static files
- **NEVER CANCEL**: Static export build takes longer than regular build. Set timeout to 90+ minutes for safety
- Static export DISABLES API routes — the site is fully static

## Validation

### Manual Testing Requirements:
- **ALWAYS test both language variants**: Access both `/` (language selector) and `/en` and `/ru` routes
- **ALWAYS verify internationalization**: Check that English and Russian content displays correctly
- **ALWAYS test static export**: After building with static export, serve the `out/` directory and test both language routes
- **Complete user scenario**: Navigate from home page → select language → view full CV content → verify all sections render properly

### Known Issues and Workarounds:
- **Next.js 15 Compatibility**: Fixed async params compatibility issues in layout.tsx and page.tsx files

## Architecture and Key Components

### Project Structure:
- `/app` - Next.js App Router directory
- `/app/[lang]` - Internationalized routes (en, ru)
- `/app/[lang]/components` - CV component files (cv-header, cv-body, professional-experience, etc.)
- `/dictionaries` - Translation files (en.json, ru.json, common.json)
- `/public` - Static assets
- `i18n-config.ts` - Internationalization configuration
- `get-dictionary.ts` - Dictionary loading utility

### Key Features:
- **Internationalization**: Supports English (`en`) and Russian (`ru`) locales
- **Static Site Generation**: Uses generateStaticParams for pre-rendering language routes
- **TailwindCSS**: For styling and responsive design
- **GitHub Pages Deployment**: Automated via GitHub Actions

### Build Outputs:
- Standard build: Creates `.next/` directory for server-side rendering
- Static export: Creates `out/` directory with static HTML/JS/CSS files for GitHub Pages
- Build generates 6 static pages total (root, 404, en, ru variants)

### Environment Variables:
- `NODE_ENV=production` - For production builds
- `GITHUB_REPOSITORY` and `PATH_PREFIX` - For GitHub Pages deployment

## Common Tasks

### Development Workflow:
1. Install dependencies: `npm ci`
2. Start dev server: `npm run dev`
3. Open browser to `http://localhost:3000`
4. Test language switching and CV display
5. Make changes and verify hot reloading works

### Deployment Workflow:
1. Ensure `next.config.js` exists with static export configuration
2. Build for production: `NODE_ENV=production GITHUB_REPOSITORY=marinazzio/cv PATH_PREFIX=/marinazzio/cv npm run build`
3. Verify `out/` directory is created
4. GitHub Actions automatically deploys from `out/` directory to GitHub Pages

### Troubleshooting:
- If build output missing BUILD_ID: Run `rm -rf .next` before building
- If production server fails to start: Verify build completed successfully
- If GitHub Pages deployment fails: Verify `out/` directory exists and contains static files

### File Locations Reference:
```
Repository root contents:
.github/              # GitHub Actions workflows
.vscode/              # VS Code settings
app/                  # Next.js App Router
  [lang]/             # Internationalized routes
    components/       # CV React components
    layout.tsx        # Localized layout
    page.tsx          # Main CV page
  layout.tsx          # Root layout
  page.tsx            # Language selector page
  providers/          # React context providers
dictionaries/         # Translation JSON files
public/               # Static assets
next.config.js        # Next.js configuration (required for static export)
package.json          # Dependencies and scripts
tsconfig.json         # TypeScript configuration
```

## CRITICAL Reminders:
- **NEVER CANCEL BUILDS**: Even short builds may hang during export. Always wait for completion
- **ALWAYS TEST BOTH LANGUAGES**: Verify /en and /ru routes work correctly
- **ALWAYS VERIFY STATIC EXPORT**: Test the `out/` directory contents before deployment
