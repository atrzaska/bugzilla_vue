import { ref } from 'vue'

const useObject = () => {
  const object = ref({})
  const loading = ref(true)
  const setObject = (res) => {
    loading.value = false
    object.value = res.data
  }

  return { object, loading, setObject }
}

export default useObject
