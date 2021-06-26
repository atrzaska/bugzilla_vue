<template>
  <AppLayout>
    <h1 class="mb-4">Change role of atrzaska2+2@gmail.com</h1>
    <p class="text-secondary">Select a new role</p>
    <form action="/projects/qwe/people/2" method="post">
      <input name="_method" type="hidden" value="put" /><input
        name="_csrf_token"
        type="hidden"
        value="ISp0LjkrUQJ9RkRQKBUfLSlIcysFIQ9NKh3AcF375rweCgxiDy8jIjE7"
      />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="user_project_role"
          >Role</label
        >
        <div class="col-sm-10">
          <div class="d-flex flex-column">
            <label class="form-check-label mb-3"
              ><input
                class="form-check form-check-inline"
                id="user_project_role_member"
                name="user_project[role]"
                type="radio"
                value="member"
                checked
                required
              /><b>Member</b>
              <div class="text-secondary">
                Has full administrative access to the entire project.
              </div></label
            ><label class="form-check-label"
              ><input
                class="form-check form-check-inline"
                id="user_project_role_owner"
                name="user_project[role]"
                type="radio"
                value="owner"
                required
              /><b>Owner</b>
              <div class="text-secondary">
                Can see every member and create new stories.
              </div></label
            >
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2" />
        <div class="col-sm-10">
          <button class="btn btn-primary mr-2" type="submit">Change role</button
          ><a class="btn btn-outline-secondary" href="/projects/qwe/people"
            >Back</a
          >
        </div>
      </div>
    </form>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
</script>
