<template>
  <div :class="`d-flex justify-content-${justify} align-items-${align}`">
    <Loading />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  justify: { type: String, default: 'center' },
  align: { type: String, default: 'center' },
})
</script>
