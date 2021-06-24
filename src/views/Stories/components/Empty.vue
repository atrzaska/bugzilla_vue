<template>
  <h1 class="text-center text-secondary p-4">You don't have any stories yet</h1>
  <div class="text-center">
    <router-link class="btn btn-primary" :to="`/projects/${id}/stories/new`">
      Create story
    </router-link>
  </div>
</template>

<script setup>
import useUrlParams from '@/use/useUrlParams'

const { id } = useUrlParams()
</script>
