import { ref } from 'vue'

const useCollection = () => {
  const collection = ref([])
  const total = ref(1)
  const loading = ref(true)

  const setCollection = (res) => {
    collection.value = res.data.collection
    total.value = res.data.total
    loading.value = false
  }
  return { collection, total, loading, setCollection }
}

export default useCollection
