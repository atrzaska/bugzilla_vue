<template>
  <AuthLayout>
    <form @submit.prevent="onSubmit" class="form-signin bg-white p-4">
      <h3 class="mb-3 font-weight-normal">Get started free today</h3>
      <p class="mb-4 text-secondary">No credit card required</p>
      <ErrorsBox :validation="validation" />
      <div class="form-group">
        <input
          v-model="name"
          autocomplete="name"
          :class="[
            'form-control',
            'form-control-first',
            invalidFieldClass('name'),
          ]"
          placeholder="Name"
          type="text"
          required
        />
        <input
          v-model="email"
          autocomplete="username"
          :class="[
            'form-control',
            'form-control-middle',
            invalidFieldClass('email'),
          ]"
          placeholder="Email address"
          type="email"
          required
        />
        <input
          v-model="password"
          autocomplete="new-password"
          :class="[
            'form-control',
            'form-control-last',
            invalidFieldClass('password'),
          ]"
          placeholder="Password 8+ characters"
          type="password"
          required
        />
      </div>
      <div class="form-group">
        <label class="d-block font-weight-normal text-secondary">
          <input v-model="termsAccepted" type="checkbox" required />
          &nbsp;I agree to Bugzilla&nbsp;
          <a href="/terms" target="_blank">Terms&nbsp;</a>
          and&nbsp;
          <a href="/privacy" target="_blank">Privacy Policy</a>
        </label>
      </div>
      <div class="form-group">
        <label class="d-block font-weight-normal text-secondary">
          <input v-model="newsletterSubscribed" type="checkbox" />
          &nbsp;I agree to receive Bugzilla news and updates.
        </label>
      </div>
      <div class="form-group">
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Get started now
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup>
import { computed } from 'vue'
import AuthLayout from '@/layouts/Auth'
import ErrorsBox from '@/components/ErrorsBox'
import useSignup from '@/use/useSignup'
import useValidation from '@/use/useValidation'

const [
  name,
  email,
  password,
  termsAccepted,
  newsletterSubscribed,
  errors,
  onSubmit,
] = useSignup()
const validation = useValidation(errors)
const { invalidFieldClass } = validation
</script>
