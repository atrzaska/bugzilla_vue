<template>
  <AuthHeader />
  <slot></slot>
</template>

<script setup>
import AuthHeader from '@/components/AuthHeader'
import { onMounted } from 'vue'
document.body.className = 'bg-white'
</script>
