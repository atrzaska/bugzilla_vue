<template>
  <div class="d-flex justify-content-between align-items-center mb-4">
    <h1>qwe</h1>
    <a class="btn btn-primary" href="/projects/qwe/stories/new"> New </a>
  </div>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" href="/projects/qwe/current">Current</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/projects/qwe/backlog">Backlog</a>
    </li>
    <li class="active nav-item">
      <a class="active nav-link" href="/projects/qwe/icebox"> Icebox </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/projects/qwe/done">Done</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/projects/qwe/people">Members</a>
    </li>
  </ul>
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
              <a class="dropdown-item" href="/projects/qwe/stories/1/edit">
                Edit
              </a>
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
</template>
