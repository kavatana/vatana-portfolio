<template>
  <!--
    Premium dark-minimalist developer portfolio (Nuxt 3 / Vue 3)
    Drop-in page: pages/index.vue

    Key features:
    - Left sticky profile column (desktop), stacked on mobile
    - Right project list with:
      - classification (Level / Type / Languages / Tech)
      - status badges (LIVE / WIP)
      - featured flag
      - search, filtering (type/level/status/language/tech), sorting
      - keyboard-accessible pill buttons (aria-pressed)
      - smooth scroll to project anchors
    - Subtle lighting + 3D-ish hover, scroll reveal animation (IntersectionObserver)
    - Performance-friendly animations (transform/opacity) + reduced motion support

    Notes:
    - No external CSS/JS libs.
    - Uses system font stack by default (see CSS variables).
  -->

  <div class="page" :data-reduce-motion="reduceMotion ? 'true' : 'false'">
    <a class="skip-link" href="#projects" @click.prevent="scrollToId('projects')">
      Skip to projects
    </a>

    <!-- Ambient background layers (purely decorative) -->
    <div class="ambient" aria-hidden="true">
      <div class="ambient__vignette"></div>
      <div class="ambient__spot ambient__spot--a"></div>
      <div class="ambient__spot ambient__spot--b"></div>
      <div class="ambient__spot ambient__spot--c"></div>
      <div class="ambient__grid"></div>
    </div>

    <div class="shell">
      <!-- LEFT: profile column -->
      <aside class="sidebar" aria-label="Profile">
        <div class="profile">
          <div class="avatar" aria-hidden="true">
            <!--
              Inline SVG placeholder avatar (no hosting required).
              Replace with your own:
              - Put file in /public/avatar.svg
              - Replace this <svg> with: <img src="/avatar.svg" alt="Vatana avatar" class="avatar__img" />
            -->
            <svg
              class="avatar__svg"
              viewBox="0 0 96 96"
              role="img"
              aria-label="Avatar placeholder"
            >
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stop-color="#64ffda" stop-opacity="0.95" />
                  <stop offset="0.55" stop-color="#60a5fa" stop-opacity="0.85" />
                  <stop offset="1" stop-color="#a78bfa" stop-opacity="0.8" />
                </linearGradient>
                <radialGradient id="rg" cx="35%" cy="30%" r="70%">
                  <stop offset="0" stop-color="#ffffff" stop-opacity="0.22" />
                  <stop offset="1" stop-color="#000000" stop-opacity="0" />
                </radialGradient>
              </defs>

              <circle cx="48" cy="48" r="46" fill="url(#g)" opacity="0.18" />
              <circle cx="48" cy="48" r="46" fill="url(#rg)" />
              <circle cx="48" cy="44" r="18" fill="rgba(255,255,255,0.72)" />
              <path
                d="M22 86c6-18 20-26 26-26h0c6 0 20 8 26 26"
                fill="rgba(255,255,255,0.35)"
              />
              <circle cx="40" cy="43" r="2.5" fill="rgba(15,23,42,0.75)" />
              <circle cx="56" cy="43" r="2.5" fill="rgba(15,23,42,0.75)" />
              <path
                d="M42 51c4 3 8 3 12 0"
                stroke="rgba(15,23,42,0.55)"
                stroke-width="2.25"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          </div>

          <div class="profile__text">
            <p class="kicker">Hi, I’m</p>
            <h1 class="name">Vatana</h1>
            <p class="role">
              Systems builder · Business + Trading · Full‑stack mindset
            </p>
            <p class="summary">
              I build disciplined, practical software — from real‑world store sites
              to backend systems and C++ fundamentals. This page is both my portfolio
              and my project collection space.
            </p>
          </div>
        </div>

        <div class="sidebar__actions">
          <button
            type="button"
            class="btn btn--primary"
            @click="scrollToId('projects')"
          >
            View projects
            <span aria-hidden="true" class="btn__arrow">→</span>
          </button>

          <a
            class="btn btn--ghost"
            :href="resumeUrl"
            target="_blank"
            rel="noreferrer"
          >
            Résumé
          </a>
        </div>

        <nav class="sidebar__nav" aria-label="Section navigation">
          <a href="#projects" @click.prevent="scrollToId('projects')">Projects</a>
          <a href="#about" @click.prevent="scrollToId('about')">About</a>
          <a href="#contact" @click.prevent="scrollToId('contact')">Contact</a>
        </nav>

        <div class="sidebar__meta">
          <div class="meta-row" aria-label="Quick facts">
            <span class="meta-pill">Phnom Penh</span>
            <span class="meta-pill">GMT+7</span>
            <span class="meta-pill">Nuxt · Python · C++</span>
          </div>

          <div class="social" aria-label="Social links">
            <a
              class="icon-btn"
              href="https://github.com/kavatana"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.37 1.24-3.21-.12-.31-.54-1.57.12-3.28 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.71.24 2.97.12 3.28.77.84 1.24 1.9 1.24 3.21 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.23v3.3c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z"
                />
              </svg>
            </a>

            <a
              class="icon-btn"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
                />
              </svg>
            </a>

            <button
              type="button"
              class="icon-btn"
              @click="copyEmail"
              aria-label="Copy email"
              title="Copy email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
                />
              </svg>
            </button>
          </div>

          <p class="sidebar__hint" role="status" aria-live="polite">
            <span class="dot" aria-hidden="true"></span>
            <span>{{ hintText }}</span>
          </p>
        </div>

        <p class="sidebar__footer">
          Built for clarity: minimal UI, maximal signal.
        </p>
      </aside>

      <!-- RIGHT: content -->
      <main id="content" class="content" aria-label="Main content">
        <header class="content__header">
          <div class="content__heading">
            <h2 id="projects" class="section-title">Projects</h2>
            <p class="section-subtitle">
              Filter by type, level, language, and tech. Jump to any project anchor.
            </p>
          </div>

          <!-- “Glass” control bar -->
          <div class="control-bar" role="search">
            <label class="field">
              <span class="field__label">Search</span>
              <input
                v-model.trim="query"
                class="input"
                type="search"
                inputmode="search"
                autocomplete="off"
                placeholder="title, domain, tech, language…"
                @keydown.esc="query = ''"
              />
            </label>

            <label class="field">
              <span class="field__label">Sort</span>
              <select v-model="sortKey" class="select">
                <option value="date-desc">Newest first</option>
                <option value="date-asc">Oldest first</option>
                <option value="status">LIVE first</option>
                <option value="featured">Featured first</option>
              </select>
            </label>

            <button
              type="button"
              class="btn btn--ghost btn--sm"
              @click="resetAll"
              :disabled="!hasAnyFilter"
              :aria-disabled="(!hasAnyFilter).toString()"
            >
              Reset
            </button>
          </div>

          <!-- Primary filters -->
          <section class="filters" aria-label="Project filters">
            <div class="filter-group" role="group" aria-label="Filter by type">
              <div class="filter-group__head">
                <span class="filter-group__label">Type</span>
                <span class="filter-group__value">{{ selectedType }}</span>
              </div>

              <div class="pill-row">
                <button
                  v-for="t in TYPE_OPTIONS"
                  :key="t"
                  type="button"
                  class="pill"
                  :class="{ 'is-active': selectedType === t }"
                  :aria-pressed="(selectedType === t).toString()"
                  @click="selectedType = t"
                >
                  {{ t }}
                </button>
              </div>
            </div>

            <div class="filter-group" role="group" aria-label="Filter by level">
              <div class="filter-group__head">
                <span class="filter-group__label">Level</span>
                <span class="filter-group__value">{{ selectedLevel }}</span>
              </div>

              <div class="pill-row">
                <button
                  v-for="lvl in LEVEL_OPTIONS"
                  :key="lvl"
                  type="button"
                  class="pill"
                  :class="{ 'is-active': selectedLevel === lvl }"
                  :aria-pressed="(selectedLevel === lvl).toString()"
                  @click="selectedLevel = lvl"
                >
                  {{ lvl }}
                </button>
              </div>
            </div>

            <div class="filter-group" role="group" aria-label="Filter by status">
              <div class="filter-group__head">
                <span class="filter-group__label">Status</span>
                <span class="filter-group__value">{{ selectedStatus }}</span>
              </div>

              <div class="pill-row">
                <button
                  v-for="s in STATUS_OPTIONS"
                  :key="s"
                  type="button"
                  class="pill"
                  :class="{ 'is-active': selectedStatus === s }"
                  :aria-pressed="(selectedStatus === s).toString()"
                  @click="selectedStatus = s"
                >
                  {{ s }}
                </button>
              </div>
            </div>

            <!-- Secondary filters in a disclosure (keeps UI minimalist) -->
            <details class="filters__details" :open="detailsOpen">
              <summary class="filters__summary">
                <span>Languages & tech filters</span>
                <span class="filters__summaryMeta">
                  {{ selectedLanguages.length }} lang · {{ selectedTech.length }} tech
                </span>
              </summary>

              <div class="filters__detailsGrid">
                <div class="filter-group" role="group" aria-label="Filter by language">
                  <div class="filter-group__head">
                    <span class="filter-group__label">Languages</span>
                    <button
                      v-if="selectedLanguages.length"
                      type="button"
                      class="link-btn"
                      @click="selectedLanguages = []"
                    >
                      Clear
                    </button>
                  </div>

                  <div class="pill-row pill-row--wrap">
                    <button
                      v-for="lang in LANGUAGE_OPTIONS"
                      :key="lang"
                      type="button"
                      class="pill pill--lang"
                      :class="{ 'is-active': selectedLanguages.includes(lang) }"
                      :style="{ '--pill-accent': langColor(lang) }"
                      :aria-pressed="selectedLanguages.includes(lang).toString()"
                      @click="toggleLanguage(lang)"
                    >
                      <span class="lang-dot" aria-hidden="true"></span>
                      {{ lang }}
                    </button>
                  </div>
                </div>

                <div class="filter-group" role="group" aria-label="Filter by technology">
                  <div class="filter-group__head">
                    <span class="filter-group__label">Tech (multi‑select)</span>
                    <button
                      v-if="selectedTech.length"
                      type="button"
                      class="link-btn"
                      @click="selectedTech = []"
                    >
                      Clear
                    </button>
                  </div>

                  <div class="pill-row pill-row--wrap">
                    <button
                      v-for="tech in TECH_OPTIONS"
                      :key="tech"
                      type="button"
                      class="pill pill--tech"
                      :class="{ 'is-active': selectedTech.includes(tech) }"
                      :aria-pressed="selectedTech.includes(tech).toString()"
                      @click="toggleTech(tech)"
                    >
                      {{ tech }}
                    </button>
                  </div>
                </div>
              </div>
            </details>

            <div class="results" aria-live="polite">
              <span class="results__count">
                {{ filteredProjects.length }} / {{ PROJECTS.length }}
              </span>
              <span class="results__label">projects shown</span>

              <button
                v-if="featuredProjects.length"
                type="button"
                class="link-btn"
                @click="scrollToId(featuredProjects[0].anchorId)"
              >
                Jump to featured
              </button>
            </div>

            <div v-if="featuredProjects.length" class="toc" aria-label="Featured quick jump">
              <p class="toc__label">Featured quick jump</p>
              <div class="toc__list">
                <button
                  v-for="p in featuredProjects"
                  :key="p.id"
                  type="button"
                  class="toc__item"
                  @click="scrollToId(p.anchorId)"
                >
                  <span class="toc__dot" aria-hidden="true"></span>
                  <span class="toc__text">{{ p.title }}</span>
                </button>
              </div>
            </div>
          </section>
        </header>
          <!-- 🔥 FEATURED SECTION -->
          <section class="mb-16">
            <h2 class="text-2xl font-semibold mb-6">Featured Work</h2>

            <div class="grid md:grid-cols-3 gap-6">

              <!-- DISCIPLINE CORE -->
              <div class="p-6 rounded-xl border border-green-400 bg-green-400/10">
                <h3 class="text-lg font-semibold mb-2">
                  DISCIPLINE CORE Trading System
                </h3>

                <p class="text-sm text-gray-400 mb-4">
                  Rule-based trading execution system focused on disciplined decision-making,
                  tracking performance, and removing emotional trading.
                </p>

                <div class="text-xs text-green-400">Active Development</div>
              </div>

              <!-- Project 2 -->
              <div class="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 class="text-lg font-semibold mb-2">
                  Online Garage Sale Platform
                </h3>

                <p class="text-sm text-gray-400 mb-4">
                  Platform for second-hand and handmade products with simple and affordable user experience.
                </p>
              </div>

              <!-- Project 3 -->
              <div class="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 class="text-lg font-semibold mb-2">
                  Portfolio System
                </h3>

                <p class="text-sm text-gray-400 mb-4">
                  Structured project system with filtering, tagging, and scalable architecture.
                </p>
              </div>

            </div>
          </section>
            <div class="mb-12">
              <a
                href="#projects"
                class="inline-block px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm"
              >
                View Full Project Archive →
              </a>
            </div>
        <!-- Project list -->
        <section class="project-list" aria-label="Project list">
          <article
            v-for="p in filteredProjects"
            :key="p.id"
            :id="p.anchorId"
            ref="cards"
            class="card reveal"
            :class="{
              'is-featured': p.featured,
              'is-live': p.status === 'LIVE',
              'is-wip': p.status === 'WIP'
            }"
            tabindex="-1"
            :aria-labelledby="`title-${p.id}`"
          >
            <header class="card__header">
              <div class="card__titleRow">
                <h3 class="card__title" :id="`title-${p.id}`">
                  <!-- Permalink + smooth jump -->
                  <a
                    class="card__hash"
                    :href="`#${p.anchorId}`"
                    @click.prevent="scrollToId(p.anchorId)"
                    :aria-label="`Jump to ${p.title}`"
                  >
                    #
                  </a>
                  <span class="card__titleText">{{ p.title }}</span>
                </h3>

                <div class="badges" aria-label="Badges">
                  <span class="badge badge--status" :class="`badge--${p.status.toLowerCase()}`">
                    {{ p.status }}
                  </span>
                  <span v-if="p.featured" class="badge badge--featured">FEATURED</span>
                </div>
              </div>

              <p class="card__tagline">
                {{ p.tagline }}
              </p>
            </header>

            <div class="card__body">
              <p class="card__desc">{{ p.description }}</p>

              <dl class="facts" aria-label="Project facts">
                <div class="fact">
                  <dt>Domain</dt>
                  <dd>{{ p.domain }}</dd>
                </div>
                <div class="fact">
                  <dt>Type</dt>
                  <dd>
                    <span class="chip chip--type" :data-type="p.type">{{ p.type }}</span>
                  </dd>
                </div>
                <div class="fact">
                  <dt>Level</dt>
                  <dd>
                    <span class="chip chip--level" :data-level="p.level">{{ p.level }}</span>
                  </dd>
                </div>
                <div class="fact">
                  <dt>Date</dt>
                  <dd>{{ formatMonthYear(p.date) }}</dd>
                </div>
              </dl>

              <div class="tagRows">
                <div class="tagRow">
                  <div class="tagRow__label">Languages</div>
                  <div class="tags">
                    <button
                      v-for="lang in p.languages"
                      :key="lang"
                      type="button"
                      class="tag tag--lang"
                      :style="{ '--tag-accent': langColor(lang) }"
                      @click="quickLanguage(lang)"
                      :aria-label="`Filter by language ${lang}`"
                    >
                      <span class="tag__dot" aria-hidden="true"></span>
                      <span class="tag__text">{{ lang }}</span>
                    </button>
                  </div>
                </div>

                <div class="tagRow">
                  <div class="tagRow__label">Stack</div>
                  <div class="tags">
                    <button
                      v-for="t in p.tech"
                      :key="t"
                      type="button"
                      class="tag"
                      @click="quickTech(t)"
                      :aria-label="`Add tech filter ${t}`"
                    >
                      {{ t }}
                    </button>
                  </div>
                </div>
              </div>

              <details class="card__details">
                <summary class="card__summary">Highlights & notes</summary>
                <div class="card__detailsInner">
                  <ul class="bullets">
                    <li v-for="h in p.highlights" :key="h">{{ h }}</li>
                  </ul>

                  <div class="links">
                  <a
                    v-if="p.liveUrl"
                    class="btn btn--primary btn--sm"
                    :href="p.liveUrl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                    <span aria-hidden="true" class="btn__arrow">↗</span>
                  </a>

                  <a
                    v-if="p.repoUrl"
                    class="btn btn--ghost btn--sm"
                    :href="p.repoUrl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                    <span aria-hidden="true" class="btn__arrow">↗</span>
                  </a>

                  <!-- 🔥 THIS IS THE NEW BUTTON -->
                  <button
                    v-if="p.demoCommand"
                    type="button"
                    class="btn btn--ghost btn--sm"
                    @click="navigator.clipboard.writeText(p.demoCommand)"
                  >
                    Copy Demo
                  </button>

                  <!-- existing -->
                  <button
                    type="button"
                    class="btn btn--ghost btn--sm"
                    @click="copyPermalink(p.anchorId)"
                  >
                    Copy link
                  </button>
                </div>
                </div>
              </details>
            </div>

              <footer class="card__footer">

              <span class="fine">
                Primary: <strong>{{ p.primaryLanguage }}</strong>
              </span>

              <span class="sep" aria-hidden="true">•</span>

              <span class="fine">
                {{ p.status === 'LIVE' ? 'Shipping / maintained' : 'In active development' }}
              </span>

              <!-- 🔥 ADD THIS -->
              <span class="sep" aria-hidden="true">•</span>

              <a
                v-if="p.github"
                :href="p.github"
                target="_blank"
                class="tag"
              >
                GitHub
              </a>

            </footer>
          </article>

          <div v-if="filteredProjects.length === 0" class="empty" role="status">
            <p class="empty__title">No matches.</p>
            <p class="empty__text">
              Try removing a filter, or broadening your search.
            </p>
            <button type="button" class="btn btn--primary" @click="resetAll">
              Reset everything
            </button>
          </div>
        </section>

        <!-- About -->
        <section id="about" class="section">
          <h2 class="section-title">About</h2>
          <p class="prose">
            I’m building a portfolio that reflects how I work: disciplined execution,
            clean systems thinking, and minimal but high-signal interfaces.
            I’m especially interested in projects that connect software to real outcomes
            (commerce, automation, and trading).
          </p>

          <div class="aboutGrid" aria-label="Focus areas">
            <div class="aboutCard">
              <h3 class="aboutCard__title">Strengths</h3>
              <p class="aboutCard__text">
                Shipping small systems fast, then iterating. Clear UI, structured backend,
                strong fundamentals (C++/algorithms).
              </p>
            </div>

            <div class="aboutCard">
              <h3 class="aboutCard__title">Current focus</h3>
              <p class="aboutCard__text">
                Backend reliability, data pipelines, and full‑stack products that can go live.
              </p>
            </div>

            <div class="aboutCard">
              <h3 class="aboutCard__title">Values</h3>
              <p class="aboutCard__text">
                Discipline → consistency → compounding progress. Minimalism is not empty —
                it’s deliberate.
              </p>
            </div>
          </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="section">
          <h2 class="section-title">Contact</h2>
          <p class="prose">
            Email is best. If you want quick context, include what you’re building and what you need.
          </p>

          <div class="contactRow">
            <a class="btn btn--primary" :href="`mailto:${email}`">Email me</a>
            <button type="button" class="btn btn--ghost" @click="copyEmail">
              Copy email
            </button>
          </div>

          <p class="tinyNote" aria-live="polite">{{ toast }}</p>
        </section>

        <footer class="pageFooter">
          <p class="pageFooter__text">
            <span class="muted">Last updated</span>
            <span class="sep" aria-hidden="true">•</span>
            <span>{{ formatDayMonthYear(new Date()) }}</span>
            <span class="sep" aria-hidden="true">•</span>
            <span class="muted">Nuxt 3 / Vue 3</span>
          </p>
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Vue/Nuxt implementation notes:
 * - <script setup> is the recommended SFC syntax for Composition API in Vue 3.
 * - Nuxt pages/ directory maps files to routes (this file becomes "/").
 */

