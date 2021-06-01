<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>qwe</h1>
      <router-link class="btn btn-primary" to="/projects/qwe/stories/new">
        New
      </router-link>
    </div>
    <ProjectTabs />
    <h1 class="text-center text-secondary p-4">
      You don't have any stories yet
    </h1>
    <div class="text-center">
      <router-link class="btn btn-primary" to="/projects/qwe/stories/new">
        Create story
      </router-link>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
import ProjectTabs from '@/components/ProjectTabs'
</script>
