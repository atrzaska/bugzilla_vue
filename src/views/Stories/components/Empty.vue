<template>
  <h5 class="text-center text-secondary p-4">You don't have any stories yet</h5>
  <div class="text-center">
    <router-link class="btn btn-primary" :to="`/projects/${id}/stories/new`">
      Create story
    </router-link>
  </div>
</template>

<script setup>
import useParams from '@/hooks/useParams'

const { id } = useParams()
</script>
