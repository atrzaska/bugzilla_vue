<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>qwe</h1>
      <router-link class="btn btn-primary" to="/invites/new">
        Invite member
      </router-link>
    </div>
    <ProjectTabs />
    <table class="table">
      <thead>
        <tr>
          <th class="border-0">Name</th>
          <th class="border-0">Role</th>
          <th class="border-0 w-1">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img
                class="rounded-circle mr-2"
                height="48"
                src="/images/nobody-571bcf8e09d39096dccf93b6f557bee5.jpg?vsn=d"
                with="48"
              />
              <div class="d-flex flex-column">
                <b>You • Andrzej Trzaska</b>
                <div class="text-secondary">atrzaska2@gmail.com</div>
              </div>
            </div>
          </td>
          <td>owner</td>
          <td>
            <div class="dropdown">
              <a
                class="btn btn-outline-primary dropdown-toggle"
                data-toggle="dropdown"
              >
                <i class="fas fa-cog"> </i>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a
                  class="dropdown-item"
                  data-confirm="Are you sure?"
                  data-csrf="XBVlAXJqUTVlI2RVODpQVDUfHSoxeiUmmSS5DR3G7fP7Tu25tqz_cWSv"
                  data-method="delete"
                  data-to="/projects/qwe/members/1"
                  href="/projects/qwe/members/1"
                  rel="nofollow"
                >
                  Leave project...
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
import ProjectTabs from '@/components/ProjectTabs'
</script>
