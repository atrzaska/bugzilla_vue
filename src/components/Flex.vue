<template>
  <div :class="`d-flex justify-content-${justify} align-items-${align}`">
    <slot />
  </div>
</template>

<script setup>
// TODO: unused file
import { defineProps } from 'vue'

const props = defineProps({
  justify: { type: String, default: 'center' },
  align: { type: String, default: 'center' },
})
</script>