import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

useHead({
  title: 'Vatana — Portfolio',
  meta: [
    {
      name: 'description',
      content:
        'Premium dark-minimalist developer portfolio: classified projects with filtering, search, and smooth navigation.'
    }
  ]
})

/* -----------------------------
  Types & data model
-------------------------------- */

type Level = 'MINI' | 'STANDARD' | 'MASTER'
type ProjectType = 'Frontend' | 'Backend' | 'FullStack' | 'C++'
type Status = 'LIVE' | 'WIP'

type Project = {
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
  date: string // ISO date: YYYY-MM-DD
  primaryLanguage: string
  languages: string[]
  tech: string[]
  highlights: string[]
  liveUrl?: string
  repoUrl?: string
}

const PROJECTS: Project[] = [
  {
    id: 'p1',
    slug: 'discipline-core-trading-bot',
    title: 'DISCIPLINE CORE Trading Bot',
    tagline: 'Rule-based execution engine with tracking + risk controls.',
    description:
      'A backend-first system for disciplined trade execution: entries, SL/TP rules, journaling, and performance tracking. Built to be auditable and consistent.',
    domain: 'Trading system / automation',
    level: 'MASTER',
    type: 'Backend',
    status: 'WIP',
    featured: true,
    date: '2026-03-18',
    primaryLanguage: 'Python',
    languages: ['Python'],
    tech: ['FastAPI', 'Pydantic', 'SQLite', 'Pandas', 'Pytest'],
    highlights: [
      'Strict rule engine (entries, SL/TP, position sizing)',
      'Event log + performance metrics for review',
      'Local-first persistence (SQLite) for simplicity',
      'API designed for future UI dashboard'
    ],
    repoUrl: 'https://github.com/',
    liveUrl: ''
  },
  {
    id: 'p2',
    slug: 'garage-sale-marketplace',
    title: 'Online Garage Sale Platform',
    tagline: 'Real-world marketplace for second-hand items.',
    description:
      'A full-stack web app concept for listing, browsing, and messaging between buyers/sellers, designed for real local commerce workflows.',
    domain: 'Marketplace / e-commerce',
    level: 'STANDARD',
    type: 'FullStack',
    status: 'WIP',
    featured: true,
    date: '2026-02-10',
    primaryLanguage: 'JavaScript',
    languages: ['JavaScript', 'HTML', 'CSS'],
    tech: ['Nuxt 3', 'Vue 3', 'Node.js', 'SQLite'],
    highlights: [
      'Listings + categories + search UX',
      'Simple moderation + reporting flow',
      'Planned: auth + messaging + image uploads',
      'Designed to go live for a real audience'
    ]
  },
  {
    id: 'p3',
    slug: 'mini-mart-storefront',
    title: 'Mini‑Mart Storefront',
    tagline: 'Live-style storefront UI for a small local shop.',
    description:
      'A clean storefront front end with product sections, promotions, contact, and a minimal CMS-like content structure (data-driven).',
    domain: 'Real-life store website',
    level: 'STANDARD',
    type: 'Frontend',
    status: 'LIVE',
    featured: false,
    date: '2026-01-22',
    primaryLanguage: 'JavaScript',
    languages: ['JavaScript', 'HTML', 'CSS'],
    tech: ['Nuxt 3', 'Vue 3', 'CSS Grid', 'Accessibility'],
    highlights: [
      'Responsive hero + promotions + product grid',
      'Fast navigation, minimal animations',
      'Accessible contrast and focus states',
      'Content stored as structured data objects'
    ],
    liveUrl: 'https://example.com/'
  },
  {
    id: 'p4',
    slug: 'inventory-api',
    title: 'Inventory API + Admin Notes',
    tagline: 'Backend service for stock items and simple workflows.',
    description:
      'A backend API prototype for inventory CRUD, low-stock alerts, and basic reporting endpoints (ideal for small shops).',
    domain: 'Store ops / backend',
    level: 'STANDARD',
    type: 'Backend',
    status: 'WIP',
    featured: false,
    date: '2025-12-02',
    primaryLanguage: 'Python',
    languages: ['Python'],
    tech: ['FastAPI', 'SQLite', 'Alembic', 'OpenAPI', 'Pytest'],
    highlights: [
      'REST endpoints + OpenAPI schema',
      'Input validation + consistent error shapes',
      'Low-stock query endpoints for dashboards',
      'Designed to be paired with a Nuxt admin UI'
    ],
    repoUrl: 'https://github.com/'
  },
  {
    id: 'p5',
    slug: 'cpp-algorithm-notebook',
    title: 'C++ Algorithm Notebook',
    tagline: 'Data structures + practice problems (clean implementations).',
    description:
      'A curated set of algorithms and data structures in modern C++, focusing on clarity and correctness with test cases.',
    domain: 'CS fundamentals',
    level: 'MASTER',
    type: 'C++',
    status: 'LIVE',
    featured: true,
    date: '2025-11-14',
    primaryLanguage: 'C++',
    languages: ['C++'],
    tech: ['CMake', 'Catch2', 'STL', 'Benchmarking'],
    highlights: [
      'Graphs, DP, search, and classic patterns',
      'Unit tests for correctness',
      'Notes on time/space trade-offs',
      'Benchmark harness for key routines'
    ],
    repoUrl: 'https://github.com/'
  },
  {
    id: 'p6',
    slug: 'cpp-raytracer-mini',
    title: 'C++ Ray Tracer Mini',
    tagline: 'Small graphics project to sharpen systems thinking.',
    description:
      'A compact ray tracer experiment: vectors, rays, materials, and a minimal render loop. Built as an exercise in fundamentals.',
    domain: 'Graphics / C++ practice',
    level: 'MINI',
    type: 'C++',
    status: 'WIP',
    featured: false,
    date: '2026-03-01',
    primaryLanguage: 'C++',
    languages: ['C++'],
    tech: ['C++17', 'PPM output', 'Math'],
    highlights: [
      'Vector math + ray-sphere intersections',
      'Material experiments (diffuse/metal)',
      'Focus: correctness and readability',
      'Potential: SIMD optimisation later'
    ]
  },
  {
    id: 'p7',
    slug: 'python-data-pipeline',
    title: 'Python Data Pipeline',
    tagline: 'ETL-style pipeline with reproducible runs.',
    description:
      'A small data pipeline that pulls inputs, cleans them, outputs structured datasets, and produces summary metrics.',
    domain: 'Data engineering',
    level: 'STANDARD',
    type: 'Backend',
    status: 'LIVE',
    featured: false,
    date: '2025-10-05',
    primaryLanguage: 'Python',
    languages: ['Python'],
    tech: ['Pandas', 'Poetry', 'CLI', 'CSV/JSON'],
    highlights: [
      'Deterministic runs with clear logging',
      'Config-driven inputs/outputs',
      'Simple CLI interface for repeat use',
      'Built for real projects, not demos'
    ],
    repoUrl: 'https://github.com/'
  },
  {
    id: 'p8',
    slug: 'nuxt-portfolio-system',
    title: 'Nuxt Portfolio System',
    tagline: 'This site: classified projects + premium UI patterns.',
    description:
      'A portfolio page designed as a project collection system: filtering, sorting, search, anchors, and minimal premium aesthetics.',
    domain: 'Developer portfolio',
    level: 'MASTER',
    type: 'Frontend',
    status: 'LIVE',
    featured: true,
    date: '2026-03-31',
    primaryLanguage: 'TypeScript',
    languages: ['TypeScript', 'JavaScript', 'CSS'],
    tech: ['Nuxt 3', 'Vue 3', 'IntersectionObserver', 'A11y'],
    highlights: [
      'Sticky left column layout (desktop)',
      'Filter/search/sort with keyboard support',
      'Scroll-reveal animations (reduced motion-friendly)',
      'Design tokens via CSS variables'
    ]
  },
  {
    id: 'p9',
    slug: 'node-mini-crm',
    title: 'Mini CRM for Small Teams',
    tagline: 'Contacts + notes + follow-ups with clean UX.',
    description:
      'A small CRM concept: contacts, notes, follow-ups, and reporting views. Designed for a micro-business workflow.',
    domain: 'Business tooling',
    level: 'STANDARD',
    type: 'FullStack',
    status: 'WIP',
    featured: false,
    date: '2026-02-26',
    primaryLanguage: 'JavaScript',
    languages: ['JavaScript'],
    tech: ['Node.js', 'SQLite', 'REST', 'Nuxt 3'],
    highlights: [
      'Contact list + detail pages',
      'Follow-up reminders + activity log',
      'Planned: simple role permissions',
      'Optimised for speed and clarity'
    ]
  },
  {
  id: 'p10',
  slug: 'laptopcat-cli',
  title: 'LaptopCat CLI',
  tagline: 'C++ CLI tool',
  description: 'C++ CLI that processes CSV into JSON',
  domain: 'CLI',
  level: 'MINI',
  type: 'C++',
  status: 'LIVE',
  featured: true,
  date: '2026-03-31',
  primaryLanguage: 'C++',
  languages: ['C++'],
  tech: ['C++', 'CLI'],
  highlights: ['Fast', 'Simple'],
  github: "https://github.com/kavatana/laptopcat",
  demoCommand: 'run command'
},
]

