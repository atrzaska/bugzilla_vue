<template>
  <AppLayout>
    <h1 class="mb-4">New Project</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label" for="name">Name</label>
        <input
          v-model="data.name"
          :class="['form-control', invalidFieldClass('name')]"
          @input="validateField('name', data.name)"
          id="name"
          placeholder="Name"
          type="text"
          v-autofocus
        />
        <div v-if="errors.name" class="invalid-feedback">
          {{ errors.name }}
        </div>
      </div>
      <hr />
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
        <router-link class="btn btn-outline-secondary" to="/projects">
          Back
        </router-link>
      </div>
    </form>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
import useNewForm from '@/hooks/useNewForm'
import { projectSchema as schema } from '@/helpers/yup'
import API from '@/services/requests'

const {
  data,
  errors,
  invalidFieldClass,
  isSubmitting,
  isValid,
  onSubmit,
  validateField,
} = useNewForm({
  schema,
  onCreate: (data) => API.createProject(data),
  successToast: (data) => `Project ${data.name} created successfully.`,
  successRedirectPath: '/projects',
})
</script>
