<template>
  <AppLayout>
    <h1 class="mb-4">New Comment</h1>
    <form action="/comments" method="post">
      <div class="mb-3">
        <label class="form-label" for="comment_content">Content</label>
        <textarea
          class="form-control"
          id="comment_content"
          name="comment[content]"
          placeholder="Content"
          required
        />
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
