<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h5>{{ project.name }}</h5>
      <router-link
        v-if="project.isOwner"
        class="btn btn-primary"
        :to="`/projects/${id}/members/new`"
      >
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
                  class="rounded-circle me-2"
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
              <div class="d-flex justify-content-end dropdown">
                <a
                  class="btn btn-outline-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img :src="threeDots" />
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <template v-if="isCurrentUser(item)">
                    <a
                      href="#"
                      @click="onLeaveProject(item)"
                      class="dropdown-item"
                    >
                      Leave project...
                    </a>
                  </template>
                  <template v-else>
                    <router-link
                      :to="`/projects/${id}/people/${item.id}/edit`"
                      class="dropdown-item"
                    >
                      Change role
                    </router-link>
                    <div class="dropdown-divider" />
                    <a
                      href="#"
                      @click.prevent="onRemoveFromProject(item)"
                      class="dropdown-item"
                    >
                      Remove from project...
                    </a>
                  </template>
                </div>
              </div>
            </td>
            <td v-else>
              <a
                v-if="isCurrentUser(item)"
                href="#"
                @click="onLeaveProject(item)"
                class="btn btn-danger"
              >
                Leave
              </a>
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
import { useRouter } from 'vue-router'
import AppLayout from '@/layouts/App'
import ProjectTabs from '@/components/ProjectTabs'
import TopPagination from '@/components/pagination/TopPagination'
import XrmPagination from '@/components/pagination/XrmPagination'
import Loading from '@/components/Loading'
import Sort from '@/components/Sort'
import Empty from './components/Empty'
import threeDots from '@/assets/threeDots.svg'
import API from '@/services/requests'
import useUrlParams from '@/hooks/useUrlParams'
import usePagination from '@/hooks/usePagination'
import useSorting from '@/hooks/useSorting'
import useCollection from '@/hooks/useCollection'
import useCurrentUser from '@/hooks/useCurrentUser'

const router = useRouter()
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

const onLeaveProjectConfirmed = (member) =>
  API.deleteMember(member.id).then((res) => {
    window.Toast.success(
      `You removed yourself from project ${project.value.name}.`
    )
    router.push('/projects')
  })

const onLeaveProject = (member) =>
  window.Modal.confirmDelete({
    title: `You are about to leave project ${project.value.name}`,
    onConfirm: () => onLeaveProjectConfirmed(member),
  })

const onRemoveFromProjectConfirmed = (member) =>
  API.deleteMember(member.id).then((res) => {
    window.Toast.success(
      `You removed ${member.name} from project ${project.value.name}.`
    )
    fetchCollection()
  })

const onRemoveFromProject = (member) =>
  window.Modal.confirmDelete({
    title: `You are about to remove ${member.name} from project ${project.value.name}`,
    onConfirm: () => onRemoveFromProjectConfirmed(member),
  })

watch(sort, () => (page.value = 1))
watch([page, sort], fetchCollection)
fetchCollection()
</script>
