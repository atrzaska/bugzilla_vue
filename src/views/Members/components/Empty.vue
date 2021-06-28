<template>
  <h1 class="text-center text-secondary p-4">
    This project does not have any members yet
  </h1>
  <div class="text-center">
    <router-link class="btn btn-primary" :to="`/projects/${id}/members`">
      Create member
    </router-link>
  </div>
</template>

<script setup>
import useUrlParams from '@/hooks/useUrlParams'

const { id } = useUrlParams()
</script>
