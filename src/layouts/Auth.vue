<template>
  <AuthHeader />
  <slot></slot>
</template>

<script setup>
import AuthHeader from '@/components/AuthHeader'
import { onMounted } from 'vue'
import { fetchCurrentUser, refreshToken } from '@/services/requests'

refreshToken()
fetchCurrentUser()
document.body.className = 'bg-white'
</script>
