<template>
  <header class="d-flex align-items-center p-4">
    <router-link class="me-4" to="/">
      <img height="48" src="/images/bootstrap.svg" width="48" alt="pic" />
    </router-link>
    <a class="me-4" href="mailto:hi@bugzilla.app">Contact us</a>
    <a
      class="me-4"
      href="https://github.com/atrzaska/bugzilla_ex"
      target="_blank"
      rel="noreferrer"
    >
      Github
    </a>
    <div class="me-auto" />
    <div v-if="isLoggedIn">
      <router-link class="btn btn-primary" to="/dashboard">
        Go to the dashboard
      </router-link>
    </div>
    <div v-else>
      <router-link class="me-4" to="/signin">Log in</router-link>
      <router-link class="btn btn-primary" to="/signup">
        Sign up free →
      </router-link>
    </div>
  </header>
  <slot></slot>
</template>

<script setup>
import { onMounted } from 'vue'
import useCurrentUser from '@/hooks/useCurrentUser'

const { isLoggedIn } = useCurrentUser()

onMounted(() => (document.body.className = 'bg-white'))
</script>
