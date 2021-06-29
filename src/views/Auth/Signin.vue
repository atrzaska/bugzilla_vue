<template>
  <AuthLayout>
    <form class="form-signin bg-white p-4" @submit.prevent="signIn">
      <h3 class="mb-3 font-weight-normal">Sign in</h3>
      <div v-if="error" class="alert alert-danger">
        <p class="mb-0">Invalid e-mail or password</p>
      </div>
      <div class="mb-3">
        <input
          v-model="data.email"
          class="form-control rounded-0 rounded-top"
          id="email"
          type="email"
          placeholder="Email address"
        />
        <input
          v-model="data.password"
          class="form-control rounded-0 rounded-bottom"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input
            v-model="data.rememberMe"
            id="rememberMe"
            type="checkbox"
            class="form-check-input"
          />
          <label
            for="rememberMe"
            class="d-block form-check-label font-weight-normal mb-4 text-secondary"
          >
            &nbsp;Remember me
          </label>
        </div>
      </div>
      <div class="mb-3">
        <button class="btn btn-lg btn-primary w-100" type="submit">
          Sign in
        </button>
      </div>
      <router-link
        class="text-secondary text-decoration-none me-1"
        to="/recover"
      >
        Forgot password?
      </router-link>
      <br />
      <router-link
        class="text-secondary text-decoration-none me-1"
        to="/confirm"
      >
        Didn't get confirmation email?
      </router-link>
    </form>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/Auth'
import useSignin from '@/hooks/useSignin'

const { data, error, signIn } = useSignin()
</script>
