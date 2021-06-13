<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>Projects</h1>
      <router-link class="btn btn-primary" to="/projects/new">
        New
      </router-link>
    </div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else-if="collection.length">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <Sort v-model="sort" :options="SORT_OPTIONS" />
        <TopPagination :pagination="pagination" />
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
      <BottomPagination :pagination="pagination" />
    </div>
    <div v-else>
      <h1 class="text-center text-secondary p-4">
        You don't have any projects yet
      </h1>
      <div class="text-center">
        <router-link class="btn btn-primary" to="/projects1/new">
          Create project
        </router-link>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { watch } from 'vue'
import AppLayout from '@/layouts/App'
import TopPagination from '@/components/TopPagination'
import BottomPagination from '@/components/BottomPagination'
import Loading from '@/components/Loading'
import Sort from '@/components/Sort'
import API from '@/services/requests'
import usePagination from '@/use/usePagination'
import useSorting from '@/use/useSorting'
import useCollection from '@/use/useCollection'

const SORT_OPTIONS = {
  name_asc: { name: 'Name A-Z', value: 'name_asc' },
  name_desc: { name: 'Name Z-A', value: 'name_desc' },
}

const defaultSorting = SORT_OPTIONS.name_asc.value
const sort = useSorting(defaultSorting)
const { collection, total, loading, setCollection } = useCollection()
const pagination = usePagination({ collection, total })
const { page } = pagination

const fetchCollection = () =>
  API.fetchProjects({ page: page.value, sort: sort.value }).then(setCollection)

watch([page, sort], fetchCollection)
fetchCollection()
</script>
