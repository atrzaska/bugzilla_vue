<template>
  <li v-if="show" :class="['page-item', activePageClass(page)]">
    <button @click="goToPage(page)" class="page-link">{{ page }}</button>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({ show: Boolean, page: Number, pagination: Object })
const { show, page, pagination } = props
const { goToPage, activePageClass } = pagination
</script>
