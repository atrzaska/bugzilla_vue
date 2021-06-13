<template>
  <tr>
    <td>
      <router-link :to="`/projects/${projectSlug}/stories/${story.id}/edit`">
        {{ story.name }}
      </router-link>
    </td>
    <td>{{ story.state }}</td>
    <td>{{ story.kind }}</td>
    <td>{{ story.container }}</td>
    <td>{{ story.tasksCount }}</td>
    <td>{{ story.commentsCount }}</td>
    <td class="d-flex justify-content-end">
      <Actions
        :story="story"
        :updateStoryState="updateStoryState"
        :deleteStory="deleteStory"
      />
    </td>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue'
import useUrlParams from '@/use/useUrlParams'
import Actions from './Actions'

const { id: projectSlug } = useUrlParams()

const props = defineProps({
  story: Object,
  updateStoryState: Function,
  deleteStory: Function,
})
const { story, updateStoryState, deleteStory } = props
</script>
