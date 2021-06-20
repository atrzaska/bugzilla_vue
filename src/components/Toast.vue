<template>
  <div class="notification-wrapper">
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="my-toast d-flex mb-2 animate__animated animate__fadeInRight"
      :style="{ top: notification.top }"
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
const OPTIONS = {
  success: { icon: 'fas fa-check-circle fa-3x', color: 'bg-success' },
  error: { icon: 'fas fa-exclamation-circle fa-3x', color: 'bg-danger' },
  warning: { icon: 'fas fa-exclamation-triangle fa-3x', color: 'bg-warning' },
  info: { icon: 'fas fa-info-circle fa-3x', color: 'bg-info' },
}

const notifications = ref([])

const fire = (message, options) => {
  notifications.value.push({
    message,
    icon: options.icon,
    color: options.color,
  })
  setTimeout(() => notifications.value.splice(0, 1), DELAY)
}

const Toast = {
  success: (msg) => fire(msg, OPTIONS.success),
  error: (msg) => fire(msg, OPTIONS.error),
  warning: (msg) => fire(msg, OPTIONS.warning),
  info: (msg) => fire(msg, OPTIONS.info),
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

.my-toast {
  flex-basis: 350px;
  max-width: 350px;
  font-size: 0.875rem;
  background-color: #ffffffd9;
  background-clip: padding-box;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%);
  border-radius: 0.25rem;
}
</style>
