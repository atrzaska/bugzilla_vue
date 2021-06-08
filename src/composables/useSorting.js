import { ref, watch } from 'vue'
import queryParams from '@/helpers/queryParams'

const useSorting = (initialValue = '') => {
  const sort = ref(queryParams.get('sort') || initialValue)

  watch(sort, (sort) => queryParams.set({ sort }))

  return sort
}

export default useSorting