/* -----------------------------
  UI config (filter options)
-------------------------------- */

const TYPE_OPTIONS: Array<'All' | ProjectType> = [
  'All',
  'FullStack',
  'Frontend',
  'Backend',
  'C++'
]

const LEVEL_OPTIONS: Array<'All' | Level> = ['All', 'MINI', 'STANDARD', 'MASTER']
const STATUS_OPTIONS: Array<'All' | Status> = ['All', 'LIVE', 'WIP']

/* -----------------------------
  Small theme helpers
-------------------------------- */

const LANG_COLOURS: Record<string, string> = {
  'C++': '#00599C',
  Python: '#3572A5',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  HTML: '#E34F26',
  CSS: '#7C3AED'
}

function langColor(lang: string) {
  return LANG_COLOURS[lang] ?? '#64ffda'
}

/* -----------------------------
  State: search, filter, sort
-------------------------------- */

const query = ref('')

const selectedType = ref<'All' | ProjectType>('All')
const selectedLevel = ref<'All' | Level>('All')
const selectedStatus = ref<'All' | Status>('All')

const selectedLanguages = ref<string[]>([])
const selectedTech = ref<string[]>([])

const sortKey = ref<'date-desc' | 'date-asc' | 'status' | 'featured'>('date-desc')

// Keep the disclosure open by default on desktop; on small screens it’s useful to collapse.
const detailsOpen = computed(() => {
  return true
})

