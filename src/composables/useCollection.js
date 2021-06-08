import { ref } from 'vue'

const useCollection = () => {
  const collection = ref([])
  const total = ref(1)

  const setCollection = (res) => {
    collection.value = res.data.collection
    total.value = res.data.total
  }
  return { collection, total, setCollection }
}

export default useCollection
