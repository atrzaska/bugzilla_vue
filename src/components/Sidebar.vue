<template>
  <aside class="sidebar d-flex flex-column">
    <div class="sidebar-header"></div>
    <router-link
      to="/dashboard"
      class="sidebar-item d-flex justify-content-center align-items-center"
    >
      <i class="fas fa-desktop gray-2"></i>
    </router-link>
    <router-link
      to="/projects"
      class="sidebar-item d-flex justify-content-center align-items-center"
    >
      <i class="fas fa-table gray-2"></i>
    </router-link>
  </aside>
</template>

<style>
.sidebar {
  background-color: #ffffff;
  width: 48px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 8;
  padding-top: 48px;
  box-shadow: 1px 0 0 #d1d1d1;
}

.sidebar-icon {
  width: 16px;
  height: 16px;
}

.sidebar-header {
  background-color: #563d7c;
  height: 30px;
}

.sidebar-item {
  height: 40px;
}

.sidebar-item-active,
.sidebar-item:hover {
  background-color: #f2f2f2;
}
</style>
