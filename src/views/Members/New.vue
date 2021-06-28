<template>
  <AppLayout>
    <h1 class="mb-4">Invite member</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label" for="email">Email</label>
        <input
          v-model="data.email"
          :class="['form-control', invalidFieldClass('email')]"
          @input="validateField('email', data.email)"
          id="email"
          type="text"
        />
        <div v-if="errors.email" class="invalid-feedback">
          {{ errors.email }}
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
          <div v-else>Save</div>
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
import { ref } from 'vue'
import AppLayout from '@/layouts/App'
import useNewForm from '@/hooks/useNewForm'
import { newMemberSchema as schema } from '@/helpers/yup'
import API from '@/services/requests'
import useUrlParams from '@/hooks/useUrlParams'

const { id } = useUrlParams()
const data = ref({
  projectId: parseInt(id),
})
const {
  errors,
  invalidFieldClass,
  isSubmitting,
  isValid,
  onSubmit,
  validateField,
} = useNewForm({
  data,
  schema,
  onCreate: (data) => API.createInvite(data),
  successToast: (data) => `${data.email} has been invited to the project.`,
  successRedirectPath: `/projects/${id}/members`,
})
</script>
