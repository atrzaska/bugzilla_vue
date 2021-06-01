<template>
  <AuthHeader />
  <div class="container">
    <div class="row">
      <div class="col-12">
        <slot></slot>
        <div class="text-center my-4">
          <a class="btn btn-primary btn-lg" :href="salesUrl"> Contact sales </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AuthHeader from '@/components/AuthHeader'

onMounted(() => (document.body.className = 'bg-white'))

const appHost = 'bugzilla.nexxy.net'
const appUrl = `https://${appHost}`
const salesUrl = `mailto://sales@${appHost}`
</script>
