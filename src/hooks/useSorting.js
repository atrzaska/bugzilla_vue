import { ref, watch } from 'vue'
import QueryParams from '@/services/QueryParams'

const useSorting = (initialValue = '') => {
  const sort = ref(QueryParams.get('sort') || initialValue)

  watch(sort, (sort) => QueryParams.setWithDefault('sort', sort, initialValue))

  return sort
}

export default useSorting
