import { Controller, Get, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll(
    @Query('status') status?: string,
    @Query('level') level?: string,
    @Query('domain') domain?: string,
    @Query('lang') lang?: string,
    @Query('featured') featured?: string,
  ) {
    return this.projectsService.findAll({ status, level, domain, lang, featured });
  }
}