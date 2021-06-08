<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>Projects</h1>
      <router-link class="btn btn-primary" to="/projects/new">New</router-link>
    </div>
    <div class="row">
      <div class="col-12 d-flex align-items-center">
        <select v-model="sort" class="form-control col-4">
          <option
            v-for="sortOption in sortOptions"
            :key="sortOption.value"
            :value="sortOption.value"
          >
            {{ sortOption.name }}
          </option>
        </select>
        <div class="mr-auto"></div>
        <TopPagination :pagination="pagination" />
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
        <tr v-for="project in collection" :key="project.id">
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
import { watch } from 'vue'
import AppLayout from '@/layouts/App'
import TopPagination from '@/components/TopPagination'
import { fetchProjects } from '@/services/requests'
import usePagination from '@/composables/usePagination'
import useSorting from '@/composables/useSorting'
import useCollection from '@/composables/useCollection'

const sortOptions = {
  name_asc: {
    name: 'Name A-Z',
    key: 'name',
    direction: 'asc',
    value: 'name_asc',
  },
  name_desc: {
    name: 'Name Z-A',
    key: 'name',
    direction: 'desc',
    value: 'name_desc',
  },
}

const defaultSorting = sortOptions.name_asc.value
const sort = useSorting(defaultSorting)
const { collection, total, setCollection } = useCollection()
const pagination = usePagination({ collection, total })
const { page } = pagination

const fetchCollection = () =>
  fetchProjects({ page: page.value, sort: sort.value }).then(setCollection)

watch([page, sort], fetchCollection)
fetchCollection()
</script>

<style scoped>
.page-link {
  border: none;
}
</style>
