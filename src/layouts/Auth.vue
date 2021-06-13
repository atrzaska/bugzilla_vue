<template>
  <AuthHeader />
  <slot></slot>
</template>

<script setup>
import AuthHeader from '@/components/AuthHeader'
import { onMounted } from 'vue'
import API from '@/services/requests'

API.refreshToken()
API.fetchCurrentUser()
document.body.className = 'bg-white'
</script>
