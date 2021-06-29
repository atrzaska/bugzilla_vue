<template>
  <AppLayout>
    <h1 class="mb-4">New Comment</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label" for="content">Content</label>
        <textarea
          v-model="data.content"
          :class="['form-control', invalidFieldClass('content')]"
          @input="validateField('content')"
          id="content"
          placeholder="Content"
          v-autofocus
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
import { ref } from 'vue'
import AppLayout from '@/layouts/App'
import useNewForm from '@/hooks/useNewForm'
import { commentSchema as schema } from '@/helpers/yup'
import API from '@/services/requests'
import QueryParams from '@/helpers/QueryParams'
import useUrlParams from '@/hooks/useUrlParams'

const { storyId } = useUrlParams()
const data = ref({
  storyId: parseInt(storyId),
  content: '',
})
const backPath = QueryParams.get('back') || '/dashboard'
const {
  errors,
  invalidFieldClass,
  isSubmitting,
  isValid,
  onSubmit,
  validateField,
} = useNewForm({
  data,
  schema,
  onCreate: (data) => API.createComment(data),
  successToast: (data) => 'Comment created successfully.',
  successRedirectPath: backPath,
})
</script>
