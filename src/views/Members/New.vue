<template>
  <AppLayout>
    <h1 class="mb-4">Invite member</h1>
    <form @submit.prevent="onSubmit">
      <Field
        v-model="data.email"
        :validation="validation"
        id="email"
        label="Email"
        autofocus
      />
      <hr />
      <FormButtons
        :isValid="isValid"
        :isSubmitting="isSubmitting"
        :backLink="`/projects/${id}/members`"
      />
    </form>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import AppLayout from '@/layouts/App'
import Field from '@/components/form/Field'
import FormButtons from '@/components/form/FormButtons'
import useNewForm from '@/hooks/useNewForm'
import { newMemberSchema as schema } from '@/services/yup'
import API from '@/services/requests'
import useUrlParams from '@/hooks/useUrlParams'

const { id } = useUrlParams()
const data = ref({
  projectId: parseInt(id),
})
const { isSubmitting, isValid, onSubmit, validation } = useNewForm({
  data,
  schema,
  onCreate: (data) => API.createInvite(data),
  successToast: (data) => `${data.email} has been invited to the project.`,
  successRedirectPath: `/projects/${id}/members`,
})
</script>
