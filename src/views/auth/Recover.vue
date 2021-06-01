<template>
  <AuthLayout>
    <form action="/recover" class="form-signin bg-white p-4" method="post">
      <h3 class="mb-3 font-weight-normal">Password recovery</h3>
      <p class="mb-4 text-secondary">
        Enter the email you're using for your account.
      </p>
      <div class="form-group">
        <input
          class="form-control"
          id="user_email"
          name="user[email]"
          placeholder="Email address"
          type="email"
          required
        />
      </div>
      <div class="form-group">
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Continue
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/Auth'
</script>
