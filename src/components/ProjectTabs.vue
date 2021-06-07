<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link class="nav-link" to="/projects/qwe/current">
        Current
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/projects/qwe/backlog">
        Backlog
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/projects/qwe/icebox">
        Icebox
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/projects/qwe/done">Done</router-link>
    </li>
    <li class="active nav-item">
      <router-link class="active nav-link" to="/projects/qwe/members">
        Members
      </router-link>
    </li>

    <router-link class="nav-item" tag="li" to="/projects/qwe/members">
      <a class="nav-link">New Members</a>
    </router-link>
  </ul>
</template>
