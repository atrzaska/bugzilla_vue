<template>
  <AuthLayout>
    <form class="form-signin bg-white p-4" @submit.prevent="onSubmit">
      <h3 class="mb-3 font-weight-normal">Sign in</h3>
      <div class="form-group">
        <input
          class="form-control form-control-first"
          id="user_email"
          name="user[email]"
          placeholder="Email address"
          type="email"
          required
          v-model="email"
        />
        <input
          class="form-control form-control-last"
          id="user_password"
          name="user[password]"
          placeholder="Password"
          type="password"
          required
          v-model="password"
        />
      </div>
      <div class="form-group">
        <label class="d-block font-weight-normal mb-4 text-secondary">
          <input name="user[remember_me]" type="hidden" value="false" />
          <input
            id="user_remember_me"
            name="user[remember_me]"
            type="checkbox"
            value="true"
          />
          &nbsp;Remember me
        </label>
      </div>
      <div class="form-group">
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </div>
      <router-link
        class="text-secondary text-decoration-none mr-1"
        to="/recover"
      >
        Forgot password?
      </router-link>
      <br />
      <router-link
        class="text-secondary text-decoration-none mr-1"
        to="/confirm"
      >
        Didn't get confirmation email?
      </router-link>
    </form>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/Auth'
import { ref } from 'vue'
import { signIn } from '@/services/requests'

const withSignin = () => {
  const email = ref('')
  const password = ref('')
  const onSubmit = () => signIn(email.value, password.value)

  return [email, password, onSubmit]
}

const [email, password, onSubmit] = withSignin()
</script>
