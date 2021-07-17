<template>
  <AppLayout>
    <h1 class="mb-4">Edit Task</h1>
    <Loading v-if="loading" />
    <form v-else @submit.prevent="onSubmit">
      <TextArea
        v-model="data.description"
        :validation="validation"
        id="description"
        label="Description"
        autofocus
      />
      <div class="mb-3">
        <div class="form-check">
          <input
            v-model="data.complete"
            id="complete"
            type="checkbox"
            class="form-check-input"
          />
          <label for="complete" class="form-check-label">Complete</label>
          <div v-if="errors.complete" class="invalid-feedback">
            {{ errors.complete }}
          </div>
        </div>
      </div>
      <hr />
      <FormButtons
        :isValid="isValid"
        :isSubmitting="isSubmitting"
        :backLink="backPath"
      />
    </form>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
import Loading from '@/components/Loading'
import FormButtons from '@/components/form/FormButtons'
import TextArea from '@/components/form/TextArea'
import useEditForm from '@/hooks/useEditForm'
import { taskSchema as schema } from '@/services/yup'
import API from '@/services/requests'
import QueryParams from '@/services/QueryParams'
import useUrlParams from '@/hooks/useUrlParams'

const { storyId } = useUrlParams()
const backPath = QueryParams.get('back') || '/dashboard'
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
  schema,
  onFetch: (id) => API.fetchTask(id),
  onUpdate: (id, data) => API.updateTask(id, data),
  successToast: (data) => 'Task updated successfully.',
  successRedirectPath: backPath,
})
</script>
