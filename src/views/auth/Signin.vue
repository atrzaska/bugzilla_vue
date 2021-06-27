<template>
  <AuthLayout>
    <form class="form-signin bg-white p-4" @submit.prevent="signIn">
      <h3 class="mb-3 font-weight-normal">Sign in</h3>
      <div v-if="error" class="alert alert-danger">
        <p class="mb-0">Invalid e-mail or password</p>
      </div>
      <div class="mb-3">
        <input
          class="form-control form-control-first"
          id="user_email"
          name="user[email]"
          placeholder="Email address"
          type="email"
          v-model="email"
        />
        <input
          class="form-control form-control-last"
          id="user_password"
          name="user[password]"
          placeholder="Password"
          type="password"
          v-model="password"
        />
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input
            v-model="rememberMe"
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
import useSignin from '@/use/useSignin'

const { email, password, rememberMe, error, signIn } = useSignin()
</script>
