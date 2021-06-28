import { ref } from 'vue'

const DELAY = 5000

const useToast = (options = {}) => {
  const delay = options.delay || DELAY
  const notifications = ref([])

  const deleteNotification = (index) => {
    notifications.value.splice(index, 1)
  }
  const fire = (message, kind) => {
    notifications.value.push({ message, kind })
    setTimeout(() => deleteNotification(0), delay)
  }

  const Toast = {
    success: (msg) => fire(msg, 'success'),
    error: (msg) => fire(msg, 'danger'),
    warning: (msg) => fire(msg, 'warning'),
    info: (msg) => fire(msg, 'info'),
  }

  return { Toast, notifications, deleteNotification }
}

export default useToast
