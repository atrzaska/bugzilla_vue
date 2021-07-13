<template>
  <nav v-if="showPagination" aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li v-if="hasPreviousPage" class="page-item">
        <button @click="previousPage" class="page-link">
          <i class="fas fa-chevron-left" />
        </button>
      </li>
      <li v-else class="page-item disabled">
        <button class="page-link">
          <i class="fas fa-chevron-left" />
        </button>
      </li>
      <li
        v-for="visiblePage in visiblePages"
        :key="visiblePage"
        :class="['page-item', activePageClass(visiblePage)]"
      >
        <button @click="goToPage(visiblePage)" class="page-link">
          {{ visiblePage }}
        </button>
      </li>
      <li v-if="hasNextPage" class="page-item">
        <button @click="nextPage" class="page-link">
          <i class="fas fa-chevron-right" />
        </button>
      </li>
      <li v-else class="page-item disabled">
        <button class="page-link">
          <i class="fas fa-chevron-right" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({ pagination: Object })

const { pagination } = props
const {
  showPagination,
  hasPreviousPage,
  previousPage,
  hasNextPage,
  nextPage,
  page,
  totalPages,
  goToPage,
  activePageClass,
} = pagination

const MORE_ITEMS_TO_SHOW = 3 // current page + 2 more items

const visiblePages = computed(() => {
  const result = []

  for (var i = 1; i <= totalPages.value; i++) {
    const diff = Math.abs(i - page.value)

    if (diff <= MORE_ITEMS_TO_SHOW) {
      result.push(i)
    }
  }

  return result
})
</script>
