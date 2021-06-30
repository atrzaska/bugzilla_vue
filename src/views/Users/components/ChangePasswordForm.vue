<template>
  <Loading v-if="loading" />
  <form v-else @submit.prevent="onSubmit">
    <Field
      v-model="data.currentPassword"
      :validation="validation"
      id="currentPassword"
      label="Current password"
      type="password"
    />
    <Field
      v-model="data.password"
      :validation="validation"
      id="newPassword"
      field="password"
      label="New password"
      type="password"
    />
    <Field
      v-model="data.passwordConfirmation"
      :validation="validation"
      id="passwordConfirmation"
      label="Confirm new password"
      type="password"
    />
    <FormButtons
      :isValid="isValid"
      :isSubmitting="isSubmitting"
      ctaText="Change password"
    />
  </form>
</template>

<script setup>
import Loading from '@/components/Loading'
import Field from '@/components/form/Field'
import FormButtons from '@/components/form/FormButtons'
import useEditForm from '@/hooks/useEditForm'
import { changePasswordSchema } from '@/services/yup'
import API from '@/services/requests'

const {
  data,
  errors,
  isSubmitting,
  isValid,
  loading,
  onSubmit,
  validation,
} = useEditForm({
  schema: changePasswordSchema,
  onFetch: () => Promise.resolve({ data: {} }),
  onUpdate: (id, data) => API.updatePassword(data),
  successToast: (data) => 'Password updated successfully.',
})
</script>
