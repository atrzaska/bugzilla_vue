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
import useToast from '@/hooks/useToast'

const { Toast, notifications, deleteNotification } = useToast()

window.Toast = Toast
</script>
