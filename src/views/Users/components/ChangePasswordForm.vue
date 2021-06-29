<template>
  <Loading v-if="loading" />
  <form v-else @submit.prevent="onSubmit">
    <div class="mb-3">
      <label class="form-label" for="currentPassword">Current password</label>
      <input
        v-model="data.currentPassword"
        :class="['form-control', invalidFieldClass('currentPassword')]"
        @input="validateField('currentPassword')"
        id="currentPassword"
        placeholder="Current password"
        type="password"
      />
      <div v-if="errors.currentPassword" class="invalid-feedback">
        {{ errors.currentPassword }}
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label" for="newPassword">New password</label>
      <input
        v-model="data.password"
        :class="['form-control', invalidFieldClass('password')]"
        @input="validateField('password')"
        id="newPassword"
        placeholder="New password"
        type="password"
      />
      <div v-if="errors.password" class="invalid-feedback">
        {{ errors.password }}
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label" for="passwordConfirmation">
        Confirm password
      </label>
      <input
        v-model="data.passwordConfirmation"
        :class="['form-control', invalidFieldClass('passwordConfirmation')]"
        @input="validateField('passwordConfirmation')"
        id="passwordConfirmation"
        placeholder="Confirm new password"
        type="password"
      />
      <div v-if="errors.passwordConfirmation" class="invalid-feedback">
        {{ errors.passwordConfirmation }}
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
        <div v-else>Change password</div>
      </button>
    </div>
  </form>
</template>

<script setup>
import Loading from '@/components/Loading'
import useEditForm from '@/hooks/useEditForm'
import { changePasswordSchema } from '@/services/yup'
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
  schema: changePasswordSchema,
  onFetch: () => Promise.resolve({ data: {} }),
  onUpdate: (id, data) => API.updatePassword(data),
  successToast: (data) => 'Password updated successfully.',
})
</script>
