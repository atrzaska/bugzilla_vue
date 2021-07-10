import { ref } from 'vue'

const DELAY = 5000

const uid = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2)

const useToast = (options = {}) => {
  const delay = options.delay || DELAY
  const notifications = ref([])

  const deleteNotification = (notification) => {
    const index = notifications.value.indexOf(notification)
    notifications.value.splice(index, 1)
  }
  const fire = (message, kind) => {
    const notification = { id: uid(), message, kind }
    notifications.value.push(notification)
    setTimeout(() => deleteNotification(notification), delay)
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
