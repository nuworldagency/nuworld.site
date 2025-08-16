# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `yarn dev` - Start development server with colorized output (runs on http://localhost:3000)
- `yarn build` - Build the app for production
- `yarn start` - Start the production server
- `yarn install --frozen-lockfile` - Install dependencies (frozen lockfile enforced)

### Code Quality & Testing
- `yarn lint` - Run ESLint checks
- `yarn lint:fix` - Automatically fix linting errors
- `yarn prettier` - Check code formatting
- `yarn prettier:fix` - Automatically fix formatting issues
- `yarn test` - Run Jest unit and integration tests
- `yarn e2e:headless` - Run Playwright end-to-end tests in headless mode
- `yarn e2e:ui` - Run Playwright end-to-end tests with UI

### Storybook
- `yarn storybook` - Start Storybook development server on port 6006
- `yarn build-storybook` - Build Storybook for deployment
- `yarn test-storybook` - Run Storybook smoke tests

### Bundle Analysis & Optimization
- `yarn analyze` - Analyze bundle sizes with ANALYZE=true flag
- `yarn coupling-graph` - Generate component coupling graph as graph.svg

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript with extremely strict configuration
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Radix UI headless components with CVA for variants
- **Testing**: Jest + React Testing Library + Playwright for E2E
- **Documentation**: Storybook for component development
- **Bundling**: Next.js with bundle analyzer integration
- **Environment**: T3 Env for type-safe environment variable management

### Project Structure
- `/app` - Next.js App Router pages and API routes
  - `/api/health` - Health check endpoint (available at /healthz, /health, /ping)
  - `layout.tsx` - Root layout with Tailwind CSS imports
  - `page.tsx` - Main landing page component
- `/components` - Reusable UI components with Storybook stories
  - Button, Tooltip components with TypeScript and stories
- `/e2e` - Playwright end-to-end tests
- `/styles` - Global Tailwind CSS configuration
- `env.mjs` - T3 Env configuration for environment variables

### Key Configuration Files
- `next.config.mjs` - Next.js configuration with bundle analyzer and health check rewrites
- `tailwind.config.js` - Custom Tailwind theme with primary color palette and font configuration
- `tsconfig.json` - Strict TypeScript configuration with noUncheckedIndexedAccess
- `jest.config.js` & `jest.setup.js` - Jest testing configuration
- `playwright.config.ts` - Playwright E2E testing configuration

### Development Notes
- Uses yarn as package manager (enforced via preinstall script)
- Dark mode support configured via Tailwind CSS class strategy
- Health checks available at multiple endpoints for Kubernetes compatibility
- Absolute imports configured with baseUrl
- Bundle analysis available via ANALYZE environment variable
- Pre-commit hooks for conventional commits
- Component coupling analysis via Madge library

### Component Development
- Components use CVA (Class Variance Authority) for type-safe styling variants
- All components should have corresponding Storybook stories
- Testing approach: Jest for unit/integration, Playwright for E2E, Storybook for smoke testing
- Radix UI provides the headless component foundation

### Environment Variables
Environment variables are managed through T3 Env in `env.mjs`. Currently configured:
- `ANALYZE` - Boolean flag for bundle analysis (server-side)
- `EMAIL_HOST` - SMTP server host (smtp0001.neo.space)
- `EMAIL_PORT` - SMTP server port (587)
- `EMAIL_SECURE` - Boolean for secure connection (true)
- `EMAIL_USER` - SMTP authentication user (michael@nuworld.cloud)
- `EMAIL_PASSWORD` - SMTP authentication password
- `N8N_WEBHOOK_URL` - N8N webhook endpoint for form submissions
- `NODE_ENV` - Environment (development/production/test)

### Contact Form & Email Integration
- Contact form at `/contact` with TypeScript implementation
- API route `/api/contact` handles form submissions
- Dual delivery: email via nodemailer + webhook to N8N automation
- Form includes: name, email, company, phone, message fields
- Proper validation and user feedback

### Analytics
- Vercel Analytics installed and configured in root layout
- Tracks page views, referrers, and user demographics
- Privacy-friendly (no cookies, anonymized data)
- View analytics in Vercel dashboard after deployment