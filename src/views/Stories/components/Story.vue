<template>
  <tr>
    <td>
      <router-link :to="`/projects/${id}/stories/${story.id}/edit`">
        {{ story.name }}
      </router-link>
    </td>
    <td>{{ story.state }}</td>
    <td>{{ story.kind }}</td>
    <td>{{ story.container }}</td>
    <td>{{ story.tasksCount }}</td>
    <td>{{ story.commentsCount }}</td>
    <td>
      <div class="d-flex justify-content-end">
        <Actions
          :story="story"
          :updateStoryState="updateStoryState"
          :onDelete="onDelete"
        />
      </div>
    </td>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue'
import useUrlParams from '@/use/useUrlParams'
import Actions from './Actions'

const { id } = useUrlParams()

const props = defineProps({
  story: Object,
  updateStoryState: Function,
  onDelete: Function,
})
const { story, updateStoryState, onDelete } = props
</script>
