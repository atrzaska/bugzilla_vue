<template>
  <div class="notification-wrapper">
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="toast border-0 fade show mb-2 cursor-pointer ms-auto fade-in"
      @click="deleteNotification(index)"
    >
      <div :class="`toast-body alert-${notification.kind} p-3 rounded`">
        {{ notification.message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import useToast from '@/use/useToast'

const { Toast, notifications, deleteNotification } = useToast()

window.Toast = Toast
</script>

<style>
.notification-wrapper {
  display: grid;
  position: fixed;
  top: 60px;
  right: 20px;
  z-index: 20;
}

.fade-in {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
