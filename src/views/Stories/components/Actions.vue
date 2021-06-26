<template>
  <div class="btn-group">
    <a
      v-if="story.state === 'unstarted'"
      class="btn btn-outline-secondary d-flex align-items-center"
      href="#"
      @click.prevent="updateStoryState(story, 'started')"
    >
      Start
    </a>
    <a
      v-if="story.state === 'started'"
      class="btn btn-outline-secondary d-flex align-items-center"
      href="#"
      @click.prevent="updateStoryState(story, 'finished')"
    >
      Finish
    </a>
    <a
      v-if="story.state === 'finished'"
      class="btn btn-outline-secondary d-flex align-items-center"
      href="#"
      @click.prevent="updateStoryState(story, 'delivered')"
    >
      Deliver
    </a>
    <a
      v-if="story.state === 'delivered'"
      class="btn btn-outline-secondary d-flex align-items-center"
      href="#"
      @click.prevent="updateStoryState(story, 'accepted')"
    >
      Accept
    </a>
    <a
      v-if="story.state === 'delivered'"
      class="btn btn-outline-secondary d-flex align-items-center"
      href="#"
      @click.prevent="updateStoryState(story, 'rejected')"
    >
      Reject
    </a>
    <a
      v-if="story.state === 'rejected'"
      class="btn btn-outline-secondary d-flex align-items-center"
      href="#"
      @click.prevent="updateStoryState(story, 'unstarted')"
    >
      Restart
    </a>
    <a
      v-if="story.state === 'accepted'"
      class="btn btn-outline-secondary d-flex align-items-center"
      href="#"
      @click.prevent="updateStoryState(story, 'unstarted')"
    >
      Restart
    </a>
    <a
      class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
      data-bs-toggle="dropdown"
    >
      <img :src="threeDots" />
    </a>
    <div class="dropdown-menu dropdown-menu-end">
      <router-link
        class="dropdown-item"
        :to="`/projects/${id}/stories/${story.id}/edit`"
      >
        Edit
      </router-link>
      <div class="dropdown-divider" />
      <a class="dropdown-item" href="#" @click.prevent="onDelete(story)">
        Remove
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import useUrlParams from '@/use/useUrlParams'
import threeDots from '@/assets/threeDots.svg'

const { id } = useUrlParams()

const props = defineProps({
  story: Object,
  updateStoryState: Function,
  onDelete: Function,
})
const { story, updateStoryState, onDelete } = props
</script>
