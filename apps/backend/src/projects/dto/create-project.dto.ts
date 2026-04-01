import {
  IsString,
  IsEnum,
  IsBoolean,
  IsOptional,
  IsArray,
  IsUrl,
} from 'class-validator';

export enum ProjectLevel {
  MINI = 'MINI',
  STANDARD = 'STANDARD',
  MASTER = 'MASTER',
}

export enum ProjectDomain {
  FULLSTACK = 'FULLSTACK',
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  API = 'API',
  MOBILE = 'MOBILE',
  DEVOPS = 'DEVOPS',
  AI_ML = 'AI_ML',
}

export enum ProjectStatus {
  LIVE = 'LIVE',
  DRAFT = 'DRAFT',
  WIP = 'WIP',
}

export class CreateProjectDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  description: string;

  @IsEnum(ProjectLevel)
  level: ProjectLevel = ProjectLevel.STANDARD;

  @IsEnum(ProjectDomain)
  domain: ProjectDomain = ProjectDomain.FULLSTACK;

  @IsString()
  primaryLang: string;

  @IsArray()
  @IsString({ each: true })
  techStack: string[];

  @IsEnum(ProjectStatus)
  status: ProjectStatus = ProjectStatus.DRAFT;

  @IsBoolean()
  @IsOptional()
  featured?: boolean;

  @IsUrl()
  @IsOptional()
  liveUrl?: string;

  @IsUrl()
  @IsOptional()
  repoUrl?: string;
}