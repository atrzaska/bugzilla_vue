<template>
  <header class="d-flex align-items-center p-4">
    <router-link class="mr-4" to="/">
      <img height="48" src="/images/bootstrap.svg" width="48" />
    </router-link>
    <a class="mr-4" href="mailto:hi@bugzilla.app"> Contact us </a>
    <a
      class="mr-4"
      href="https://github.com/atrzaska/bugzilla_ex"
      target="_blank"
    >
      Github
    </a>
    <div class="mr-auto"></div>
    <router-link class="mr-4" to="/signin"> Log in </router-link>
    <router-link class="btn btn-primary" to="/signup">
      Sign up free →
    </router-link>
  </header>
  <slot></slot>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => (document.body.className = 'bg-white'))
</script>
