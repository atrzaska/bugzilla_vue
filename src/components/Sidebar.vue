<template>
  <aside
    class="sidebar d-flex justify-content-center justify-content-sm-start align-items-center align-items-sm-start flex-sm-column"
  >
    <div class="sidebar-header d-none d-sm-block"></div>
    <router-link
      to="/dashboard"
      :class="[
        'sidebar-item',
        'd-flex',
        'justify-content-center',
        'align-items-center',
        isActive('/dashboard') && 'sidebar-item-active',
      ]"
    >
      <i class="fas fa-desktop gray-2"></i>
    </router-link>
    <router-link
      to="/projects"
      :class="[
        'sidebar-item',
        'd-flex',
        'justify-content-center',
        'align-items-center',
        isActive('/projects') && 'sidebar-item-active',
      ]"
    >
      <i class="fas fa-table gray-2"></i>
    </router-link>
  </aside>
</template>

<script setup>
const isActive = (path) => window.location.pathname.match(new RegExp(path, 'i'))
</script>

<style>
.sidebar {
  background-color: #ffffff;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  box-shadow: 1px 0 0 #d1d1d1;
}

.sidebar-icon {
  width: 16px;
  height: 16px;
}

.sidebar-header {
  background-color: #563d7c;
  height: 30px;
  width: 100%;
}

.sidebar-item {
  height: 48px;
  width: 48px;
}

.sidebar-item-active,
.sidebar-item:hover {
  background-color: #f2f2f2;
}

@media (min-width: 576px) {
  .sidebar {
    width: 48px;
    right: auto;
    height: 100%;
    padding-top: 48px;
  }
}
</style>
