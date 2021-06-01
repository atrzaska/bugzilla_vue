<template>
  <AuthLayout>
    <div class="form-signin text-center pt-4">
      <h1>Check your email</h1>
      <p class="text-secondary">
        We've sent confirmation instructions to your email address.&nbsp;
        <strong>
          If no email is received within ten minutes, check that the submitted
          address is correct.
        </strong>
      </p>
      <p class="text-secondary">
        <router-link to="/confirm">Resend confirmation</router-link>
        &nbsp;or find more information in&nbsp;
        <router-link to="/help">Help center</router-link>
      </p>
    </div>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/Auth'
</script>
