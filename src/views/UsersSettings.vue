<template>
  <AppLayout>
    <h1 class="text-center">Settings</h1>
    <h3 class="mb-4">Change personal data</h3>
    <form action="/users/settings" method="post">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="user_name">Name</label>
        <div class="col-sm-10">
          <input
            class="form-control"
            id="user_name"
            name="user[name]"
            placeholder="Name"
            type="text"
            value="Andrzej Trzaska"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2" for="user_receive_news_and_updates">
          Receive news and updates
        </label>
        <div class="col-sm-10">
          <div class="form-check">
            <input
              name="user[receive_news_and_updates]"
              type="hidden"
              value="false"
            />
            <input
              class="form-check-input"
              id="user_receive_news_and_updates"
              name="user[receive_news_and_updates]"
              type="checkbox"
              value="true"
            />
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
          <button class="btn btn-primary" type="submit">Save</button>
        </div>
      </div>
    </form>
    <hr class="my-4" />
    <h3 class="mb-4">Change email</h3>
    <form action="/users/settings/update_email" method="post">
      <input name="_method" type="hidden" value="put" />
      <input
        name="_csrf_token"
        type="hidden"
        value="VHQGfkdLLzofFwcgFj8PAmxeEhsRRC4Ce20JqsMHMR3Bzpmc-0unCiXR"
      />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="user_email">Email</label>
        <div class="col-sm-10">
          <input
            class="form-control"
            id="user_email"
            name="user[email]"
            placeholder="Email"
            type="email"
            value="atrzaska2@gmail.com"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="current_password_for_email">
          Current password
        </label>
        <div class="col-sm-10">
          <input
            class="form-control"
            id="current_password_for_email"
            name="current_password"
            placeholder="Current password"
            type="password"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
          <button class="btn btn-primary" type="submit">Change email</button>
        </div>
      </div>
    </form>
    <hr class="my-4" />
    <h3 class="mb-4">Change password</h3>
    <form action="/users/settings/update_password" method="post">
      <input name="_method" type="hidden" value="put" />
      <input
        name="_csrf_token"
        type="hidden"
        value="VHQGfkdLLzofFwcgFj8PAmxeEhsRRC4Ce20JqsMHMR3Bzpmc-0unCiXR"
      />
      <div class="form-group row">
        <label
          class="col-sm-2 col-form-label"
          for="current_password_for_password"
        >
          Current password
        </label>
        <div class="col-sm-10">
          <input
            class="form-control"
            id="current_password_for_password"
            name="current_password"
            placeholder="Current password"
            type="password"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="user_password">
          New password
        </label>
        <div class="col-sm-10">
          <input
            class="form-control"
            id="user_password"
            name="user[password]"
            placeholder="New password"
            type="password"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="user_password_confirmation">
          Confirm password
        </label>
        <div class="col-sm-10">
          <input
            class="form-control"
            id="user_password_confirmation"
            name="user[password_confirmation]"
            placeholder="Confirm new password"
            type="password"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
          <button class="btn btn-primary" type="submit">Change password</button>
        </div>
      </div>
    </form>
    <hr class="my-4" />
    <h3 class="mb-4">Cancel my account</h3>
    <p>Unhappy?</p>
    <div>
      <a
        class="btn btn-danger"
        data-confirm="Are you sure?"
        data-csrf="VHQGfkdLLzofFwcgFj8PAmxeEhsRRC4Ce20JqsMHMR3Bzpmc-0unCiXR"
        data-method="delete"
        data-to="/users/settings"
        href="/users/settings"
        rel="nofollow"
      >
        Cancel my account
      </a>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
</script>
