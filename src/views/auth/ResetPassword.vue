<template>
  <AuthLayout>
    <form
      action="/reset_password/4UDZwYjNLEVudgmtCuvnh7fpJWAHurvr-e987Ozo9no"
      class="form-signin bg-white p-4"
      method="post"
    >
      <h3 class="mb-3 font-weight-normal">Password Recovery</h3>
      <p class="mb-4 text-secondary">Enter your new password.</p>
      <div class="form-group">
        <input
          class="form-control"
          id="user_password"
          name="user[password]"
          placeholder="Password"
          type="password"
          required
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          id="user_password_confirmation"
          name="user[password_confirmation]"
          placeholder="Password confirmation"
          type="password"
          required
        />
      </div>
      <div class="form-group">
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Reset password
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/Auth'
</script>
