<template>
  <AppLayout>
    <h1 class="mb-4">Change role of {{ data.name }}</h1>
    <p class="text-secondary">Select a new role</p>
    <Loading v-if="loading" />
    <form v-else @submit.prevent="onSubmit">
      <div class="mb-3 row">
        <label class="col-sm-2 form-label">Role</label>
        <div class="col-sm-10 d-flex flex-column">
          <div class="form-check">
            <input
              v-model="data.role"
              class="form-check-input"
              id="role_member"
              type="radio"
              value="member"
              required
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
              type="radio"
              value="owner"
              required
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
      <div class="mb-3">
        <button
          class="btn btn-primary me-2"
          type="submit"
          :disabled="!isValid || isSubmitting"
        >
          <div v-if="isSubmitting">
            <div class="d-flex justify-content-center align-items-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div v-else>Change role</div>
        </button>
        <router-link
          class="btn btn-outline-secondary"
          :to="`/projects/${id}/members`"
        >
          Back
        </router-link>
      </div>
    </form>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
import Loading from '@/components/Loading'
import useEditForm from '@/use/useEditForm'
import { editMemberSchema as schema } from '@/helpers/yup'
import API from '@/services/requests'
import useUrlParams from '@/use/useUrlParams'

const { id, storyId } = useUrlParams()
const {
  data,
  loading,
  errors,
  invalidFieldClass,
  validateField,
  isValid,
  isSubmitting,
  onSubmit,
} = useEditForm({
  id: storyId,
  schema,
  onFetch: (id) => API.fetchMember(id),
  onUpdate: (id, data) => API.updateMember(id, data),
  successToast: (data) => `User ${data.name} updated successfully.`,
  successRedirectPath: `/projects/${id}/members`,
})
</script>
