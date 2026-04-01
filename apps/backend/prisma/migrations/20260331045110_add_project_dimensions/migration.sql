-- CreateEnum
CREATE TYPE "ProjectLevel" AS ENUM ('MINI', 'STANDARD', 'MASTER');

-- CreateEnum
CREATE TYPE "ProjectDomain" AS ENUM ('FULLSTACK', 'FRONTEND', 'BACKEND', 'API', 'MOBILE', 'DEVOPS', 'AI_ML');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('LIVE', 'DRAFT', 'WIP');

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" "ProjectLevel" NOT NULL DEFAULT 'STANDARD',
    "domain" "ProjectDomain" NOT NULL DEFAULT 'FULLSTACK',
    "primaryLang" TEXT NOT NULL,
    "techStack" TEXT[],
    "status" "ProjectStatus" NOT NULL DEFAULT 'DRAFT',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "liveUrl" TEXT,
    "repoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
