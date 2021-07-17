<template>
  <h5 class="mb-4">Change personal data</h5>
  <Loading v-if="loading" />
  <form v-else @submit.prevent="onSubmit">
    <Field
      v-model="data.name"
      :validation="validation"
      id="name"
      label="Name"
    />
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
          id="newsletterSubscribed"
          type="checkbox"
        />
        <label class="form-check-label" for="newsletterSubscribed">
          Receive news and updates
        </label>
        <div v-if="errors.newsletterSubscribed" class="invalid-feedback">
          {{ errors.newsletterSubscribed }}
        </div>
      </div>
    </div>
    <FormButtons :isValid="isValid" :isSubmitting="isSubmitting" />
  </form>
</template>

<script setup>
import Loading from '@/components/Loading'
import Field from '@/components/form/Field'
import FormButtons from '@/components/form/FormButtons'
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
  validation,
} = useEditForm({
  schema: settingsSchema,
  onFetch: () => API.fetchCurrentUser({ fields: 'name,newsletterSubscribed' }),
  onUpdate: (id, data) => API.updateCurrentUser(data),
  onSuccess: () => window.location.reload(),
})

const handleFileUpload = (e) => (data.value.avatar = e.target.files[0])
</script>
