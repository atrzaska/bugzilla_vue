<template>
  <header
    class="
      header
      d-flex
      align-items-center
      px-3
      border-bottom
      shadow-sm
      bg-white
    "
  >
    <router-link to="/dashboard" class="me-auto">
      <img height="24" src="/images/bootstrap.svg" width="24" alt="pic" />
    </router-link>
    <div class="dropdown">
      <button class="btn btn-link dropdown-toggle" data-bs-toggle="dropdown">
        <img
          class="rounded-circle"
          height="32"
          :src="user.photoUrl || '/images/nobody.jpg'"
          with="32"
          alt="pic"
        />
      </button>
      <div class="dropdown-menu dropdown-menu-end">
        <div class="d-flex align-items-center px-3">
          <img
            class="rounded-circle me-3"
            height="80"
            :src="user.photoUrl || '/images/nobody.jpg'"
            with="80"
            alt="pic"
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
        <button @click="onLogout" class="dropdown-item">Log out</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import API from '@/services/requests'
import useCurrentUser from '@/hooks/useCurrentUser'
import { useRouter } from 'vue-router'

const router = useRouter()
const { user } = useCurrentUser()
const onLogout = () => API.logout().then(() => router.push('/signin'))
</script>
