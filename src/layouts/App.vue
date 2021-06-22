<template>
  <Header />
  <Sidebar />
  <div class="wrapper">
    <div class="pt-4">
      <div class="container px-4">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { onMounted } from 'vue'
import API from '@/services/requests'

API.refreshToken()

onMounted(() => (document.body.className = 'bg-light'))
</script>
