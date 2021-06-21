<template>
  <div class="notification-wrapper">
    <a href="#" @click.prevent="deleteNotification(index)"> </a>
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="toast d-flex mb-2 animate__animated animate__fadeInRight"
      @click="deleteNotification(index)"
    >
      <div :class="['indicator rounded-left', notification.color]"></div>
      <div class="d-flex align-items-center px-3 py-2 rounded-right">
        <div class="toast-body">{{ notification.message }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const DELAY = 5000
const notifications = ref([])

const deleteNotification = (index) => {
  notifications.value.splice(index, 1)
}
const fire = (message, color) => {
  notifications.value.push({ message, color })
  setTimeout(() => deleteNotification(0), DELAY)
}

const Toast = {
  success: (msg) => fire(msg, 'bg-success'),
  error: (msg) => fire(msg, 'bg-danger'),
  warning: (msg) => fire(msg, 'bg-warning'),
  info: (msg) => fire(msg, 'bg-info'),
}

window.Toast = Toast
</script>

<style>
.indicator {
  width: 5px;
}

.notification-wrapper {
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 20;
}
</style>
