<template>
  <aside
    class="
      sidebar
      d-flex
      justify-content-center justify-content-sm-start
      align-items-center align-items-sm-start
      flex-sm-column
    "
  >
    <div class="sidebar-header d-none d-sm-block" />
    <router-link to="/dashboard" :class="linkClass('/dashboard')">
      <i class="fas fa-desktop text-secondary"></i>
    </router-link>
    <router-link to="/projects" :class="linkClass('/projects')">
      <i class="fas fa-table text-secondary"></i>
    </router-link>
  </aside>
</template>

<script setup>
const isActive = (path) => window.location.pathname.match(new RegExp(path, 'i'))

const linkClass = (path) => [
  'sidebar-item',
  'd-flex',
  'justify-content-center',
  'align-items-center',
  isActive(path) ? 'sidebar-item-active' : '',
]
</script>
