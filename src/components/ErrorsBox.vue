<template>
  <div v-if="fullErrors.length" class="alert alert-danger">
    <p>Please correct the following error(s):</p>
    <ul>
      <li v-for="error in fullErrors" :key="error">{{ error }}</li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({ validation: Object })
const { validation } = props
const { fullErrors } = validation
</script>
