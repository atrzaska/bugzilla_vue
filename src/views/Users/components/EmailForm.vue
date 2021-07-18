<template>
  <Loading v-if="loading" />
  <form v-else @submit.prevent="onSubmit">
    <Field
      v-model="data.email"
      :validation="validation"
      id="email"
      label="Email"
    />
    <Field
      v-model="data.password"
      :validation="validation"
      id="password"
      label="Current password"
    />
    <FormButtons
      :isValid="isValid"
      :isSubmitting="isSubmitting"
      ctaText="Change email"
    />
  </form>
</template>

<script setup>
import Loading from '@/components/Loading'
import Field from '@/components/form/Field'
import FormButtons from '@/components/form/FormButtons'
import useEditForm from '@/hooks/useEditForm'
import { changeEmailSchema } from '@/services/yup'
import API from '@/services/requests'

const { data, errors, isSubmitting, isValid, loading, onSubmit, validation } =
  useEditForm({
    schema: changeEmailSchema,
    onFetch: () => API.fetchCurrentUser({ fields: 'email' }),
    onUpdate: (id, data) => API.updateEmail(data),
    successToast: (data) => 'Email updated successfully.',
  })
</script>
