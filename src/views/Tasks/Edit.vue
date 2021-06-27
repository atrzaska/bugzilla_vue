<template>
  <AppLayout>
    <h1 class="mb-4">Edit Task</h1>
    <form action="/tasks/1" method="post">
      <div class="mb-3">
        <label class="form-label" for="task_description">Description</label>
        <div class="col-sm-10">
          <textarea
            class="form-control"
            id="task_description"
            name="task[description]"
            placeholder="Description"
          />
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="task_complete">Complete</label>
        <div class="form-check">
          <input
            class="form-check-input"
            id="task_complete"
            name="task[complete]"
            type="checkbox"
            value="true"
            checked
          />
        </div>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary me-2" type="submit">Save</button>
        <router-link
          class="btn btn-outline-secondary"
          to="/projects/qwe/stories/1/edit"
        >
          Back
        </router-link>
      </div>
    </form>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
</script>
