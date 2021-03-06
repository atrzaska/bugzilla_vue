import { ref, computed } from 'vue'
import QueryParams from '@/services/QueryParams'

const SIZE = 10

const usePagination = (options = {}) => {
  const initialPage = parseInt(QueryParams.get('page')) || 1
  const size = options.size || SIZE
  const collection = options.collection || ref([])
  const total = options.total || ref(1)
  const page = ref(initialPage)
  const offset = ref(0)
  const totalPages = computed(() => Math.ceil(total.value / size))
  const showPagination = computed(() => totalPages.value > 1)
  const hasPreviousPage = computed(() => page.value > 1)
  const hasNextPage = computed(() => page.value < totalPages.value)
  const pageLastItem = computed(() => Math.min(page.value * size, total.value))
  const pageFirstItem = computed(() =>
    collection.value.length === 0 ? 0 : (page.value - 1) * size + 1
  )

  const activePageClass = (val) => (page.value === val ? 'active' : '')

  const goToPage = (val) => {
    if (isNaN(val) || val > totalPages.value || val < 1) {
      return
    }

    page.value = val
    offset.value = (val - 1) * size
    QueryParams.setWithDefault('page', val, 1)
  }

  const previousPage = () => goToPage(page.value - 1)
  const nextPage = () => goToPage(page.value + 1)

  return {
    collection,
    total,
    page,
    size,
    offset,
    totalPages,
    showPagination,
    hasPreviousPage,
    hasNextPage,
    pageFirstItem,
    pageLastItem,
    previousPage,
    nextPage,
    goToPage,
    activePageClass,
  }
}

export default usePagination
