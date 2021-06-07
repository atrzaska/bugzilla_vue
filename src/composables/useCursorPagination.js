import usePagination from './usePagination'

const PER_PAGE = 10

const useCursorPagination = (fetchCollection) => {
  const {
    collection,
    total,
    currentPage,
    totalPages,
    showPagination,
    hasPreviousPage,
    hasNextPage,
    currentPageFirstItem,
    currentPageLastItem,
  } = usePagination()

  const goToPage = (page) => {
    const offset = (page - 1) * PER_PAGE

    fetchCollection({ offset }).then((res) => {
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

export default useCursorPagination
