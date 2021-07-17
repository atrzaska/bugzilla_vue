<template>
  <AuthLayout>
    <Loading v-if="loading" />
    <form v-else @submit.prevent="onSubmit" class="form-signin bg-white p-4">
      <h3 class="mb-3 font-weight-normal">Password Recovery</h3>
      <p class="mb-4 text-secondary">Enter your new password.</p>
      <div class="mb-3">
        <input
          v-model="data.password"
          :class="['form-control', invalidFieldClass('password')]"
          @input="validateField('password')"
          id="password"
          placeholder="Password"
          type="password"
        />
        <div v-if="errors.password" class="invalid-feedback">
          {{ errors.password }}
        </div>
      </div>
      <div class="mb-3">
        <input
          v-model="data.passwordConfirmation"
          :class="['form-control', invalidFieldClass('passwordConfirmation')]"
          @input="validateField('passwordConfirmation')"
          id="passwordConfirmation"
          placeholder="Confirm Password"
          type="password"
        />
        <div v-if="errors.passwordConfirmation" class="invalid-feedback">
          {{ errors.passwordConfirmation }}
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
          <div v-else>Reset Password</div>
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import AuthLayout from '@/layouts/Auth'
import Loading from '@/components/Loading'
import useEditForm from '@/hooks/useEditForm'
import { resetPasswordSchema as schema } from '@/services/yup'
import API from '@/services/requests'

const router = useRouter()
const {
  data,
  loading,
  errors,
  isValid,
  isSubmitting,
  onSubmit,
  invalidFieldClass,
  validateField,
} = useEditForm({
  schema,
  onFetch: (id) => API.fetchResetPassword(id),
  onFetchError: () => {
    window.Toast.error('Reset password link is invalid or it has expired.')
    router.push('/')
  },
  onUpdate: (id, data) => API.updateResetPassword(id, data),
  successToast: () => 'Password reset successfully.',
  successRedirectPath: '/signin',
})
</script>
