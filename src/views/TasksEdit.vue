<template>
  <AppLayout>
    <h1 class="mb-4">Edit Task</h1>
    <form action="/tasks/1" method="post">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="task_description">
          Description
        </label>
        <div class="col-sm-10">
          <textarea
            class="form-control"
            id="task_description"
            name="task[description]"
            placeholder="Description"
            required
          >
          this is a task
        </textarea
          >
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2" for="task_complete">Complete</label>
        <div class="col-sm-10">
          <div class="form-check">
            <input name="task[complete]" type="hidden" value="false" />
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
      </div>
      <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
          <button class="btn btn-primary mr-2" type="submit">Save</button>
          <router-link
            class="btn btn-outline-secondary"
            to="/projects/qwe/stories/1/edit"
          >
            Back
          </router-link>
        </div>
      </div>
    </form>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
</script>
