<template>
  <div
    v-if="showPagination"
    class="d-flex justify-content-end align-items-center"
  >
    <a v-if="hasPreviousPage" href="" @click.prevent="previousPage()">
      <div class="px-2 text-primary">
        <i class="fas fa-chevron-left" />
      </div>
    </a>
    <div v-else class="px-2">
      <i class="fas fa-chevron-left" />
    </div>
    <input
      type="text"
      class="form-input col-2 mr-2"
      v-model.lazy.number="currentPage"
    />
    <span>of {{ totalPages }}</span>
    <a v-if="hasNextPage" href="" @click.prevent="nextPage()">
      <div class="px-2 text-primary">
        <i class="fas fa-chevron-right" />
      </div>
    </a>
    <div v-else class="px-2">
      <i class="fas fa-chevron-right" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({ pagination: Object })

const { pagination } = props
const {
  showPagination,
  hasPreviousPage,
  hasNextPage,
  currentPage,
  totalPages,
  previousPage,
  nextPage,
  currentPageValid,
} = pagination
</script>
