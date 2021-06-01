<template>
  <AuthLayout>
    <div class="form-signin text-center pt-4">
      <h1>Thank you!</h1>
      <p class="text-secondary">
        We've sent password reset instructions to your email address.
        <strong>
          If no email is received within ten minutes, check that the submitted
          address is correct.
        </strong>
      </p>
      <router-link class="btn btn-lg btn-primary btn-block" to="/signin">
        Back to Sign in
      </router-link>
    </div>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/Auth'
</script>
