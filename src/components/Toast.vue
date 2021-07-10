<template>
  <div class="notification-wrapper">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="toast border-0 fade show mb-2 cursor-pointer ms-auto fade-in"
      @click="deleteNotification(notification)"
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
