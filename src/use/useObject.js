import { ref } from 'vue'

const useObject = async (fetchResource) => {
  const object = ref(null)
  const loading = ref(true)
  const fetchObject = () =>
    fetchResource.then((res) => (object.value = res.data))

  return { object, loading, fetchObject }
}

export default useObject
