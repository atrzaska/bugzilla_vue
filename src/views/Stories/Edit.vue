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
          :to="routes.currentStoriesPath()"
        >
          Back
        </router-link>
      </div>
    </form>
    <hr />
    <h5>Comments</h5>
    <Loading v-if="commentsData.loading.value" />
    <div v-else-if="commentsData.collection.value.length">
      <div class="list-group border-0 mb-3">
        <div
          v-for="comment in commentsData.collection.value"
          :key="comment.id"
          class="list-group-item d-flex"
        >
          <router-link class="me-auto" :to="routes.editCommentPath(comment)">
            {{ comment.content }}
          </router-link>
          <a @click.prevent="onDeleteComment(comment)" href="#">
            <i class="far fa-times-circle" />
          </a>
        </div>
      </div>
      <LoadMore :pagination="commentsPagination" />
    </div>
    <div v-else class="text-center">No Comments</div>
    <router-link class="mb-3" :to="routes.newCommentPath()">
      New Comment
    </router-link>
    <hr />
    <h5>Tasks</h5>
    <Loading v-if="tasksData.loading.value" />
    <div v-else-if="tasksData.collection.value.length">
      <div class="list-group border-0 mb-3">
        <div
          v-for="task in tasksData.collection.value"
          :key="task.id"
          class="list-group-item d-flex"
        >
          <router-link class="me-auto" :to="routes.editTaskPath(task)">
            {{ task.description }}
          </router-link>
          <a @click.prevent="onDeleteTask(task)" href="#">
            <i class="far fa-times-circle" />
          </a>
        </div>
      </div>
      <LoadMore :pagination="tasksPagination" />
    </div>
    <div v-else class="text-center">No Tasks</div>
    <router-link :to="routes.newTaskPath()">New Task</router-link>
  </AppLayout>
</template>

<script setup>
import { ref, watch } from 'vue'
import AppLayout from '@/layouts/App'
import Loading from '@/components/Loading'
import LoadMore from '@/components/pagination/LoadMore'
import useEditForm from '@/use/useEditForm'
import { storySchema as schema } from '@/helpers/yup'
import API from '@/services/requests'
import useUrlParams from '@/use/useUrlParams'
import useCollection from '@/use/useCollection'
import useLoadMorePagination from '@/use/useLoadMorePagination'

const { projectId, id } = useUrlParams()
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
  id,
  schema,
  onFetch: (id) => API.fetchStory(id),
  onUpdate: (id, data) => API.updateStory(id, data),
  successToast: (data) => `Story ${data.name} updated successfully.`,
  successRedirectPath: `/projects/${projectId}/current`,
})

const routes = {
  currentStoriesPath: () => `/projects/${projectId}/current`,
  newCommentPath: () =>
    `/stories/${id}/comments/new?back=/projects/${projectId}/stories/${id}/edit`,
  editCommentPath: (comment) =>
    `/stories/${id}/comments/${comment.id}/edit?back=/projects/${projectId}/stories/${id}/edit`,
  newTaskPath: () =>
    `/stories/${id}/tasks/new?back=/projects/${projectId}/stories/${id}/edit`,
  editTaskPath: (task) =>
    `/stories/${id}/tasks/${task.id}/edit?back=/projects/${projectId}/stories/${id}/edit`,
}

// comments
const commentsData = useCollection()
const commentsPagination = useLoadMorePagination(commentsData)
const fetchComments = () => {
  API.fetchComments(
    { 'filter.storyId': id, offset: commentsPagination.offset.value },
    { refresh: true }
  ).then((res) => {
    commentsPagination.setCollection(res.data)
    commentsData.stopLoading()
  })
}
fetchComments()
watch(commentsPagination.offset, fetchComments)

const onDeleteCommentConfirmed = (comment) =>
  API.deleteComment(comment.id).then((res) => {
    window.Toast.success('Comment removed successfully.')
    commentsData.startLoading()

    if (commentsPagination.offset.value === 0) {
      commentsPagination.reset()
      fetchComments()
    } else {
      commentsPagination.reset()
    }
  })

const onDeleteComment = (comment) =>
  window.Modal.confirm({
    title: 'You are about to remove a comment',
    body: 'This action cannot be undone. Are you sure you want to continue?',
    onConfirm: () => onDeleteCommentConfirmed(comment),
  })

// tasks
const tasksData = useCollection()
const tasksPagination = useLoadMorePagination(tasksData)
const fetchTasks = () =>
  API.fetchTasks(
    { 'filter.storyId': id, offset: tasksPagination.offset.value },
    { refresh: true }
  ).then((res) => {
    tasksPagination.setCollection(res.data)
    tasksData.stopLoading()
  })
fetchTasks()
watch(tasksPagination.offset, fetchTasks)

const onDeleteTaskConfirmed = (task) =>
  API.deleteTask(task.id).then((res) => {
    window.Toast.success(`Task ${task.description} removed successfully.`)
    tasksData.startLoading()

    if (tasksPagination.offset.value === 0) {
      tasksPagination.reset()
      fetchTasks()
    } else {
      tasksPagination.reset()
    }
  })

const onDeleteTask = (task) =>
  window.Modal.confirm({
    title: `You are about to remove ${task.description}`,
    body: 'This action cannot be undone. Are you sure you want to continue?',
    onConfirm: () => onDeleteTaskConfirmed(task),
  })
</script>
