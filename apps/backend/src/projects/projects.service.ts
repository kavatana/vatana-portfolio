import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filters: Record<string, string | undefined>) {
    const where: Prisma.ProjectWhereInput = {};

    if (filters.status)   where.status      = filters.status   as any;
    if (filters.level)    where.level       = filters.level    as any;
    if (filters.domain)   where.domain      = filters.domain   as any;
    if (filters.lang)     where.primaryLang = filters.lang;
    if (filters.featured) where.featured    = filters.featured === 'true';

    return this.prisma.project.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }
}