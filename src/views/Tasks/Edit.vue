<template>
  <AppLayout>
    <h1 class="mb-4">Edit Task</h1>
    <Loading v-if="loading" />
    <form v-else @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label" for="description">Description</label>
        <textarea
          v-model="data.description"
          :class="['form-control', invalidFieldClass('description')]"
          @input="validateField('description', data.description)"
          id="description"
          placeholder="Description"
        />
        <div v-if="errors.description" class="invalid-feedback">
          {{ errors.description }}
        </div>
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input
            v-model="data.complete"
            id="complete"
            type="checkbox"
            class="form-check-input"
          />
          <label for="complete" class="form-check-label">Complete</label>
          <div v-if="errors.content" class="invalid-feedback">
            {{ errors.complete }}
          </div>
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
import Loading from '@/components/Loading'
import useEditForm from '@/hooks/useEditForm'
import { taskSchema as schema } from '@/helpers/yup'
import API from '@/services/requests'
import QueryParams from '@/helpers/QueryParams'
import useUrlParams from '@/hooks/useUrlParams'

const { storyId } = useUrlParams()
const backPath = QueryParams.get('back') || '/dashboard'
const {
  data,
  errors,
  invalidFieldClass,
  isSubmitting,
  isValid,
  loading,
  onSubmit,
  validateField,
} = useEditForm({
  schema,
  onFetch: (id) => API.fetchTask(id),
  onUpdate: (id, data) => API.updateTask(id, data),
  successToast: (data) => 'Task updated successfully.',
  successRedirectPath: backPath,
})
</script>
