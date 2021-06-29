<template>
  <h5 class="mb-4">Change email</h5>
  <Loading v-if="loading" />
  <form v-else @submit.prevent="onSubmit">
    <div class="mb-3">
      <label class="form-label" for="email">Email</label>
      <input
        v-model="data.email"
        :class="['form-control', invalidFieldClass('email')]"
        @input="validateField('email')"
        id="email"
        placeholder="Email"
        type="email"
      />
      <div v-if="errors.email" class="invalid-feedback">
        {{ errors.email }}
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label" for="password">Current password</label>
      <input
        v-model="data.password"
        :class="['form-control', invalidFieldClass('password')]"
        @input="validateField('password')"
        id="password"
        placeholder="Current password"
        type="password"
      />
      <div v-if="errors.password" class="invalid-feedback">
        {{ errors.password }}
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
        <div v-else>Change email</div>
      </button>
    </div>
  </form>
</template>

<script setup>
import Loading from '@/components/Loading'
import useEditForm from '@/hooks/useEditForm'
import { changeEmailSchema } from '@/helpers/yup'
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
  schema: changeEmailSchema,
  onFetch: () => API.fetchCurrentUser({ fields: 'email' }),
  onUpdate: (id, data) => API.updateEmail(data),
  successToast: (data) => 'Email updated successfully.',
})
</script>
