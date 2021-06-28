<template>
  <header
    class="header d-flex align-items-center px-3 border-bottom shadow-sm bg-white"
  >
    <router-link to="/dashboard" class="me-auto">
      <img height="24" src="/images/bootstrap.svg" width="24" />
    </router-link>
    <div class="dropdown">
      <a class="dropdown-toggle" data-bs-toggle="dropdown" href="#">
        <img
          class="rounded-circle"
          height="32"
          :src="user.photoUrl || '/images/nobody.jpg'"
          with="32"
        />
      </a>
      <div class="dropdown-menu dropdown-menu-end">
        <div class="d-flex align-items-center px-3">
          <img
            class="rounded-circle me-3"
            height="80"
            :src="user.photoUrl || '/images/nobody.jpg'"
            with="80"
          />
          <div class="d-flex flex-column">
            <b>{{ user.name }}</b>
            <div class="text-secondary">{{ user.email }}</div>
          </div>
        </div>
        <div class="dropdown-divider" />
        <router-link to="/users/settings" class="dropdown-item">
          Profile
        </router-link>
        <router-link to="/help" class="dropdown-item">Help</router-link>
        <a class="dropdown-item" @click="API.logout">Log out</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import API from '@/services/requests'
import useCurrentUser from '@/hooks/useCurrentUser'

const { user } = useCurrentUser()
</script>

<style>
.header {
  height: 48px;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
