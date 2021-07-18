<template>
  <AppLayout>
    <h1 class="mb-4">New Story</h1>
    <form @submit.prevent="onSubmit">
      <Field
        v-model="data.name"
        :validation="validation"
        id="name"
        label="Name"
        autofocus
      />
      <Field
        v-model="data.description"
        :validation="validation"
        id="description"
        label="Description"
      />
      <div class="mb-3">
        <label class="form-label" for="kind">Story type</label>
        <select
          v-model="data.kind"
          :class="['form-select', invalidFieldClass('kind')]"
          @input="validateField('kind')"
          id="kind"
        >
          <option value="feature">Feature</option>
          <option value="bug">Bug</option>
          <option value="chore">Chore</option>
          <option value="release">Release</option>
        </select>
        <div v-if="errors.kind" class="invalid-feedback">
          {{ errors.kind }}
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="container">Container</label>
        <select
          v-model="data.container"
          :class="['form-select', invalidFieldClass('container')]"
          @input="validateField('container')"
          id="container"
        >
          <option value="icebox">Icebox</option>
          <option value="backlog">Backlog</option>
        </select>
        <div v-if="errors.container" class="invalid-feedback">
          {{ errors.container }}
        </div>
      </div>
      <hr />
      <FormButtons
        :isValid="isValid"
        :isSubmitting="isSubmitting"
        :backLink="`/projects/${id}/current`"
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
import { storySchema as schema } from '@/services/yup'
import API from '@/services/requests'
import useParams from '@/hooks/useParams'

const { id } = useParams()
const data = ref({
  projectId: parseInt(id),
  container: 'icebox',
  kind: 'feature',
  state: 'unstarted',
})
const {
  errors,
  invalidFieldClass,
  isSubmitting,
  isValid,
  onSubmit,
  validateField,
  validation,
} = useNewForm({
  data,
  schema,
  onCreate: (data) => API.createStory(data),
  successToast: (data) => `Story ${data.name} created successfully.`,
  successRedirectPath: `/projects/${id}/current`,
})
</script>
