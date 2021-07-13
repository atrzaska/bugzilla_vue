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
      <li class="page-item disabled">
        <button class="page-link text-dark">
          {{ page }} of {{ totalPages }}
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
import { defineProps } from 'vue'

const props = defineProps({ pagination: Object })

const { pagination } = props
const {
  showPagination,
  hasPreviousPage,
  hasNextPage,
  page,
  totalPages,
  previousPage,
  nextPage,
} = pagination
</script>
