<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>Projects</h1>
      <router-link class="btn btn-primary" to="/projects/new">New</router-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="border-0">Name</th>
          <th class="border-0 w-1">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><router-link to="/projects/qwe/current">qwe</router-link></td>
          <td>
            <div class="dropdown">
              <a
                class="btn btn-outline-primary dropdown-toggle"
                data-toggle="dropdown"
                ><i class="fas fa-cog"></i
              ></a>
              <div class="dropdown-menu dropdown-menu-right">
                <router-link class="dropdown-item" to="/projects/qwe/edit"
                  >Edit</router-link
                >
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item"
                  data-confirm="Are you sure?"
                  data-to="/projects/qwe"
                  href="/projects/qwe"
                  rel="nofollow"
                >
                  Remove
                </a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
</script>
