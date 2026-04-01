<template>
  <div class="page">
    <main class="grid-wrap">
      <div class="grid">
        <div v-for="project in projects" :key="project.id" class="card">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>

          <div class="tags">
            <span>{{ project.primaryLang }}</span>
            <span v-for="tech in project.techStack" :key="tech">{{ tech }}</span>
          </div>

          <div class="footer">
            <span>{{ project.status }}</span>
            <span>{{ formatDate(project.createdAt) }}</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useProjects } from '~/composables/useProject'

const { projects } = useProjects()

function formatDate(date: string) {
  return new Date(date).toLocaleDateString()
}
</script>

<style scoped>
.page {
  background: black;
  color: white;
  min-height: 100vh;
}

.grid-wrap {
  padding: 80px 20px;
  max-width: 1000px;
  margin: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.card {
  background: #111;
  padding: 20px;
  border-radius: 10px;
}

.tags {
  margin-top: 10px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.footer {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>