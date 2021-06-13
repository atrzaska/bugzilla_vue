<template>
  <li class="nav-item">
    <router-link class="nav-link" active-class="active" :to="to">
      <slot></slot>
    </router-link>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'

const { to } = defineProps({ to: String })
</script>
