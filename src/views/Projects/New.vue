<template>
  <AppLayout>
    <h1 class="mb-4">New Project</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="projectName">Name</label>
        <div class="col-sm-10">
          <input
            v-model="data.name"
            :class="['form-control', invalidFieldClass('name')]"
            id="projectName"
            placeholder="Name"
            type="text"
            required
            @input="validateField('name', data.name)"
          />
        </div>
        <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
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
      </div>
    </form>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import AppLayout from '@/layouts/App'
import useForm from '@/use/useForm'
import API from '@/services/requests'
import useFrontendValidation from '@/use/useFrontendValidation'
import { createProjectSchema } from '@/helpers/yup'
import Toast from '@/lib/toast'
import { useRouter } from 'vue-router'

const errors = ref({})
const { data, isSubmitting, submit } = useForm(errors)
const validation = useFrontendValidation({
  errors,
  schema: createProjectSchema,
})
const { isValid, invalidFieldClass, validateField, validateForm } = validation
const router = useRouter()

const onSubmit = () => {
  validateForm(data) &&
    submit(API.createProject(data)).then((res) => {
      router.push('/projects')
      Toast.success(`Project ${res.data.name} created successfully.`)
    })
}
</script>
