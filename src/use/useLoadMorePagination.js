// TODO: unused file
import { ref, computed } from 'vue'

const SIZE = 10

const useLoadMorePagination = (options = {}) => {
  const size = options.size || SIZE
  const collection = options.collection || ref([])
  const total = options.total || ref(0)
  const offset = ref(0)
  const hasNextPage = computed(() => collection.value.length < total.value)

  const loadMore = () => {
    offset.value = collection.value + size

    // fetchCollection({ offset: offset.value }).then((res) => {
    //   collection.value = collection.value.concat(res.data.collection)
    //   total.value = res.data.total
    // })
  }

  return {
    collection,
    total,
    offset,
    hasNextPage,
    loadMore,
  }
}

export default useLoadMorePagination
