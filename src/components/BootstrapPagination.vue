<template>
  <div v-if="showPagination">
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li v-if="hasPreviousPage" class="page-item">
          <a
            @click.prevent="previousPage()"
            class="page-link"
            href="#"
            tabindex="-1"
          >
            <i class="fas fa-chevron-left" />
          </a>
        </li>
        <li v-else class="page-item disabled">
          <a class="page-link" tabindex="-1">
            <i class="fas fa-chevron-left" />
          </a>
        </li>
        <li
          v-for="visiblePage in visiblePages"
          :key="visiblePage"
          :class="['page-item', page === visiblePage && 'active']"
        >
          <a @click.prevent="goToPage(visiblePage)" class="page-link" href="#">
            {{ visiblePage }}
          </a>
        </li>
        <li v-if="hasNextPage" class="page-item">
          <a @click.prevent="nextPage()" href="#" class="page-link">
            <i class="fas fa-chevron-right" />
          </a>
        </li>
        <li v-else class="page-item disabled">
          <a class="page-link" tabindex="-1">
            <i class="fas fa-chevron-right" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
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
