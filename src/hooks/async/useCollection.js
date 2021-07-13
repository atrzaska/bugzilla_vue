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

  const appendCollection = (data) => {
    collection.value = collection.value.concat(data.collection)
    total.value = data.total
    loading.value = false
  }

  const reset = () => {
    collection.value = []
    total.value = 0
  }

  const startLoading = () => {
    loading.value = true
  }

  const stopLoading = () => {
    loading.value = false
  }

  return {
    collection,
    total,
    loading,
    setCollection,
    appendCollection,
    reset,
    startLoading,
    stopLoading,
  }
}

export default useCollection
