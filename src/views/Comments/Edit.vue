<template>
  <AppLayout>
    <h1 class="mb-4">Edit Comment</h1>
    <Loading v-if="loading" />
    <form v-else @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label" for="content">Content</label>
        <textarea
          v-model="data.content"
          :class="['form-control', invalidFieldClass('content')]"
          @input="validateField('content')"
          id="content"
          placeholder="Content"
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
import AppLayout from '@/layouts/App'
import Loading from '@/components/Loading'
import FormButtons from '@/components/form/FormButtons'
import useEditForm from '@/hooks/useEditForm'
import { commentSchema as schema } from '@/services/yup'
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
} = useEditForm({
  schema,
  onFetch: (id) => API.fetchComment(id),
  onUpdate: (id, data) => API.updateComment(id, data),
  successToast: (data) => 'Comment updated successfully.',
  successRedirectPath: backPath,
})
</script>
