<template>
  <LandingLayout>
    <div class="p-4 mb-3">
      <div class="jumbotron bg-white text-center mx-auto product-header py-5">
        <h1 class="display-4 pb-4">
          Bugzilla, simple and effective project management for your team
        </h1>
        <p class="lead pb-5 text-secondary">
          Collaborate with your remote team to improve what you do, guided by a
          simple workflow. And for free!
        </p>
        <div class="d-flex justify-content-center">
          <router-link
            class="btn btn-primary btn-lg py-3 px-5"
            to="/signup"
            role="button"
          >
            Get started
          </router-link>
          <router-link
            class="btn btn-outline-primary btn-lg py-3 px-5 ms-3"
            to="#howitworks"
            role="button"
          >
            See how it works
          </router-link>
        </div>
      </div>
    </div>
    <MySideDrawer />
    <footer class="text-center">
      <span class="me-2">Made with</span>
      <i class="fas fa-heart me-2 d-inline"></i>
      <span class="me-2">by</span>
      <router-link to="/">Andrzej Trzaska</router-link>
    </footer>
  </LandingLayout>
</template>

<script setup>
import LandingLayout from '@/layouts/Landing'
import MySideDrawer from '@/components/MySideDrawer'
</script>
