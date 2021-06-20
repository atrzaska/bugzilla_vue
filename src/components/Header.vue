<template>
  <header
    class="header d-flex align-items-center px-3 py-1 border-bottom shadow-sm bg-white"
  >
    <router-link to="/dashboard" class="mr-auto">
      <img height="24" src="/images/bootstrap.svg" width="24" />
    </router-link>
    <div class="nav-item dropdown">
      <a
        aria-expanded="false"
        aria-haspopup="true"
        data-toggle="dropdown"
        href="#"
        role="button"
        ><img
          class="rounded-circle"
          height="32"
          :src="user.photoUrl || '/images/nobody.jpg'"
          with="32"
      /></a>
      <div
        aria-labelledby="navbarDropdown"
        class="dropdown-menu dropdown-menu-right"
      >
        <div class="d-flex align-items-center px-3">
          <img
            class="rounded-circle mr-3"
            height="80"
            :src="user.photoUrl || '/images/nobody.jpg'"
            with="80"
          />
          <div class="d-flex flex-column">
            <b>{{ fullName(user) }}</b>
            <div class="text-secondary">{{ user.email }}</div>
          </div>
        </div>
        <div class="dropdown-divider"></div>
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
import useCurrentUser from '@/use/useCurrentUser'
import { fullName } from '@/helpers/utils'

const { user } = useCurrentUser({})
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
