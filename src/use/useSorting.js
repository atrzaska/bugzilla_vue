import { ref, watch } from 'vue'
import QueryParams from '@/helpers/QueryParams'

const useSorting = (initialValue = '') => {
  const sort = ref(QueryParams.get('sort') || initialValue)

  watch(sort, (sort) => QueryParams.set({ sort }))

  return sort
}

export default useSorting
