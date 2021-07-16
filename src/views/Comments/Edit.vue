<template>
  <AppLayout>
    <h1 class="mb-4">Edit Comment</h1>
    <Loading v-if="loading" />
    <form v-else @submit.prevent="onSubmit">
      <TextArea
        v-model="data.content"
        :validation="validation"
        id="content"
        label="Content"
        autofocus
      />
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
import useEditForm from '@/hooks/useEditForm'
import { commentSchema as schema } from '@/services/yup'
import API from '@/services/requests'
import QueryParams from '@/services/QueryParams'

const backPath = QueryParams.get('back') || '/dashboard'
const { data, isSubmitting, isValid, loading, onSubmit, validation } =
  useEditForm({
    schema,
    onFetch: (id) => API.fetchComment(id),
    onUpdate: (id, data) => API.updateComment(id, data),
    successToast: (data) => 'Comment updated successfully.',
    successRedirectPath: backPath,
  })
</script>
