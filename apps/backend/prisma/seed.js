const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.profile.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Vatana Ka',
      headline: 'Full-stack TypeScript Developer',
      bio: 'I build fast, scalable web applications with Nuxt.js, NestJS, and Supabase.',
      location: 'Phnom Penh, Cambodia',
    },
  });

  const projects = [
    { title: 'Portfolio Website', slug: 'portfolio-website', description: 'Full-stack portfolio built with Nuxt 3, NestJS, Prisma, and Supabase.', repoUrl: 'https://github.com', techStack: ['Nuxt 3', 'NestJS', 'Prisma', 'Supabase'] },
    { title: 'E-Commerce API', slug: 'ecommerce-api', description: 'RESTful API with JWT auth, product management, and Stripe.', repoUrl: 'https://github.com', techStack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Stripe'] },
    { title: 'Task Manager App', slug: 'task-manager', description: 'Real-time collaborative task manager with WebSocket.', repoUrl: 'https://github.com', techStack: ['Vue 3', 'WebSocket', 'Redis'] },
  ];

  for (const project of projects) {
    await prisma.project.upsert({ where: { slug: project.slug }, update: {}, create: project });
  }

  console.log('✅ Seed complete');
}

main().catch(console.error).finally(() => prisma.$disconnect());
