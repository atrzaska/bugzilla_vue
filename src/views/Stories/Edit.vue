<template>
  <AppLayout>
    <h1 class="mb-4">Edit Story</h1>
    <Loading v-if="loading" />
    <form v-else @submit.prevent="onSubmit">
      <Field
        v-model="data.name"
        :validation="validation"
        id="name"
        label="Name"
        autofocus
      />
      <Field
        v-model="data.description"
        :validation="validation"
        id="description"
        label="Description"
      />
      <div class="mb-3">
        <label class="form-label" for="kind">Story type</label>
        <select
          v-model="data.kind"
          :class="['form-select', invalidFieldClass('kind')]"
          @input="validateField('kind')"
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
          @input="validateField('container')"
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
      <FormButtons
        :isValid="isValid"
        :isSubmitting="isSubmitting"
        :backLink="routes.currentStoriesPath()"
      />
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
import { watch } from 'vue'
import AppLayout from '@/layouts/App'
import Loading from '@/components/Loading'
import LoadMore from '@/components/pagination/LoadMore'
import Field from '@/components/form/Field'
import FormButtons from '@/components/form/FormButtons'
import useEditForm from '@/hooks/useEditForm'
import { storySchema as schema } from '@/services/yup'
import API from '@/services/requests'
import useUrlParams from '@/hooks/useUrlParams'
import useCollection from '@/hooks/async/useCollection'
import useLoadMorePagination from '@/hooks/useLoadMorePagination'

const { projectId, id } = useUrlParams()
const {
  data,
  errors,
  invalidFieldClass,
  isSubmitting,
  isValid,
  loading,
  onSubmit,
  validateField,
  validation,
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
const fetchComments = () =>
  API.fetchComments(
    { 'filter.storyId': id, offset: commentsPagination.offset.value },
    { refresh: true }
  ).then((res) => commentsData.appendCollection(res.data))

fetchComments()
watch(commentsPagination.offset, fetchComments)

const onDeleteCommentConfirmed = (comment) =>
  API.deleteComment(comment.id).then((res) => {
    window.Toast.success('Comment removed successfully.')
    commentsData.startLoading()

    if (commentsPagination.offset.value === 0) {
      commentsData.reset()
      commentsPagination.reset()
      fetchComments()
    } else {
      commentsData.reset()
      commentsPagination.reset()
    }
  })

const onDeleteComment = (comment) =>
  window.Modal.confirmDelete({
    title: 'You are about to remove a comment',
    onConfirm: () => onDeleteCommentConfirmed(comment),
  })

// tasks
const tasksData = useCollection()
const tasksPagination = useLoadMorePagination(tasksData)
const fetchTasks = () =>
  API.fetchTasks(
    { 'filter.storyId': id, offset: tasksPagination.offset.value },
    { refresh: true }
  ).then((res) => tasksData.appendCollection(res.data))

fetchTasks()
watch(tasksPagination.offset, fetchTasks)

const onDeleteTaskConfirmed = (task) =>
  API.deleteTask(task.id).then((res) => {
    window.Toast.success(`Task ${task.description} removed successfully.`)
    tasksData.startLoading()

    if (tasksPagination.offset.value === 0) {
      tasksData.reset()
      tasksPagination.reset()
      fetchTasks()
    } else {
      tasksData.reset()
      tasksPagination.reset()
    }
  })

const onDeleteTask = (task) =>
  window.Modal.confirmDelete({
    title: `You are about to remove ${task.description}`,
    onConfirm: () => onDeleteTaskConfirmed(task),
  })
</script>
