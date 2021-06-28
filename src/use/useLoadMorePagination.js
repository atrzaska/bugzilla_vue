import { ref, computed } from 'vue'

const SIZE = 10

const useLoadMorePagination = (options = {}) => {
  const size = options.size || SIZE
  const collection = options.collection || ref([])
  const total = options.total || ref(0)
  const offset = ref(0)
  const hasNextPage = computed(() => collection.value.length < total.value)

  const loadMore = () => (offset.value = collection.value.length)

  const setCollection = (data) => {
    collection.value = collection.value.concat(data.collection)
    total.value = data.total
  }

  const reset = () => {
    collection.value = []
    total.value = 0
    offset.value = 0
  }

  return {
    collection,
    total,
    offset,
    hasNextPage,
    loadMore,
    setCollection,
    reset,
  }
}

export default useLoadMorePagination