const hasAnyFilter = computed(() => {
  return (
    query.value.length > 0 ||
    selectedType.value !== 'All' ||
    selectedLevel.value !== 'All' ||
    selectedStatus.value !== 'All' ||
    selectedLanguages.value.length > 0 ||
    selectedTech.value.length > 0
  )
})

function resetAll() {
  query.value = ''
  selectedType.value = 'All'
  selectedLevel.value = 'All'
  selectedStatus.value = 'All'
  selectedLanguages.value = []
  selectedTech.value = []
  sortKey.value = 'date-desc'
}

/* Multi-select helpers */
function toggleLanguage(lang: string) {
  const list = selectedLanguages.value
  selectedLanguages.value = list.includes(lang)
    ? list.filter((x) => x !== lang)
    : [...list, lang]
}

function toggleTech(tech: string) {
  const list = selectedTech.value
  selectedTech.value = list.includes(tech)
    ? list.filter((x) => x !== tech)
    : [...list, tech]
}

/* Quick filters from within cards (adds, doesn’t wipe other filters) */
function quickLanguage(lang: string) {
  if (!selectedLanguages.value.includes(lang)) {
    selectedLanguages.value = [...selectedLanguages.value, lang]
  }
  scrollToId('projects')
}

function quickTech(tech: string) {
  if (!selectedTech.value.includes(tech)) {
    selectedTech.value = [...selectedTech.value, tech]
  }
  scrollToId('projects')
}

