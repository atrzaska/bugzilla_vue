<template>
  <nav v-if="showPagination" aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li v-if="hasPreviousPage" class="page-item">
        <a @click.prevent="previousPage()" class="page-link" href="#">
          <i class="fas fa-chevron-left" />
        </a>
      </li>
      <li v-else class="page-item disabled">
        <a class="page-link">
          <i class="fas fa-chevron-left" />
        </a>
      </li>
      <li class="page-item disabled">
        <a class="page-link text-dark">{{ page }} of {{ totalPages }}</a>
      </li>
      <li v-if="hasNextPage" class="page-item">
        <a @click.prevent="nextPage()" href="#" class="page-link">
          <i class="fas fa-chevron-right" />
        </a>
      </li>
      <li v-else class="page-item disabled">
        <a class="page-link">
          <i class="fas fa-chevron-right" />
        </a>
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
