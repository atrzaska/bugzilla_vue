<template>
  <AppLayout>
    <h1 class="text-center">Settings</h1>
    <h5 class="mb-4">Change personal data</h5>
    <form action="/users/settings" method="post">
      <div class="mb-3">
        <label class="form-label" for="user_name">Name</label>
        <input
          class="form-control"
          id="user_name"
          name="user[name]"
          placeholder="Name"
          type="text"
          value="Andrzej Trzaska"
        />
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="user_receive_news_and_updates"
            name="user[receive_news_and_updates]"
            type="checkbox"
            value="true"
          />
          <label class="form-label" for="user_receive_news_and_updates">
            Receive news and updates
          </label>
        </div>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary" type="submit">Save</button>
      </div>
    </form>
    <hr class="my-4" />
    <h5 class="mb-4">Change email</h5>
    <form action="/users/settings/update_email" method="post">
      <div class="mb-3">
        <label class="form-label" for="user_email">Email</label>
        <input
          class="form-control"
          id="user_email"
          name="user[email]"
          placeholder="Email"
          type="email"
          value="atrzaska2@gmail.com"
        />
      </div>
      <div class="mb-3">
        <label class="form-label" for="current_password_for_email">
          Current password
        </label>
        <input
          class="form-control"
          id="current_password_for_email"
          name="current_password"
          placeholder="Current password"
          type="password"
        />
      </div>
      <div class="mb-3">
        <button class="btn btn-primary" type="submit">Change email</button>
      </div>
    </form>
    <hr class="my-4" />
    <h5 class="mb-4">Change password</h5>
    <form action="/users/settings/update_password" method="post">
      <div class="mb-3">
        <label class="form-label" for="current_password_for_password">
          Current password
        </label>
        <input
          class="form-control"
          id="current_password_for_password"
          name="current_password"
          placeholder="Current password"
          type="password"
        />
      </div>
      <div class="mb-3">
        <label class="form-label" for="user_password"> New password </label>
        <input
          class="form-control"
          id="user_password"
          name="user[password]"
          placeholder="New password"
          type="password"
        />
      </div>
      <div class="mb-3">
        <label class="form-label" for="user_password_confirmation">
          Confirm password
        </label>
        <input
          class="form-control"
          id="user_password_confirmation"
          name="user[password_confirmation]"
          placeholder="Confirm new password"
          type="password"
        />
      </div>
      <div class="mb-3">
        <button class="btn btn-primary" type="submit">Change password</button>
      </div>
    </form>
    <hr class="my-4" />
    <h5 class="mb-4">Cancel my account</h5>
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