/* -----------------------------
  Derived filter option lists
-------------------------------- */

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr))
}

const LANGUAGE_OPTIONS = computed(() => {
  const langs = PROJECTS.flatMap((p) => p.languages)
  // Stable-ish ordering: show common languages first
  const preferred = ['C++', 'Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  const unique = uniq(langs)
  unique.sort((a, b) => {
    const ia = preferred.indexOf(a)
    const ib = preferred.indexOf(b)
    if (ia === -1 && ib === -1) return a.localeCompare(b)
    if (ia === -1) return 1
    if (ib === -1) return -1
    return ia - ib
  })
  return unique
})

const TECH_OPTIONS = computed(() => {
  const tech = PROJECTS.flatMap((p) => p.tech)
  const unique = uniq(tech)
  unique.sort((a, b) => a.localeCompare(b))
  return unique
})

/* -----------------------------
  Filtering + searching
-------------------------------- */

function normalise(s: string) {
  return s.toLowerCase().trim()
}

function matchesQuery(p: Project, q: string) {
  if (!q) return true
  const haystack = [
    p.title,
    p.tagline,
    p.description,
    p.domain,
    p.level,
    p.type,
    p.status,
    p.primaryLanguage,
    p.languages.join(' '),
    p.tech.join(' ')
  ].join(' ')
  return normalise(haystack).includes(normalise(q))
}

function matchesMultiSelect(needles: string[], haystack: string[]) {
  if (needles.length === 0) return true
  // “AND” matching: if you select 2 tech tags, the project must include both
  return needles.every((n) => haystack.includes(n))
}

const projectsVM = computed(() => {
  return PROJECTS.map((p) => ({
    ...p,
    anchorId: `project-${p.slug}`,
    dateObj: new Date(p.date)
  }))
})

const featuredProjects = computed(() => {
  return projectsVM.value.filter((p) => p.featured)
})

const filteredProjects = computed(() => {
  let list = projectsVM.value.slice()

  // Filters
  if (selectedType.value !== 'All') {
    list = list.filter((p) => p.type === selectedType.value)
  }
  if (selectedLevel.value !== 'All') {
    list = list.filter((p) => p.level === selectedLevel.value)
  }
  if (selectedStatus.value !== 'All') {
    list = list.filter((p) => p.status === selectedStatus.value)
  }

  if (selectedLanguages.value.length) {
    list = list.filter((p) => matchesMultiSelect(selectedLanguages.value, p.languages))
  }

  if (selectedTech.value.length) {
    list = list.filter((p) => matchesMultiSelect(selectedTech.value, p.tech))
  }

  // Search
  if (query.value) {
    list = list.filter((p) => matchesQuery(p, query.value))
  }

  // Sort
  const STATUS_WEIGHT: Record<Status, number> = { LIVE: 0, WIP: 1 }

  list.sort((a, b) => {
    if (sortKey.value === 'featured') {
      if (a.featured !== b.featured) return a.featured ? -1 : 1
      return b.dateObj.getTime() - a.dateObj.getTime()
    }
    if (sortKey.value === 'status') {
      const w = STATUS_WEIGHT[a.status] - STATUS_WEIGHT[b.status]
      if (w !== 0) return w
      return b.dateObj.getTime() - a.dateObj.getTime()
    }
    if (sortKey.value === 'date-asc') {
      return a.dateObj.getTime() - b.dateObj.getTime()
    }
    // date-desc default
    return b.dateObj.getTime() - a.dateObj.getTime()
  })

  return list
})

/* -----------------------------
  Smooth scrolling to anchors
-------------------------------- */

const reduceMotion = ref(false)

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({
    behavior: reduceMotion.value ? 'auto' : 'smooth',
    block: 'start'
  })

  // For keyboard/screen-reader users: move focus to the target container.
  // (tabindex="-1" enables programmatic focus without affecting tab order)
  window.setTimeout(() => {
    ;(el as HTMLElement).focus?.({ preventScroll: true })
  }, reduceMotion.value ? 0 : 250)
}

