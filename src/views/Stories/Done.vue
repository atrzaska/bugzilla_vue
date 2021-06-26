<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h5>{{ project.name }}</h5>
      <router-link class="btn btn-primary" :to="`/projects/${id}/stories/new`">
        New
      </router-link>
    </div>
    <ProjectTabs />
    <Loading v-if="loading" />
    <div v-else-if="collection.length">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <Sort v-model="sort" :options="SORT_OPTIONS" />
        <TopPagination :pagination="pagination" />
      </div>
      <table class="table mb-3">
        <thead>
          <tr>
            <th class="border-0">Name</th>
            <th class="border-0">State</th>
            <th class="border-0">Type</th>
            <th class="border-0">Container</th>
            <th class="border-0">Tasks</th>
            <th class="border-0">Comments</th>
            <th class="border-0 w-1 text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="story in collection" :key="story.id">
            <Story
              :story="story"
              :updateStoryState="updateStoryState"
              :onDelete="onDelete"
            />
          </template>
        </tbody>
      </table>
      <XrmPagination :pagination="pagination" />
    </div>
    <Empty v-else />
  </AppLayout>
</template>

<script setup>
import { watch } from 'vue'
import AppLayout from '@/layouts/App'
import ProjectTabs from '@/components/ProjectTabs'
import TopPagination from '@/components/pagination/TopPagination'
import XrmPagination from '@/components/pagination/XrmPagination'
import Loading from '@/components/Loading'
import Sort from '@/components/Sort'
import Story from './components/Story'
import Empty from './components/Empty'
import { SORT_OPTIONS } from './helpers/sorting'
import useStories from './helpers/useStories'

const filters = { 'filter.state': 'accepted' }
const {
  id,
  project,
  collection,
  loading,
  pagination,
  sort,
  updateStoryState,
  onDelete,
} = useStories({ filters })
</script>
