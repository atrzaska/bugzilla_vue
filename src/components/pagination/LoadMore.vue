<template>
  <div
    v-if="hasNextPage"
    class="d-flex justify-content-center align-items-center"
  >
    <a href="" @click.prevent="loadMore()">Load More</a>
  </div>
</template>

<script setup>
// TODO: unused file
import { defineProps } from 'vue'

const props = defineProps({ pagination: Object })

const { pagination } = props
const { hasNextPage, loadMore } = pagination
</script>