/* -----------------------------
  Clipboard utilities (permalinks + email)
-------------------------------- */

const email = 'kavatanaa@gmail.com'
const resumeUrl = '/resume.pdf' // Put a real PDF in /public/resume.pdf
const toast = ref('')
const hintText = ref('Tip: click language/tech tags to filter.')

async function safeCopy(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

async function copyPermalink(anchorId: string) {
  const url = `${window.location.origin}${window.location.pathname}#${anchorId}`
  const ok = await safeCopy(url)
  toast.value = ok ? 'Copied link to clipboard.' : 'Copy failed (browser blocked clipboard).'
  window.setTimeout(() => (toast.value = ''), 2200)
}

async function copyEmail() {
  const ok = await safeCopy(email)
  hintText.value = ok ? 'Email copied.' : `Email: ${email}`
  window.setTimeout(() => {
    hintText.value = 'Tip: click language/tech tags to filter.'
  }, 2200)
}

/* -----------------------------
  Scroll reveal (IntersectionObserver)
-------------------------------- */

const cards = ref<HTMLElement[]>([])
let observer: IntersectionObserver | null = null

onMounted(async () => {
  // Detect reduced motion preference
  reduceMotion.value = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false

  await nextTick()

  // If reduced motion, reveal everything immediately
  if (reduceMotion.value) {
    cards.value.forEach((el) => el.classList.add('is-revealed'))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          ;(entry.target as HTMLElement).classList.add('is-revealed')
          observer?.unobserve(entry.target)
        }
      }
    },
    {
      // Slightly early reveal for “premium” feel
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.06
    }
  )

  cards.value.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})

/* -----------------------------
  Date formatting (en-GB)
-------------------------------- */

function formatMonthYear(dateISO: string) {
  const d = new Date(dateISO)
  return new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric' }).format(d)
}

function formatDayMonthYear(date: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date)
}
</script>

<style scoped>
/* -----------------------------
  Global theme tokens (scoped file, but :global makes them global)
-------------------------------- */
:global(:root) {
  /* Brittany-like navy base + slate text + green accent (tuned darker) */
  --bg-0: #020617; /* deep slate */
  --bg-1: #0a192f; /* “navy” family */
  --bg-2: #0b1222;

  --card: rgba(255, 255, 255, 0.04);
  --card-2: rgba(255, 255, 255, 0.06);
  --border: rgba(255, 255, 255, 0.10);
  --border-2: rgba(255, 255, 255, 0.16);

  --text: rgba(255, 255, 255, 0.92);
  --muted: rgba(226, 232, 240, 0.70);
  --faint: rgba(226, 232, 240, 0.52);

  --accent: #64ffda; /* teal/green accent */
  --accent-2: #60a5fa; /* soft blue */
  --accent-3: #a78bfa; /* soft purple */
  --warn: #fbbf24; /* amber */
  --ok: #34d399; /* green */

  /* Fonts: system-first. Add Inter later if desired. */
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";

  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 18px;

  --shadow-1: 0 10px 30px rgba(0, 0, 0, 0.28);
  --shadow-2: 0 16px 46px rgba(0, 0, 0, 0.37);

  --ring: 0 0 0 3px rgba(100, 255, 218, 0.28);

  --anchor-offset: 84px;
}

:global(html) {
  scroll-behavior: smooth; /* will be overridden by reduced motion preferences */
}

:global(html),
:global(body) {
  background: var(--bg-0);
  color: var(--text);
  font-family: var(--font-sans);
}

@media (prefers-reduced-motion: reduce) {
  :global(html) {
    scroll-behavior: auto;
  }
}

/* -----------------------------
  Page layout
-------------------------------- */
.page {
  position: relative;
  min-height: 100vh;
  isolation: isolate;
}

.shell {
  position: relative;
  z-index: 1;
  max-width: 1160px;
  margin: 0 auto;
  padding: clamp(18px, 2.6vw, 30px);
  display: grid;
  grid-template-columns: minmax(280px, 360px) minmax(0, 1fr);
  gap: clamp(18px, 2.6vw, 34px);
}

/* Mobile stacking */
@media (max-width: 940px) {
  .shell {
    grid-template-columns: 1fr;
  }
}

/* Skip link */
.skip-link {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px 12px;
  background: rgba(2, 6, 23, 0.9);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  transform: translateY(-140%);
  transition: transform 180ms ease;
  z-index: 50;
}
.skip-link:focus {
  transform: translateY(0);
}

/* -----------------------------
  Ambient background (subtle lighting)
-------------------------------- */
.ambient {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.ambient__vignette {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1200px 700px at 30% 10%, rgba(96, 165, 250, 0.10), transparent 60%),
    radial-gradient(800px 520px at 70% 20%, rgba(167, 139, 250, 0.10), transparent 56%),
    radial-gradient(900px 580px at 60% 90%, rgba(100, 255, 218, 0.08), transparent 55%),
    linear-gradient(160deg, rgba(10, 25, 47, 0.88), rgba(2, 6, 23, 0.96));
}

.ambient__spot {
  position: absolute;
  width: 860px;
  height: 860px;
  filter: blur(42px);
  opacity: 0.55;
  border-radius: 999px;
  transform: translate3d(0, 0, 0);
}
.ambient__spot--a {
  left: -260px;
  top: -240px;
  background: radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.42), transparent 62%);
}
.ambient__spot--b {
  right: -340px;
  top: -190px;
  background: radial-gradient(circle at 40% 30%, rgba(167, 139, 250, 0.36), transparent 62%);
}
.ambient__spot--c {
  left: 26%;
  bottom: -440px;
  background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.20), transparent 66%);
}

.ambient__grid {
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(600px 380px at 55% 25%, rgba(0,0,0,1), transparent 70%);
}

/* -----------------------------
  Sidebar (left column)
-------------------------------- */
.sidebar {
  position: sticky;
  top: 20px;
  align-self: start;
  padding: 18px;
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: var(--shadow-1);
  backdrop-filter: blur(10px) saturate(130%);
}

@media (max-width: 940px) {
  .sidebar {
    position: relative;
    top: 0;
  }
}

.profile {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 14px;
  align-items: start;
}

.avatar {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(2, 6, 23, 0.45);
  box-shadow: 0 10px 26px rgba(0,0,0,0.25);
  overflow: hidden;
}
.avatar__svg {
  width: 100%;
  height: 100%;
}

.kicker {
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--faint);
}

