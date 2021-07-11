import { ref, computed } from 'vue'

const useLoadMorePagination = (options = {}) => {
  const collection = options.collection
  const total = options.total
  const offset = ref(0)
  const hasNextPage = computed(() => collection.value.length < total.value)

  const loadMore = () => (offset.value = collection.value.length)
  const reset = () => (offset.value = 0)

  return {
    collection,
    total,
    offset,
    hasNextPage,
    loadMore,
    reset,
  }
}

export default useLoadMorePagination
