<template>
  <div class="notification-wrapper">
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="toast fade show d-flex mb-2 cursor-pointer"
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
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 20;
}
</style>