.name {
  margin: 4px 0 0;
  font-size: clamp(26px, 3.2vw, 36px);
  line-height: 1.10;
  letter-spacing: -0.02em;
}

.role {
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--muted);
}

.summary {
  margin: 12px 0 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--faint);
  max-width: 46ch;
}

.sidebar__actions {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.sidebar__nav {
  margin-top: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.sidebar__nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 13px;
  padding: 6px 8px;
  border-radius: 10px;
  border: 1px solid transparent;
}
.sidebar__nav a:hover {
  color: var(--text);
  border-color: rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.03);
}
.sidebar__nav a:focus-visible {
  outline: none;
  box-shadow: var(--ring);
}

.sidebar__meta {
  margin-top: 16px;
  display: grid;
  gap: 12px;
}

.meta-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.meta-pill {
  font-size: 12px;
  color: var(--faint);
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(2, 6, 23, 0.35);
}

.social {
  display: flex;
  gap: 10px;
  align-items: center;
}
.icon-btn {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(2, 6, 23, 0.35);
  color: rgba(255,255,255,0.86);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform 140ms ease, background 140ms ease, border-color 140ms ease;
}
.icon-btn svg {
  width: 18px;
  height: 18px;
}
.icon-btn:hover {
  transform: translateY(-1px);
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.18);
}
.icon-btn:focus-visible {
  outline: none;
  box-shadow: var(--ring);
}

.sidebar__hint {
  margin: 0;
  font-size: 12px;
  color: var(--faint);
  display: flex;
  gap: 8px;
  align-items: center;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 30%, var(--accent), rgba(100,255,218,0.25));
  box-shadow: 0 0 0 3px rgba(100,255,218,0.12);
}

.sidebar__footer {
  margin: 14px 0 0;
  font-size: 12px;
  color: rgba(226,232,240,0.46);
}

/* -----------------------------
  Content header + controls
-------------------------------- */
.content {
  min-width: 0;
}

.content__header {
  position: relative;
  padding: 12px 0 18px;
}

.section-title {
  margin: 0;
  font-size: clamp(20px, 2.4vw, 26px);
  letter-spacing: -0.02em;
}

.section-subtitle {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
  max-width: 70ch;
}

/* Frosted control bar */
.control-bar {
  margin-top: 16px;
  padding: 12px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(2, 6, 23, 0.35);
  backdrop-filter: blur(10px) saturate(140%);
  display: grid;
  grid-template-columns: 1fr 160px auto;
  gap: 10px;
  align-items: end;
}

@media (max-width: 540px) {
  .control-bar {
    grid-template-columns: 1fr;
  }
}

.field {
  display: grid;
  gap: 6px;
}
.field__label {
  font-size: 12px;
  color: var(--faint);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.input,
.select {
  height: 40px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(0,0,0,0.18);
  color: var(--text);
  font-size: 14px;
}

.input::placeholder {
  color: rgba(226,232,240,0.45);
}

.input:focus-visible,
.select:focus-visible {
  outline: none;
  box-shadow: var(--ring);
  border-color: rgba(100,255,218,0.25);
}

/* -----------------------------
  Buttons
-------------------------------- */
.btn {
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: var(--text);
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 13px;
  text-decoration: none;
  display: inline-flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  transition: transform 140ms ease, background 140ms ease, border-color 140ms ease;
  user-select: none;
}

.btn:hover {
  transform: translateY(-1px);
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.18);
}

.btn:focus-visible {
  outline: none;
  box-shadow: var(--ring);
}

.btn:disabled,
.btn[aria-disabled="true"] {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none;
}

.btn--primary {
  border-color: rgba(100,255,218,0.22);
  background: linear-gradient(180deg, rgba(100,255,218,0.16), rgba(96,165,250,0.10));
}

.btn--ghost {
  background: rgba(0,0,0,0.14);
}

.btn--sm {
  padding: 8px 10px;
  font-size: 12px;
  border-radius: 11px;
}

.btn__arrow {
  opacity: 0.9;
}

/* Small link-like button */
.link-btn {
  border: none;
  background: transparent;
  color: rgba(100,255,218,0.82);
  font-size: 12px;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 10px;
}
.link-btn:hover {
  background: rgba(100,255,218,0.08);
}
.link-btn:focus-visible {
  outline: none;
  box-shadow: var(--ring);
}

/* -----------------------------
  Filters + pills
-------------------------------- */
.filters {
  margin-top: 14px;
  display: grid;
  gap: 16px;
}

.filter-group__head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 8px;
}

.filter-group__label {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--faint);
}

.filter-group__value {
  font-size: 12px;
  color: rgba(226,232,240,0.55);
}

.pill-row {
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 6px;
  scrollbar-width: thin;
}

.pill-row--wrap {
  flex-wrap: wrap;
  overflow: visible;
  padding-bottom: 0;
}

.pill {
  flex: 0 0 auto;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.03);
  color: rgba(226,232,240,0.80);
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 12px;
  cursor: pointer;
  transition: transform 120ms ease, border-color 120ms ease, background 120ms ease;
}

.pill:hover {
  transform: translateY(-1px);
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.18);
}

.pill.is-active {
  color: rgba(2,6,23,0.95);
  background: rgba(100,255,218,0.85);
  border-color: rgba(100,255,218,0.9);
}

.pill:focus-visible {
  outline: none;
  box-shadow: var(--ring);
}

.pill--lang {
  --pill-accent: var(--accent);
}
.pill--lang .lang-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--pill-accent);
  margin-right: 8px;
  display: inline-block;
  box-shadow: 0 0 0 3px rgba(0,0,0,0.12);
}

/* Details disclosure */
.filters__details {
  border-radius: var(--radius-md);
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.02);
  padding: 10px 12px;
}
.filters__summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  font-size: 13px;
  color: rgba(226,232,240,0.82);
}
.filters__summary::-webkit-details-marker {
  display: none;
}
.filters__summaryMeta {
  font-size: 12px;
  color: rgba(226,232,240,0.55);
}

.filters__detailsGrid {
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
@media (max-width: 820px) {
  .filters__detailsGrid {
    grid-template-columns: 1fr;
  }
}

.results {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 12px;
  color: rgba(226,232,240,0.62);
}
.results__count {
  color: rgba(226,232,240,0.92);
  font-weight: 650;
}
.results__label {
  color: rgba(226,232,240,0.55);
}

/* Featured quick jump */
.toc {
  border-radius: var(--radius-md);
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(0,0,0,0.13);
  padding: 12px;
}
.toc__label {
  margin: 0 0 10px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(226,232,240,0.55);
}
.toc__list {
  display: grid;
  gap: 8px;
}
.toc__item {
  width: 100%;
  text-align: left;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.03);
  color: rgba(226,232,240,0.86);
  padding: 10px 12px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: transform 140ms ease, background 140ms ease, border-color 140ms ease;
}
.toc__item:hover {
  transform: translateY(-1px);
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.18);
}
.toc__item:focus-visible {
  outline: none;
  box-shadow: var(--ring);
}
.toc__dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 30%, var(--accent), rgba(100,255,218,0.22));
  box-shadow: 0 0 0 3px rgba(100,255,218,0.10);
}
.toc__text {
  font-size: 13px;
}

