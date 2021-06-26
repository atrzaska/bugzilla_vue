<template>
  <AppLayout>
    <h1 class="mb-4">Edit Story</h1>
    <Loading v-if="loading" />
    <form v-else @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label" for="name">Name</label>
        <input
          v-model="data.name"
          :class="['form-control', invalidFieldClass('name')]"
          @input="validateField('name', data.name)"
          id="name"
          placeholder="Name"
          type="text"
          required
        />
        <div v-if="errors.name" class="invalid-feedback">
          {{ errors.name }}
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="description">Description</label>
        <input
          v-model="data.description"
          :class="['form-control', invalidFieldClass('description')]"
          @input="validateField('description', data.description)"
          id="description"
          placeholder="Description"
          type="text"
          required
        />
        <div v-if="errors.description" class="invalid-feedback">
          {{ errors.description }}
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="kind">Story type</label>
        <select
          v-model="data.kind"
          :class="['form-select', invalidFieldClass('kind')]"
          @input="validateField('kind', data.kind)"
          id="kind"
          required
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
        <label class="form-label" for="storyContainer">Container</label>
        <select
          v-model="data.container"
          :class="['form-select', invalidFieldClass('container')]"
          @input="validateField('container', data.container)"
          id="container"
          required
        >
          <option value="icebox">Icebox</option>
          <option value="backlog">Backlog</option>
        </select>
        <div v-if="errors.container" class="invalid-feedback">
          {{ errors.container }}
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
          :to="`/projects/${id}/current`"
        >
          Back
        </router-link>
      </div>
    </form>
    <hr />
    <h5>Comments</h5>
    <div class="list-group border-0 mb-3">
      <div class="list-group-item d-flex">
        <router-link class="me-auto" to="/comments/1/edit">
          this is a comment
        </router-link>
        <a
          data-confirm="Are you sure?"
          data-csrf="YhYPYUwKVzcrAWszIComCXk7AAIaZyEjSP9Uz25EyD_QLeDh8UgwHJWs"
          data-method="delete"
          data-to="/comments/1"
          href="/comments/1"
          rel="nofollow"
        >
          <i class="far fa-times-circle"> </i>
        </a>
      </div>
    </div>
    <router-link class="mb-3" to="/comments/new">New Comment</router-link>
    <hr />
    <h5>Tasks</h5>
    <div class="list-group border-0 mb-3">
      <div class="list-group-item d-flex">
        <router-link class="me-auto" to="/tasks/1/edit">
          this is a task
        </router-link>
        <a
          data-confirm="Are you sure?"
          data-csrf="YhYPYUwKVzcrAWszIComCXk7AAIaZyEjSP9Uz25EyD_QLeDh8UgwHJWs"
          data-method="delete"
          data-to="/tasks/1"
          href="/tasks/1"
          rel="nofollow"
        >
          <i class="far fa-times-circle"> </i>
        </a>
      </div>
    </div>
    <router-link to="/tasks/new">New Task</router-link>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
import Loading from '@/components/Loading'
import useEditForm from '@/use/useEditForm'
import { storySchema as schema } from '@/helpers/yup'
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
  onFetch: (id) => API.fetchStory(id),
  onUpdate: (id, data) => API.updateStory(id, data),
  successToast: (data) => `Story ${data.name} updated successfully.`,
  successRedirectPath: `/projects/${id}/current`,
})
</script>
