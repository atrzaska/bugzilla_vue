import { ref, computed, watch } from 'vue'

const PER_PAGE = 10

const usePagination = (fetchCollection, per = PER_PAGE) => {
  const collection = ref([])
  const total = ref(0)
  const currentPage = ref(1)
  const totalPages = computed(() => Math.ceil(total.value / per))
  const showPagination = computed(() => totalPages.value > 1)
  const hasPreviousPage = computed(() => currentPage.value > 1)
  const hasNextPage = computed(() => currentPage.value < totalPages.value)
  const currentPageValid = computed(
    () => currentPage.value <= totalPages && currentPage.value > 0
  )
  console.log({ totalPages, total })

  const currentPageLastItem = computed(() =>
    Math.min(currentPage.value * per, total.value)
  )
  const currentPageFirstItem = computed(() =>
    collection.value.length === 0 ? 0 : (currentPage.value - 1) * per + 1
  )

  const goToPage = (page) => {
    fetchCollection({ page }).then((res) => {
      collection.value = res.data.collection
      total.value = res.data.total
      currentPage.value = page
    })
  }
  const previousPage = () => goToPage(currentPage.value - 1)
  const nextPage = () => goToPage(currentPage.value + 1)
  const loadFirstPage = () => goToPage(1)

  return {
    collection,
    total,
    currentPage,
    totalPages,
    showPagination,
    hasPreviousPage,
    hasNextPage,
    currentPageFirstItem,
    currentPageLastItem,
    previousPage,
    nextPage,
    goToPage,
    loadFirstPage,
  }
}

export default usePagination
