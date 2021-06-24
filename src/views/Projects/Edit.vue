<template>
  <AppLayout>
    <h1 class="mb-4">Edit Project</h1>
    <Loading v-if="loading" />
    <form v-else @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="projectName">Name</label>
        <input
          v-model="data.name"
          :class="['form-control', invalidFieldClass('name')]"
          id="projectName"
          placeholder="Name"
          type="text"
          required
          @input="validateField('name', data.name)"
        />
        <div v-if="errors.name" class="invalid-feedback">
          {{ errors.name }}
        </div>
      </div>
      <hr />
      <div class="form-group">
        <button
          class="btn btn-primary mr-2"
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
        <router-link class="btn btn-outline-secondary" to="/projects">
          Back
        </router-link>
      </div>
    </form>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppLayout from '@/layouts/App'
import Loading from '@/components/Loading'
import useForm from '@/use/useForm'
import useFrontendValidation from '@/use/useFrontendValidation'
import useObject from '@/use/useObject'
import useUrlParams from '@/use/useUrlParams'
import { projectSchema as schema } from '@/helpers/yup'
import API from '@/services/requests'

const data = ref({})
const errors = ref({})
const { isSubmitting, submit } = useForm({ data, errors })
const validation = useFrontendValidation({ errors, schema })
const { isValid, invalidFieldClass, validateField, validateForm } = validation
const router = useRouter()
const { setObject, loading } = useObject(data)
const { id: projectSlug } = useUrlParams()

const onSubmit = () => {
  validateForm(data.value) &&
    submit(API.updateProject(data.value.id, data.value)).then((res) => {
      router.push('/projects')
      window.Toast.success(`Project ${res.data.name} updated successfully.`)
    })
}

const fetchObject = () => {
  loading.value = true
  API.fetchProjectBySlug(projectSlug).then((res) => setObject(res))
}

fetchObject()
</script>
