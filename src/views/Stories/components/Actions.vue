<template>
  <div class="btn-group">
    <button
      v-if="story.state === 'unstarted'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'started')"
    >
      Start
    </button>
    <button
      v-if="story.state === 'started'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'finished')"
    >
      Finish
    </button>
    <button
      v-if="story.state === 'finished'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'delivered')"
    >
      Deliver
    </button>
    <button
      v-if="story.state === 'delivered'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'accepted')"
    >
      Accept
    </button>
    <button
      v-if="story.state === 'delivered'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'rejected')"
    >
      Reject
    </button>
    <button
      v-if="story.state === 'rejected'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'unstarted')"
    >
      Restart
    </button>
    <button
      v-if="story.state === 'accepted'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'unstarted')"
    >
      Restart
    </button>
    <button
      class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown"
    >
      <img :src="threeDots" alt="pic" />
    </button>
    <div class="dropdown-menu dropdown-menu-end">
      <router-link
        class="dropdown-item"
        :to="`/projects/${id}/stories/${story.id}/edit`"
      >
        Edit
      </router-link>
      <div class="dropdown-divider" />
      <button class="dropdown-item" @click="onDelete(story)">Remove</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import useUrlParams from '@/hooks/useUrlParams'
import threeDots from '@/assets/threeDots.svg'

const { id } = useUrlParams()

const props = defineProps({
  story: Object,
  updateStoryState: Function,
  onDelete: Function,
})
const { story, updateStoryState, onDelete } = props
</script>
