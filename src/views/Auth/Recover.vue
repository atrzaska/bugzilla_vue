<template>
  <AuthLayout>
    <form @submit.prevent="onSubmit" class="form-signin bg-white p-4">
      <h3 class="mb-3 font-weight-normal">Password recovery</h3>
      <p class="mb-4 text-secondary">
        Enter the email you're using for your account.
      </p>
      <div class="mb-3">
        <input
          v-model="data.email"
          :class="['form-control', invalidFieldClass('email')]"
          @input="validateField('email')"
          id="email"
          placeholder="Email address"
          type="email"
        />
        <div v-if="errors.email" class="invalid-feedback">
          {{ errors.email }}
        </div>
      </div>

      <div class="mb-3">
        <button
          :disabled="!isValid || isSubmitting"
          class="btn btn-lg btn-primary w-100"
          type="submit"
        >
          <div v-if="isSubmitting">
            <div class="d-flex justify-content-center align-items-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <div v-else>Continue</div>
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/Auth'
import useNewForm from '@/hooks/useNewForm'
import { recoverPasswordSchema as schema } from '@/services/yup'
import API from '@/services/requests'

const {
  data,
  errors,
  isValid,
  isSubmitting,
  onSubmit,
  invalidFieldClass,
  validateField,
} = useNewForm({
  schema,
  onCreate: (data) => API.createRecovery(data),
  successRedirectPath: '/recover/success',
})
</script>
