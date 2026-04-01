import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      // ─── MASTER (3) ───────────────────────────────────────────────────────
      {
        title: 'Vatana Portfolio',
        slug: 'vatana-portfolio',
        description: 'Personal developer portfolio built as a pnpm monorepo with Nuxt 3 frontend, NestJS backend, Prisma ORM, and Supabase PostgreSQL.',
        level: 'MASTER',
        domain: 'FULLSTACK',
        primaryLang: 'TypeScript',
        techStack: ['Nuxt 3', 'NestJS', 'Prisma', 'Supabase', 'Tailwind CSS', 'pnpm'],
        status: 'WIP',
        featured: true,
        liveUrl: null,
        repoUrl: 'https://github.com/kavatanaaa/vatana-portfolio',
      },
      {
        title: 'RealtimeBoard',
        slug: 'realtime-board',
        description: 'Collaborative whiteboard app with real-time cursor sync, drawing tools, and persistent rooms using WebSockets and Redis pub/sub.',
        level: 'MASTER',
        domain: 'FULLSTACK',
        primaryLang: 'TypeScript',
        techStack: ['Next.js', 'Socket.io', 'Redis', 'PostgreSQL', 'Canvas API'],
        status: 'LIVE',
        featured: true,
        liveUrl: 'https://realtimeboard.app',
        repoUrl: 'https://github.com/kavatanaaa/realtime-board',
      },
      {
        title: 'FlowML',
        slug: 'flow-ml',
        description: 'Visual pipeline builder for ML workflows. Drag-and-drop DAG editor that compiles to Python scripts and runs on a FastAPI execution engine.',
        level: 'MASTER',
        domain: 'AI_ML',
        primaryLang: 'Python',
        techStack: ['FastAPI', 'React', 'ReactFlow', 'Celery', 'Docker', 'PostgreSQL'],
        status: 'WIP',
        featured: true,
        liveUrl: null,
        repoUrl: 'https://github.com/kavatanaaa/flow-ml',
      },

      // ─── STANDARD (5) ─────────────────────────────────────────────────────
      {
        title: 'OpenMetrics API',
        slug: 'open-metrics-api',
        description: 'High-throughput REST API for ingesting and querying time-series metrics. Supports multi-tenant namespaces and configurable retention policies.',
        level: 'STANDARD',
        domain: 'API',
        primaryLang: 'Go',
        techStack: ['Go', 'Fiber', 'TimescaleDB', 'Redis', 'Docker'],
        status: 'LIVE',
        featured: false,
        liveUrl: 'https://openmetrics.dev',
        repoUrl: 'https://github.com/kavatanaaa/open-metrics-api',
      },
      {
        title: 'Pocketly',
        slug: 'pocketly',
        description: 'Personal finance tracker mobile app with category budgeting, recurring transactions, and monthly summary reports.',
        level: 'STANDARD',
        domain: 'MOBILE',
        primaryLang: 'Dart',
        techStack: ['Flutter', 'Dart', 'Supabase', 'Riverpod', 'Hive'],
        status: 'LIVE',
        featured: false,
        liveUrl: null,
        repoUrl: 'https://github.com/kavatanaaa/pocketly',
      },
      {
        title: 'DocShip',
        slug: 'doc-ship',
        description: 'Developer documentation site generator. Write MDX, get a fast statically-generated docs site with full-text search and versioning.',
        level: 'STANDARD',
        domain: 'FRONTEND',
        primaryLang: 'TypeScript',
        techStack: ['Astro', 'MDX', 'TypeScript', 'Pagefind', 'Vercel'],
        status: 'LIVE',
        featured: false,
        liveUrl: 'https://docship.dev',
        repoUrl: 'https://github.com/kavatanaaa/doc-ship',
      },
      {
        title: 'AuthKit',
        slug: 'auth-kit',
        description: 'Drop-in NestJS authentication module supporting JWT, OAuth2 (Google, GitHub), and magic link flows with refresh token rotation.',
        level: 'STANDARD',
        domain: 'BACKEND',
        primaryLang: 'TypeScript',
        techStack: ['NestJS', 'Passport.js', 'JWT', 'PostgreSQL', 'Prisma'],
        status: 'LIVE',
        featured: false,
        liveUrl: null,
        repoUrl: 'https://github.com/kavatanaaa/auth-kit',
      },
      {
        title: 'SkyDeploy',
        slug: 'sky-deploy',
        description: 'Lightweight CI/CD pipeline tool. Define deploy steps in YAML, trigger on Git push, stream logs in real-time via SSE.',
        level: 'STANDARD',
        domain: 'DEVOPS',
        primaryLang: 'Go',
        techStack: ['Go', 'Docker', 'YAML', 'GitHub Webhooks', 'SQLite'],
        status: 'DRAFT',
        featured: false,
        liveUrl: null,
        repoUrl: 'https://github.com/kavatanaaa/sky-deploy',
      },

      // ─── MINI (4) ─────────────────────────────────────────────────────────
      {
        title: 'Gradient Lab',
        slug: 'gradient-lab',
        description: 'Interactive CSS gradient generator with live preview, OKLCH color space support, and one-click copy.',
        level: 'MINI',
        domain: 'FRONTEND',
        primaryLang: 'JavaScript',
        techStack: ['Vanilla JS', 'CSS', 'HTML'],
        status: 'LIVE',
        featured: false,
        liveUrl: 'https://gradientlab.tools',
        repoUrl: 'https://github.com/kavatanaaa/gradient-lab',
      },
      {
        title: 'json-morph',
        slug: 'json-morph',
        description: 'Zero-dependency TypeScript utility for deep JSON transformations using a simple path mapping DSL.',
        level: 'MINI',
        domain: 'BACKEND',
        primaryLang: 'TypeScript',
        techStack: ['TypeScript', 'Vitest', 'tsup'],
        status: 'LIVE',
        featured: false,
        liveUrl: null,
        repoUrl: 'https://github.com/kavatanaaa/json-morph',
      },
      {
        title: 'StandupBot',
        slug: 'standup-bot',
        description: 'Telegram bot that collects daily standup responses from a team and posts a formatted summary to a group channel.',
        level: 'MINI',
        domain: 'BACKEND',
        primaryLang: 'Python',
        techStack: ['Python', 'python-telegram-bot', 'SQLite'],
        status: 'LIVE',
        featured: false,
        liveUrl: null,
        repoUrl: 'https://github.com/kavatanaaa/standup-bot',
      },
      {
        title: 'DevPulse',
        slug: 'dev-pulse',
        description: 'Minimal GitHub activity dashboard. Shows contribution heatmap, top repos by stars, and recent commit activity for any user.',
        level: 'MINI',
        domain: 'FRONTEND',
        primaryLang: 'JavaScript',
        techStack: ['Vue 3', 'GitHub API', 'Chart.js'],
        status: 'DRAFT',
        featured: false,
        liveUrl: null,
        repoUrl: 'https://github.com/kavatanaaa/dev-pulse',
      },
    ],
  });

  console.log('✅ Seeded 12 projects successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });