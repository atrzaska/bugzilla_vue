<template>
  <AppLayout>
    <h1 class="mb-4">New Comment</h1>
    <form @submit.prevent="onSubmit">
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
import { ref } from 'vue'
import AppLayout from '@/layouts/App'
import FormButtons from '@/components/form/FormButtons'
import TextArea from '@/components/form/TextArea'
import useNewForm from '@/hooks/useNewForm'
import { commentSchema as schema } from '@/services/yup'
import API from '@/services/requests'
import QueryParams from '@/services/QueryParams'
import useParams from '@/hooks/useParams'

const { storyId } = useParams()
const data = ref({
  storyId: parseInt(storyId),
  content: '',
})
const backPath = QueryParams.get('back') || '/dashboard'
const { errors, isSubmitting, isValid, onSubmit, validation } = useNewForm({
  data,
  schema,
  onCreate: (data) => API.createComment(data),
  successToast: (data) => 'Comment created successfully.',
  successRedirectPath: backPath,
})
</script>
