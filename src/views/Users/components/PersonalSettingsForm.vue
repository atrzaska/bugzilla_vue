<template>
  <h5 class="mb-4">Change personal data</h5>
  <Loading v-if="loading" />
  <form v-else @submit.prevent="onSubmit">
    <div class="mb-3">
      <label class="form-label" for="name">Name</label>
      <input
        v-model="data.name"
        :class="['form-control', invalidFieldClass('name')]"
        @input="validateField('name')"
        id="name"
        placeholder="Name"
        type="text"
      />
      <div v-if="errors.name" class="invalid-feedback">
        {{ errors.name }}
      </div>
    </div>
    <div class="mb-3">
      <label for="avatar" class="form-label">Avatar</label>
      <input
        @change="handleFileUpload"
        class="form-control"
        type="file"
        id="avatar"
      />
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input
          v-model="data.newsletterSubscribed"
          @change="validateField('newsletterSubscribed')"
          :class="[
            'form-check-input',
            invalidFieldClass('newsletterSubscribed'),
          ]"
          id="receive_news_and_updates"
          type="checkbox"
        />
        <label class="form-check-label" for="receive_news_and_updates">
          Receive news and updates
        </label>
        <div v-if="errors.newsletterSubscribed" class="invalid-feedback">
          {{ errors.newsletterSubscribed }}
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
    </div>
  </form>
</template>

<script setup>
import Loading from '@/components/Loading'
import useEditForm from '@/hooks/useEditForm'
import { settingsSchema } from '@/services/yup'
import API from '@/services/requests'

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
  schema: settingsSchema,
  onFetch: () => API.fetchCurrentUser({ fields: 'name,newsletterSubscribed' }),
  onUpdate: (id, data) => API.updateCurrentUser(data),
  onSuccess: () => window.location.reload(),
})

const handleFileUpload = (e) => (data.value.avatar = e.target.files[0])
</script>
