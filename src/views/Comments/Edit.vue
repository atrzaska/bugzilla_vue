<template>
  <AppLayout>
    <h1 class="mb-4">Edit Comment</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label" for="content">Content</label>
        <textarea
          v-model="data.content"
          :class="['form-control', invalidFieldClass('content')]"
          @input="validateField('content', data.content)"
          id="content"
          placeholder="Content"
        />
        <div v-if="errors.content" class="invalid-feedback">
          {{ errors.content }}
        </div>
      </div>
      <div class="mb-3">
        <button
          class="btn btn-primary me-2"
          type="submit"
          :disabled="!isValid || isSubmitting"
        >
          <div v-if="isSubmitting">
            <div class="d-flex justify-content-center align-items-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div v-else>Save</div>
        </button>
        <router-link class="btn btn-outline-secondary" :to="backPath">
          Back
        </router-link>
      </div>
    </form>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
</script>