/* -----------------------------
  Project cards + reveal animation
-------------------------------- */
.project-list {
  margin-top: 10px;
  display: grid;
  gap: 14px;
}

.card {
  position: relative;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.10);
  background: linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.03));
  box-shadow: var(--shadow-1);
  overflow: hidden;
  scroll-margin-top: var(--anchor-offset);
}

/* subtle gradient “rim light” */
.card::before {
  content: "";
  position: absolute;
  inset: -2px;
  background:
    radial-gradient(800px 240px at 18% 0%, rgba(100,255,218,0.14), transparent 62%),
    radial-gradient(700px 260px at 82% 0%, rgba(167,139,250,0.12), transparent 62%),
    radial-gradient(900px 420px at 50% 115%, rgba(96,165,250,0.10), transparent 66%);
  opacity: 0;
  transition: opacity 180ms ease;
  pointer-events: none;
}

.card:hover::before {
  opacity: 1;
}

/* hover lift: transform/opacity only */
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
  border-color: rgba(255,255,255,0.16);
}

/* Reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(14px);
}
.reveal.is-revealed {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 520ms ease, transform 520ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal.is-revealed,
  .card,
  .card:hover {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

.card__header {
  padding: 16px 16px 0;
}

.card__titleRow {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: start;
}

.card__title {
  margin: 0;
  font-size: 16px;
  letter-spacing: -0.01em;
  display: flex;
  gap: 10px;
  align-items: baseline;
}

.card__hash {
  color: rgba(100,255,218,0.85);
  text-decoration: none;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 10px;
  border: 1px solid rgba(100,255,218,0.12);
  background: rgba(100,255,218,0.06);
}
.card__hash:hover {
  background: rgba(100,255,218,0.10);
}
.card__hash:focus-visible {
  outline: none;
  box-shadow: var(--ring);
}

.badges {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.badge {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(0,0,0,0.16);
  color: rgba(226,232,240,0.78);
}

.badge--live {
  border-color: rgba(52,211,153,0.25);
  background: rgba(52,211,153,0.12);
  color: rgba(167,243,208,0.95);
}

.badge--wip {
  border-color: rgba(251,191,36,0.22);
  background: rgba(251,191,36,0.10);
  color: rgba(253,230,138,0.95);
}

.badge--featured {
  border-color: rgba(96,165,250,0.24);
  background: rgba(96,165,250,0.12);
  color: rgba(191,219,254,0.95);
}

.card__tagline {
  margin: 10px 0 0;
  font-size: 13px;
  color: rgba(226,232,240,0.68);
}

.card__body {
  padding: 12px 16px 16px;
}

.card__desc {
  margin: 10px 0 0;
  color: rgba(226,232,240,0.70);
  line-height: 1.65;
  font-size: 13px;
}

/* Facts grid (dl) */
.facts {
  margin: 14px 0 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}
@media (max-width: 740px) {
  .facts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.fact {
  padding: 10px 10px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(0,0,0,0.10);
}
.fact dt {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(226,232,240,0.55);
  margin: 0;
}
.fact dd {
  margin: 6px 0 0;
  font-size: 13px;
  color: rgba(226,232,240,0.86);
}

/* Chips (type/level) */
.chip {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.03);
}
.chip--type[data-type="FullStack"] { border-color: rgba(96,165,250,0.22); }
.chip--type[data-type="Frontend"] { border-color: rgba(167,139,250,0.22); }
.chip--type[data-type="Backend"] { border-color: rgba(100,255,218,0.18); }
.chip--type[data-type="C++"] { border-color: rgba(251,191,36,0.18); }

.chip--level[data-level="MINI"] { border-color: rgba(226,232,240,0.18); }
.chip--level[data-level="STANDARD"] { border-color: rgba(96,165,250,0.22); }
.chip--level[data-level="MASTER"] { border-color: rgba(100,255,218,0.22); }

/* Tags */
.tagRows {
  margin-top: 14px;
  display: grid;
  gap: 10px;
}
.tagRow {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 10px;
  align-items: start;
}
@media (max-width: 560px) {
  .tagRow {
    grid-template-columns: 1fr;
  }
}
.tagRow__label {
  font-size: 12px;
  color: rgba(226,232,240,0.55);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-top: 6px;
}
.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  border-radius: 999px;
  padding: 6px 10px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.03);
  font-size: 12px;
  color: rgba(226,232,240,0.82);
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease, border-color 120ms ease;
}

.tag:hover {
  transform: translateY(-1px);
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.16);
}

.tag:focus-visible {
  outline: none;
  box-shadow: var(--ring);
}

.tag--lang {
  --tag-accent: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.tag__dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--tag-accent);
  box-shadow: 0 0 0 3px rgba(0,0,0,0.14);
}

/* Details inside card */
.card__details {
  margin-top: 14px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(0,0,0,0.12);
  overflow: hidden;
}
.card__summary {
  cursor: pointer;
  padding: 12px 12px;
  font-size: 13px;
  color: rgba(226,232,240,0.82);
  list-style: none;
}
.card__summary::-webkit-details-marker {
  display: none;
}
.card__detailsInner {
  padding: 0 12px 12px;
  display: grid;
  gap: 12px;
}
.bullets {
  margin: 0;
  padding-left: 18px;
  color: rgba(226,232,240,0.70);
  line-height: 1.6;
  font-size: 13px;
}
.links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.card__footer {
  padding: 12px 16px 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  color: rgba(226,232,240,0.55);
  font-size: 12px;
}
.fine strong {
  color: rgba(226,232,240,0.88);
  font-weight: 650;
}
.sep {
  opacity: 0.6;
}

/* Empty state */
.empty {
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.02);
  padding: 18px;
}
.empty__title {
  margin: 0;
  font-size: 14px;
  font-weight: 650;
}
.empty__text {
  margin: 8px 0 14px;
  color: rgba(226,232,240,0.62);
  font-size: 13px;
}

/* -----------------------------
  About / Contact sections
-------------------------------- */
.section {
  margin-top: 26px;
  padding: 16px 0;
  scroll-margin-top: var(--anchor-offset);
}

.prose {
  margin: 10px 0 0;
  color: rgba(226,232,240,0.70);
  line-height: 1.75;
  font-size: 13px;
  max-width: 78ch;
}

.aboutGrid {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
@media (max-width: 820px) {
  .aboutGrid {
    grid-template-columns: 1fr;
  }
}
.aboutCard {
  border-radius: var(--radius-md);
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.03);
  padding: 14px;
}
.aboutCard__title {
  margin: 0;
  font-size: 14px;
}
.aboutCard__text {
  margin: 8px 0 0;
  color: rgba(226,232,240,0.66);
  line-height: 1.65;
  font-size: 13px;
}

.contactRow {
  margin-top: 14px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.tinyNote {
  margin: 10px 0 0;
  font-size: 12px;
  color: rgba(226,232,240,0.55);
  min-height: 18px;
}

/* Footer */
.pageFooter {
  padding: 26px 0 40px;
}
.pageFooter__text {
  margin: 0;
  font-size: 12px;
  color: rgba(226,232,240,0.55);
}
.muted {
  color: rgba(226,232,240,0.48);
}
</style>
