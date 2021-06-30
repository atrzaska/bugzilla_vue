<template>
  <AppLayout>
    <h1 class="mb-4">New Comment</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label" for="content">Content</label>
        <textarea
          v-model="data.content"
          :class="['form-control', invalidFieldClass('content')]"
          @input="validateField('content')"
          id="content"
          placeholder="Content"
          autofocus
        />
        <div v-if="errors.content" class="invalid-feedback">
          {{ errors.content }}
        </div>
      </div>
      <FormButtons
        :isValid="isValid"
        :isSubmitting="isSubmitting"
        :backLink="backPath"
      />
    </form>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import AppLayout from '@/layouts/App'
import FormButtons from '@/components/form/FormButtons'
import useNewForm from '@/hooks/useNewForm'
import { commentSchema as schema } from '@/services/yup'
import API from '@/services/requests'
import QueryParams from '@/services/QueryParams'
import useUrlParams from '@/hooks/useUrlParams'

const { storyId } = useUrlParams()
const data = ref({
  storyId: parseInt(storyId),
  content: '',
})
const backPath = QueryParams.get('back') || '/dashboard'
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
  onCreate: (data) => API.createComment(data),
  successToast: (data) => 'Comment created successfully.',
  successRedirectPath: backPath,
})
</script>
