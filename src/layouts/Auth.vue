<template>
  <AuthHeader />
  <div class="d-flex justify-content-center">
    <slot></slot>
  </div>
</template>

<script setup>
import AuthHeader from '@/components/AuthHeader'
import { onMounted } from 'vue'
document.body.className = 'bg-white'
</script>
