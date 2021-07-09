<template>
  <Header />
  <Sidebar />
  <div class="wrapper">
    <div class="pt-4">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <slot />
              </div>
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

onMounted(() => (document.body.className = 'bg-light'))
</script>
