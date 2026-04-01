// composables/useProjects.ts
// Paste-ready optional extraction of the project data model for cleanliness.

export type Level = 'MINI' | 'STANDARD' | 'MASTER'
export type ProjectType = 'Frontend' | 'Backend' | 'FullStack' | 'C++'
export type Status = 'LIVE' | 'WIP'

export type Project = {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  domain: string
  level: Level
  type: ProjectType
  status: Status
  featured: boolean
  date: string // ISO: YYYY-MM-DD
  primaryLanguage: string
  languages: string[]
  tech: string[]
  highlights: string[]
  liveUrl?: string
  repoUrl?: string
}

export const LANG_COLOURS: Record<string, string> = {
  'C++': '#00599C',
  Python: '#3572A5',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  HTML: '#E34F26',
  CSS: '#7C3AED'
}

export function langColor(lang: string) {
  return LANG_COLOURS[lang] ?? '#64ffda'
}

export const PROJECTS: Project[] = [
  // Move the same PROJECTS array from index.vue here (identical structure).
]

export function useProjects() {
  return {
    PROJECTS,
    LANG_COLOURS,
    langColor
  }
}
