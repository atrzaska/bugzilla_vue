<template>
  <AppLayout>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>qwe</h1>
      <router-link class="btn btn-primary" to="/projects/qwe/stories/new">
        New
      </router-link>
    </div>
    <ProjectTabs />
    <table class="table">
      <thead>
        <tr>
          <th class="border-0">Name</th>
          <th class="border-0">State</th>
          <th class="border-0">Type</th>
          <th class="border-0">Container</th>
          <th class="border-0">Tasks</th>
          <th class="border-0">Comments</th>
          <th class="border-0 w-1">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a href="/projects/qwe/stories/1/edit">MyStory</a>
          </td>
          <td>unstarted</td>
          <td>feature</td>
          <td>icebox</td>
          <td>0</td>
          <td>0</td>
          <td>
            <div class="btn-group">
              <a
                class="btn btn-outline-primary d-flex align-items-center border-right-0"
                data-csrf="RzRGUFl9NEU_N24YVRkKUisdMwQWVS4hvrpdoEV7mrZz9Vh3jsTqDxXq"
                data-method="put"
                data-to="/projects/qwe/stories/1?story[state]=started"
                href="/projects/qwe/stories/1?story[state]=started"
                rel="nofollow"
              >
                Start
              </a>
              <a
                class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split border-left-0"
                data-toggle="dropdown"
              >
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <router-link
                  class="dropdown-item"
                  to="/projects/qwe/stories/1/edit"
                >
                  Edit
                </router-link>
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item"
                  data-confirm="Are you sure?"
                  data-csrf="RzRGUFl9NEU_N24YVRkKUisdMwQWVS4hvrpdoEV7mrZz9Vh3jsTqDxXq"
                  data-method="delete"
                  data-to="/projects/qwe/stories/1"
                  href="/projects/qwe/stories/1"
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
import ProjectTabs from '@/components/ProjectTabs'
</script>
