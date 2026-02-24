# Portfolio

Built by **Danny Jordan**, with AI-assisted development via Claude Code.

A production-style single-page application built with Next.js 15, React 19, and TypeScript. Demonstrates modern frontend engineering practices including strong typing, automated testing, CI/CD pipelines, and clean project structure.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **UI**: React 19, Tailwind CSS
- **Forms**: React Hook Form + Yup
- **Testing**: Vitest, React Testing Library, Cypress, cypress-axe
- **Component Docs**: Storybook
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+

### Install

```bash
pnpm install
```

### Environment Variables

Copy the example env file and update as needed:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_NAME` | Site name displayed across the UI | `Portfolio e.g` |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for SEO metadata | `https://portfolio-sigma-rust-22.vercel.app` |
| `REVALIDATE_API_KEY` | Secret key for the cache revalidation API (server-only) | — |

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | TypeScript type checking |
| `pnpm test` | Run unit and integration tests |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm test:coverage` | Run tests with coverage |
| `pnpm cypress:open` | Open Cypress test runner |
| `pnpm cypress:run` | Run Cypress headlessly |
| `pnpm e2e` | Build, start server, run E2E tests |
| `pnpm storybook` | Start Storybook dev server |
| `pnpm build-storybook` | Build static Storybook site |

## Project Structure

```
src/
  app/                  Next.js App Router pages and API routes
    api/contact/        Contact form endpoint
    api/revalidate/     On-demand cache revalidation endpoint
  components/           Shared UI and section components
    ui/                 Reusable primitive components (Button, Card, Input)
      __stories__/      Storybook stories for UI components
  features/             Feature modules
    contact-form/       Contact form with React Hook Form + Yup
  lib/                  Constants and shared utilities
  types/                Shared TypeScript types
  test/                 Test setup
cypress/
  e2e/                  End-to-end test specs
  support/              Cypress support files
.github/
  workflows/            CI pipeline config
```

## API Routes

### `POST /api/revalidate`

On-demand cache revalidation. Requires the `x-api-key` header to match the `REVALIDATE_API_KEY` env var.

**Request body** (JSON): provide at least one of `path` or `tag`.

```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "x-api-key: your-secret-key-here" \
  -H "Content-Type: application/json" \
  -d '{"path": "/", "tag": "posts"}'
```

| Status | Reason |
| --- | --- |
| 200 | Revalidation successful |
| 400 | Neither `path` nor `tag` provided |
| 401 | Missing or invalid API key |

## Features

### Dark Mode

Dark mode is supported via a `ThemeProvider` that reads from `localStorage` and falls back to `prefers-color-scheme`. An inline script in `<head>` sets the `dark` class before first paint to prevent a flash of unstyled content. A toggle button is fixed to the top-right corner.

### SEO

The layout includes comprehensive metadata: Open Graph, Twitter Cards, a canonical URL via `metadataBase`, and JSON-LD structured data (`WebSite` + `Person`). The theme color is set for mobile browsers.

### Accessibility

Accessibility is tested automatically via `cypress-axe`. E2E tests run `axe-core` against the full page, features section, contact form, and footer to catch violations.

### Storybook

UI components are documented in Storybook. Stories live alongside components in `__stories__/` directories. Run `pnpm storybook` to browse them locally.

### Analytics (Placeholder)

Commented-out imports for `@vercel/analytics` and `@vercel/speed-insights` are included in the layout, ready to enable when needed.

## Testing

This project uses a layered testing approach:

**Unit tests** cover each component in isolation, verifying rendering, prop handling, and user interaction. Form validation is tested against multiple input scenarios including required fields, format checks, and minimum lengths.

**Integration tests** verify that the full page renders correctly with all sections composed together.

**E2E tests** use Cypress to test the real user journey: visiting the homepage, verifying section visibility, filling in the contact form, and confirming the success state.

**Accessibility tests** use `cypress-axe` to run automated a11y audits against key sections of the page.

Run all unit and integration tests:

```bash
pnpm test
```

Run E2E tests locally:

```bash
pnpm e2e
```

## CI Pipeline

GitHub Actions runs on every push to `main` and on all pull requests.

**Quality job:**
1. Install dependencies (with pnpm cache)
2. Typecheck
3. Lint
4. Unit and integration tests
5. Build

**E2E job** (runs after quality passes):
1. Install and build
2. Start production server
3. Run Cypress tests against the running app

The E2E job depends on the quality job, so fast feedback comes first before slower browser tests run.

## Deployment

This project is set up for Vercel:

1. Connect the repo to Vercel
2. Set environment variables in the Vercel dashboard
3. Push to `main` to trigger a deploy

No extra configuration needed. The default Next.js build settings work out of the box.

## AI-Assisted Development

This project was scaffolded with the help of AI tooling. Here is where AI fits into a workflow like this and where it actually helps:

- **Scaffolding** - generating boilerplate for components, test files, and config. Saves time on repetitive setup without losing consistency.
- **Test drafting** - AI can produce solid initial test cases for common scenarios. You still review for correctness and add edge cases that need domain knowledge.
- **Refactoring** - useful for spotting patterns that can be consolidated, especially across many files.
- **Validation edge cases** - when building form validation or API input handling, AI can surface cases you might not think of immediately.
- **CI config** - pipeline configs are mostly boilerplate with small project-specific adjustments. AI handles that well.

None of this replaces quality gates. Every change still goes through:

- Type checking (`tsc --noEmit`)
- Linting (ESLint)
- Unit and integration tests (Vitest + React Testing Library)
- E2E tests (Cypress)
- CI pipeline (GitHub Actions)
- Code review

AI is a productivity tool, not a replacement for engineering judgment. The developer owns correctness, architecture, and quality.

---

Built by **Danny Jordan** | AI-assisted with [Claude Code](https://claude.ai)
