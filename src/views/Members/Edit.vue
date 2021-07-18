<template>
  <AppLayout>
    <h1 class="mb-4">Change role of {{ data.name }}</h1>
    <p class="text-secondary">Select a new role</p>
    <Loading v-if="loading" />
    <form v-else @submit.prevent="onSubmit">
      <div class="mb-3">
        <div class="d-flex flex-column">
          <div class="form-check">
            <input
              v-model="data.role"
              class="form-check-input"
              id="role_member"
              name="role"
              type="radio"
              value="member"
            />
            <label class="form-check-label mb-3" for="role_member">
              <b>Member</b>
              <div class="text-secondary">
                Has full administrative access to the entire project.
              </div>
            </label>
          </div>
          <div class="form-check">
            <input
              v-model="data.role"
              class="form-check-input"
              id="role_owner"
              name="role"
              type="radio"
              value="owner"
            />
            <label class="form-check-label" for="role_owner">
              <b>Owner</b>
              <div class="text-secondary">
                Can see every member and create new stories.
              </div>
            </label>
          </div>
        </div>
      </div>
      <hr />
      <FormButtons
        ctaText="Change role"
        :isValid="isValid"
        :isSubmitting="isSubmitting"
        :backLink="`/projects/${id}/members`"
      />
    </form>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
import Loading from '@/components/Loading'
import FormButtons from '@/components/form/FormButtons'
import useEditForm from '@/hooks/useEditForm'
import { editMemberSchema as schema } from '@/services/yup'
import API from '@/services/requests'
import useParams from '@/hooks/useParams'

const { id, storyId } = useParams()
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
  id: storyId,
  schema,
  onFetch: (id) => API.fetchMember(id),
  onUpdate: (id, data) => API.updateMember(id, data),
  successToast: (data) => `User ${data.name} updated successfully.`,
  successRedirectPath: `/projects/${id}/members`,
})
</script>
