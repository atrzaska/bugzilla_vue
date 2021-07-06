import { ref } from 'vue'

const useSideDrawer = () => {
  const show = ref(false)
  const open = () => (show.value = true)
  const close = () => (show.value = false)

  return { show, open, close }
}

export default useSideDrawer
