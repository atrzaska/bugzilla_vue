<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>Projects</h1>
      <router-link class="btn btn-primary" to="/projects/new">New</router-link>
    </div>
    <div class="row">
      <div class="col-12 d-flex align-items-center">
        <select class="form-control col-4">
          <option
            v-for="sortOption in sortOptions"
            :key="sortOption.value"
            :value="sortOption.value"
          >
            {{ sortOption.name }}
          </option>
        </select>
        <div class="mr-auto"></div>
        <NewPagination :pagination="pagination" />
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="border-0">Name</th>
          <th class="border-0 w-1">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>
            <router-link :to="`/projects/${project.slug}/current`">
              {{ project.name }}
            </router-link>
          </td>
          <td>
            <div class="dropdown">
              <a
                class="btn btn-outline-primary dropdown-toggle"
                data-toggle="dropdown"
              >
                <i class="fas fa-cog" />
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <router-link
                  class="dropdown-item"
                  :to="`/projects/${project.slug}/edit`"
                >
                  Edit
                </router-link>
                <div class="dropdown-divider" />
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
import { fetchProjects } from '@/services/requests'
import usePagination from '@/composables/usePagination'
import NewPagination from '@/components/NewPagination'
import useSorting from '@/composables/useSorting'

const pagination = usePagination(fetchProjects)
const { collection: projects, goToPage } = pagination
goToPage(1)

const sortOptions = [
  { name: 'Name A-Z', value: 'name_asc' },
  { name: 'Name Z-A', value: 'name_desc' },
]

const { sort } = useSorting(sortOptions[0])
</script>

<style scoped>
.page-link {
  border: none;
}
</style>
