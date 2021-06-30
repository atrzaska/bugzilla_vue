<template>
  <AppLayout>
    <h1 class="mb-4">New Project</h1>
    <form @submit.prevent="onSubmit">
      <Field
        v-model="data.name"
        :validation="validation"
        id="name"
        label="Name"
        autofocus
      />
      <hr />
      <FormButtons
        :isValid="isValid"
        :isSubmitting="isSubmitting"
        backLink="/projects"
      />
    </form>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
import useNewForm from '@/hooks/useNewForm'
import Field from '@/components/form/Field'
import FormButtons from '@/components/form/FormButtons'
import { projectSchema as schema } from '@/services/yup'
import API from '@/services/requests'

const { data, isValid, isSubmitting, onSubmit, validation } = useNewForm({
  schema,
  onCreate: (data) => API.createProject(data),
  successToast: (data) => `Project ${data.name} created successfully.`,
  successRedirectPath: '/projects',
})
</script>
