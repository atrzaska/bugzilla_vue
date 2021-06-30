<template>
  <AppLayout>
    <h1 class="mb-4">Edit Project</h1>
    <Loading v-if="loading" />
    <form v-else @submit.prevent="onSubmit">
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
import Loading from '@/components/Loading'
import Field from '@/components/form/Field'
import FormButtons from '@/components/form/FormButtons'
import useEditForm from '@/hooks/useEditForm'
import { projectSchema as schema } from '@/services/yup'
import API from '@/services/requests'

const { data, isSubmitting, isValid, loading, onSubmit, validation } =
  useEditForm({
    schema,
    onFetch: (id) => API.fetchProject(id),
    onUpdate: (id, data) => API.updateProject(id, data),
    successToast: (data) => `Project ${data.name} updated successfully.`,
    successRedirectPath: '/projects',
  })
</script>
