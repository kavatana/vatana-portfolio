<template>
  <div class="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
    <NuxtLink to="/projects" class="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
      ← Back to projects
    </NuxtLink>

    <div v-if="project" class="mt-6 space-y-6">
      <div>
        <p class="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">Project detail</p>
        <h1 class="text-4xl md:text-5xl font-bold text-slate-100 mb-4">{{ project.title }}</h1>
        <p class="text-slate-300 text-lg leading-relaxed max-w-3xl">{{ project.description }}</p>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <div class="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <p class="text-xs uppercase tracking-[0.15em] text-slate-500 mb-2">Level</p>
          <p class="text-slate-100">{{ project.level }}</p>
        </div>
        <div class="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <p class="text-xs uppercase tracking-[0.15em] text-slate-500 mb-2">Domain</p>
          <p class="text-slate-100">{{ project.domain }}</p>
        </div>
        <div class="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <p class="text-xs uppercase tracking-[0.15em] text-slate-500 mb-2">Primary language</p>
          <p class="text-slate-100">{{ project.primaryLang }}</p>
        </div>
        <div class="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <p class="text-xs uppercase tracking-[0.15em] text-slate-500 mb-2">Status</p>
          <p class="text-slate-100">{{ project.status }}</p>
        </div>
      </div>

      <div class="rounded-lg border border-slate-800 bg-slate-900 p-4">
        <p class="text-xs uppercase tracking-[0.15em] text-slate-500 mb-3">Tech stack</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.techStack"
            :key="tech"
            class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div class="flex gap-3 flex-wrap">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-emerald-500 text-slate-950 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-emerald-400 transition-colors"
        >
          Live site
        </a>
        <a
          v-if="project.repoUrl"
          :href="project.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="border border-slate-700 text-slate-100 px-5 py-2.5 rounded-md text-sm font-medium hover:border-emerald-500 hover:text-emerald-400 transition-colors"
        >
          Repository
        </a>
      </div>
    </div>

    <div v-else class="mt-10 text-slate-400">
      Loading project...
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/composables/useProject'

const route = useRoute()
const config = useRuntimeConfig()

const { data: project } = await useFetch<Project>(`/projects/${route.params.slug}`, {
  baseURL: config.public.apiBase,
})
</script>