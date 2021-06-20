import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
  showClass: {
    popup: 'animate__animated animate__slideInRight',
  },
  hideClass: {
    popup: 'animate__animated animate__slideOutRight',
  },
})

const success = (title) => Toast.fire({ icon: 'success', title })
const error = (title) => Toast.fire({ icon: 'error', title })
const warning = (title) => Toast.fire({ icon: 'warning', title })
const info = (title) => Toast.fire({ icon: 'info', title })

export default { success, error, warning, info }
