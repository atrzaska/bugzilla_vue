import { ref } from 'vue'

const useCollection = () => {
  const collection = ref([])
  const total = ref(1)
  const loading = ref(true)

  const setCollection = (data) => {
    collection.value = data.collection
    total.value = data.total
    loading.value = false
  }

  return { collection, total, loading, setCollection }
}

export default useCollection
