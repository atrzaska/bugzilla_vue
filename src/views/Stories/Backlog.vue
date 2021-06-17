<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>{{ project.name }}</h1>
      <router-link
        class="btn btn-primary"
        :to="`/projects/${projectSlug}/stories/new`"
      >
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
            <th class="border-0 w-1 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="story in collection" :key="story.id">
            <Story
              :story="story"
              :updateStoryState="updateStoryState"
              :deleteStory="deleteStory"
            />
          </template>
        </tbody>
      </table>
      <BottomPagination :pagination="pagination" />
    </div>
    <Empty v-else />
  </AppLayout>
</template>

<script setup>
import { ref, watch } from 'vue'
import AppLayout from '@/layouts/App'
import ProjectTabs from '@/components/ProjectTabs'
import TopPagination from '@/components/TopPagination'
import BottomPagination from '@/components/BottomPagination'
import Loading from '@/components/Loading'
import Sort from '@/components/Sort'
import Story from './components/Story'
import Empty from './components/Empty'
import useCollection from '@/use/useCollection'
import useUrlParams from '@/use/useUrlParams'
import usePagination from '@/use/usePagination'
import API from '@/services/requests'
import useSorting from '@/use/useSorting'
import { defaultSorting, SORT_OPTIONS } from './helpers/sorting'

const STATES = 'unstarted'
const CONTAINER = 'backlog'
const sort = useSorting(defaultSorting)
const { id: projectSlug } = useUrlParams()
const { collection, total, loading, setCollection } = useCollection()
const pagination = usePagination({ collection, total })
const { page } = pagination
const project = ref({})

const fetchCollection = (options = {}) => {
  loading.value = true
  API.fetchProjectBySlug(projectSlug)
    .then((result) => (project.value = result))
    .then((result) =>
      API.fetchStories(
        {
          'filter.project_id': result.id,
          'filter.state': STATES,
          'filter.container': CONTAINER,
          page: page.value,
          sort: sort.value,
        },
        options
      )
    )
    .then(setCollection)
}

const updateStoryState = (story, state) =>
  API.updateStory(story.id, { state }).then(() => {
    loading.value = true
    fetchCollection({ refresh: true })
  })

const deleteStory = (story) => {
  if (confirm('Are you sure?')) {
    loading.value = true
    API.deleteStory(story.id).then(() => fetchCollection({ refresh: true }))
  }
}

watch([page, sort], fetchCollection)
fetchCollection({ refresh: true })
</script>
