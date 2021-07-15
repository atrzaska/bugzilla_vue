<template>
  <div class="btn-group">
    <div
      v-if="story.state === 'unstarted'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'started')"
    >
      Start
    </div>
    <div
      v-if="story.state === 'started'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'finished')"
    >
      Finish
    </div>
    <div
      v-if="story.state === 'finished'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'delivered')"
    >
      Deliver
    </div>
    <div
      v-if="story.state === 'delivered'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'accepted')"
    >
      Accept
    </div>
    <div
      v-if="story.state === 'delivered'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'rejected')"
    >
      Reject
    </div>
    <div
      v-if="story.state === 'rejected'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'unstarted')"
    >
      Restart
    </div>
    <div
      v-if="story.state === 'accepted'"
      class="btn btn-outline-secondary d-flex align-items-center"
      @click="updateStoryState(story, 'unstarted')"
    >
      Restart
    </div>
    <div
      class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown"
    >
      <img :src="threeDots" alt="pic" />
    </div>
    <div class="dropdown-menu dropdown-menu-end">
      <router-link
        class="dropdown-item"
        :to="`/projects/${id}/stories/${story.id}/edit`"
      >
        Edit
      </router-link>
      <div class="dropdown-divider" />
      <div class="dropdown-item" @click="onDelete(story)">Remove</div>
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
