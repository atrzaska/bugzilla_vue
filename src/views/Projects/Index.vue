<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h5>Projects</h5>
      <router-link class="btn btn-primary" to="/projects/new">
        New
      </router-link>
    </div>
    <Loading v-if="loading" />
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
              <router-link :to="`/projects/${project.id}/current`">
                {{ project.name }}
              </router-link>
            </td>
            <td>
              <div class="d-flex justify-content-end dropdown">
                <button
                  class="btn btn-outline-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img :src="threeDots" alt="pic" />
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                  <router-link
                    class="dropdown-item"
                    :to="`/projects/${project.id}/edit`"
                  >
                    Edit
                  </router-link>
                  <div class="dropdown-divider" />
                  <button class="dropdown-item" @click="onDelete(project)">
                    Remove
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-between align-items-center">
        <PageResults :pagination="pagination" />
        <AllegroPagination :pagination="pagination" />
      </div>
      <CompactPagination :pagination="pagination" />
      <BootstrapPagination :pagination="pagination" />
      <Pagination :pagination="pagination" />
    </div>
    <Empty v-else />
  </AppLayout>
</template>

<script setup>
import { watch } from 'vue'
import AppLayout from '@/layouts/App'
import TopPagination from '@/components/pagination/TopPagination'
import CompactPagination from '@/components/pagination/CompactPagination'
import BootstrapPagination from '@/components/pagination/BootstrapPagination'
import Pagination from '@/components/pagination/Pagination'
import AllegroPagination from '@/components/pagination/AllegroPagination'
import PageResults from '@/components/pagination/PageResults'
import Loading from '@/components/Loading'
import Empty from './components/Empty'
import Sort from '@/components/Sort'
import threeDots from '@/assets/threeDots.svg'
import API from '@/services/requests'
import usePagination from '@/hooks/usePagination'
import useSorting from '@/hooks/useSorting'
import useCollection from '@/hooks/async/useCollection'

const SORT_OPTIONS = {
  id_desc: { name: 'Creation time: newest', value: 'id_desc' },
  id_asc: { name: 'Creation time: oldest', value: 'id_asc' },
  name_asc: { name: 'Name A-Z', value: 'name_asc' },
  name_desc: { name: 'Name Z-A', value: 'name_desc' },
}

const defaultSorting = SORT_OPTIONS.id_desc.value
const sort = useSorting(defaultSorting)
const { collection, total, loading, setCollection, startLoading } =
  useCollection()
const pagination = usePagination({ collection, total })
const { page } = pagination

const fetchCollection = () => {
  startLoading()
  API.fetchProjects(
    { page: page.value, sort: sort.value },
    { refresh: true }
  ).then((res) => setCollection(res.data))
}

const onDeleteConfirmed = (project) => {
  API.deleteProject(project.id).then((res) => {
    window.Toast.success(`Project ${project.name} deleted successfully.`)
    fetchCollection()
  })
}

const onDelete = (project) =>
  window.Modal.confirmDelete({
    name: project.name,
    onConfirm: () => onDeleteConfirmed(project),
  })

watch(sort, () => pagination.goToPage(1))
watch([page, sort], fetchCollection)
fetchCollection()
</script>
