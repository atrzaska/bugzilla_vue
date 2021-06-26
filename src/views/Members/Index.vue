<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h5>{{ project.name }}</h5>
      <router-link class="btn btn-primary" to="/invites/new">
        Invite member
      </router-link>
    </div>
    <ProjectTabs />
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
            <th class="border-0">Role</th>
            <th class="border-0 w-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in collection" :key="item.id">
            <td>
              <div class="d-flex align-items-center">
                <img
                  class="rounded-circle mr-2"
                  height="48"
                  :src="item.photoUrl"
                  with="48"
                />
                <div class="d-flex flex-column">
                  <b v-if="isCurrentUser(item)">You • {{ item.name }}</b>
                  <b v-else>{{ item.name }}</b>
                  <div class="text-secondary">{{ item.email }}</div>
                </div>
              </div>
            </td>
            <td>{{ item.role }}</td>
            <td v-if="project.isOwner">
              <div class="dropdown">
                <a
                  class="btn btn-outline-primary dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i class="fas fa-cog"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <template v-if="isCurrentUser(item)">
                    <a class="dropdown-item">Leave project...</a>
                  </template>
                  <template v-else>
                    <a class="dropdown-item">Change role</a>
                    <div class="dropdown-divider" />
                    <a class="dropdown-item">Remove from project...</a>
                  </template>
                </div>
              </div>
            </td>
            <td v-else>
              <a v-if="isCurrentUser(item)" class="btn btn-danger">Leave</a>
            </td>
          </tr>
        </tbody>
      </table>
      <XrmPagination :pagination="pagination" />
    </div>
    <Empty v-else />
  </AppLayout>
</template>

<script setup>
import { ref, watch } from 'vue'
import AppLayout from '@/layouts/App'
import ProjectTabs from '@/components/ProjectTabs'
import TopPagination from '@/components/pagination/TopPagination'
import XrmPagination from '@/components/pagination/XrmPagination'
import Loading from '@/components/Loading'
import Sort from '@/components/Sort'
import Empty from './components/Empty'
import API from '@/services/requests'
import useUrlParams from '@/use/useUrlParams'
import usePagination from '@/use/usePagination'
import useSorting from '@/use/useSorting'
import useCollection from '@/use/useCollection'
import useCurrentUser from '@/use/useCurrentUser'

const { user } = useCurrentUser()
const isCurrentUser = (member) => member.userId === user.value.id

const SORT_OPTIONS = {
  id_desc: { name: 'Creation time: newest', value: 'id_desc' },
  id_asc: { name: 'Creation time: oldest', value: 'id_asc' },
  name_asc: { name: 'Name A-Z', value: 'name_asc' },
  name_desc: { name: 'Name Z-A', value: 'name_desc' },
}

const project = ref({})
const defaultSorting = SORT_OPTIONS.name_asc.value
const sort = useSorting(defaultSorting)
const { id } = useUrlParams()
const { collection, total, loading, setCollection } = useCollection()
const pagination = usePagination({ collection, total })
const { page } = pagination

const fetchCollection = () => {
  API.fetchProject(id)
    .then((res) => (project.value = res.data))
    .then((result) =>
      API.fetchMembers(
        {
          'filter.projectId': result.id,
          page: page.value,
          sort: sort.value,
        },
        { refresh: true }
      )
    )
    .then((res) => setCollection(res.data))
}

const onDeleteConfirmed = (member) => {
  API.deleteMember(member.id).then((res) => {
    window.Toast.success(`Member ${member.name} deleted successfully.`)
    fetchCollection()
  })
}

const onDelete = (member) =>
  window.Modal.confirmDelete({
    name: member.name,
    onConfirm: () => onDeleteConfirmed(member),
  })

watch([page, sort], fetchCollection)
fetchCollection()
</script>
