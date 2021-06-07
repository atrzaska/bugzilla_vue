import { ref, computed } from 'vue'

const useLoadMorePagination = (fetchCollection) => {
  const collection = ref([])
  const total = ref(0)
  const hasNextPage = computed(() => collection.value.length < total.value)
  const offset = computed(() => collection.value.length)

  const loadMore = () => {
    fetchCollection({ offset: offset.value }).then((res) => {
      collection.value = collection.value.concat(res.data.collection)
      total.value = res.data.total
    })
  }
  const loadFirstPage = () => loadMore()

  return {
    collection,
    total,
    hasNextPage,
    loadMore,
    loadFirstPage,
  }
}

export default useLoadMorePagination
