<template>
  <div class="mb-3">
    <button
      class="btn btn-primary me-2"
      type="submit"
      :disabled="!isValid || isSubmitting"
    >
      <div v-if="isSubmitting">
        <div class="d-flex justify-content-center align-items-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <div v-else>{{ ctaText || 'Save' }}</div>
    </button>
    <router-link
      v-if="backLink"
      class="btn btn-outline-secondary"
      :to="backLink"
    >
      Back
    </router-link>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  isValid: Boolean,
  isSubmitting: Boolean,
  backLink: String,
  ctaText: String,
})

const { isValid, isSubmitting, backLink, ctaText } = toRefs(props)
</script>
