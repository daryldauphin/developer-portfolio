# Daryl Dauphin · Developer Portfolio

A responsive, accessible portfolio built with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, and Lucide. No database, authentication, paid services, or required environment variables.

## Development

Use Node.js 24 LTS (Node 22+ supported) and npm.

```sh
npm ci --cache /tmp/portfolio-npm
npm run dev
```

Use the existing checkout in cloud tasks; each task is already isolated, so no Git worktree is necessary. The development server defaults to port 3000.

## Validation

```sh
npm run lint
npm run build
npm run typecheck
npm test
```

Browser tests start the production server and cover all nine content routes, internal links, image loading, real PDF bytes, contact destinations, mobile menu behavior and overflow, metadata, sitemap, robots, and 404 behavior. Build before running the tests. Cloud tests use `/usr/bin/chromium`. For another machine, install Playwright Chromium (`npx playwright install chromium`) and omit `executablePath` in `playwright.config.ts` or set it to your installed Chromium path.

## Content

- `lib/data.ts`: centralized project data, employment history, skills, email, LinkedIn, and configurable GitHub URL. The GitHub field is intentionally empty until supplied; no fabricated profile link is rendered.
- `public/resume.pdf`: unmodified copy of the supplied résumé. Employment dates, education, and qualifications are drawn from it.
- `public/projects/`: optimized WebP assets and `captures.json` describing the screenshot attempt. All five external sites were blocked by the onboarding network proxy. Images are explicitly labeled placeholders, not project screenshots. Replace them with real authorized captures when access is available and update the image alt text in `components/portfolio.tsx`.
- BU work is presented as contributions to its WordPress ecosystem, not ownership of its public homepage. Agency project stacks and results are not invented. Dates on case studies are employment dates.

## Vercel deployment

1. Commit and push this application to the repository.
2. Import the repository in Vercel and select the **Next.js** framework preset with the repository root as the project root.
3. Use Node.js 24, the default `npm run build`, and Next.js default output settings. No manual output directory or secrets are required.
4. Deploy to the temporary Vercel domain. Test the pages, project links, and résumé download on that deployment before attaching a custom domain.

Sitemap and Open Graph URLs use Vercel’s automatically supplied production domain (or deployment URL), falling back to the local origin only during local development. After connecting a custom domain, confirm Vercel's production domain setting and redeploy. Actual external project destinations may evolve independently of this portfolio.

The app is prepared for deployment; no deployment has been performed by this setup task.
