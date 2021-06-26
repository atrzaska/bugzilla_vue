<template>
  <AppLayout>
    <h1 class="mb-4">Invite member</h1>
    <form action="/invites" method="post">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="invite_email">Email</label>
        <div class="col-sm-10">
          <input
            class="form-control"
            id="invite_email"
            name="invite[email]"
            type="text"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2" />
        <div class="col-sm-10">
          <button class="btn btn-primary mr-2" type="submit">Invite</button>
          <a class="btn btn-outline-secondary" href="/projects/qwe/members">
            Back
          </a>
        </div>
      </div>
    </form>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
</script>
