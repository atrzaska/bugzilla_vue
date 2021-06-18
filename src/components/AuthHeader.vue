<template>
  <header class="d-flex align-items-center p-4">
    <router-link class="mr-auto" to="/">
      <img height="48" src="/images/bootstrap.svg" width="48" />
    </router-link>
    <router-link v-if="isLoggedIn" class="btn btn-primary" to="/dashboard">
      Go to the dashboard
    </router-link>
    <div v-else>
      <router-link
        v-if="isSignin"
        class="btn btn-lg btn-outline-primary"
        to="/signup"
      >
        Sign up
      </router-link>
      <router-link v-else class="btn btn-lg btn-outline-primary" to="/signin">
        Sign in
      </router-link>
    </div>
  </header>
</template>

<script setup>
const isSignin = window.location.pathname === '/signin'
const isLoggedIn = false
</script>
