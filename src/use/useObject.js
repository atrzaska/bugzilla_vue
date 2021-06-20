import { ref } from 'vue'

const useObject = (initialObject = {}) => {
  const object = ref(initialObject)
  const loading = ref(true)
  const setObject = (obj) => {
    loading.value = false
    object.value = obj
  }

  return { object, loading, setObject }
}

export default useObject
