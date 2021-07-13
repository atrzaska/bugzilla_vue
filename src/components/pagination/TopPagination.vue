<template>
  <div
    v-if="showPagination"
    class="d-flex justify-content-end align-items-center"
  >
    <button
      v-if="hasPreviousPage"
      @click="previousPage"
      class="btn btn-link p-0 border-0"
    >
      <div class="pe-2 text-primary">
        <i class="fas fa-chevron-left" />
      </div>
    </button>
    <div v-else class="pe-2">
      <i class="fas fa-chevron-left" />
    </div>
    <div class="col-2 me-2">
      <input
        type="text"
        class="form-control text-center"
        :value="page"
        @change="onPageChange"
      />
    </div>
    <span>of {{ totalPages }}</span>
    <button
      v-if="hasNextPage"
      @click="nextPage"
      class="btn btn-link p-0 border-0"
    >
      <div class="ps-2 text-primary">
        <i class="fas fa-chevron-right" />
      </div>
    </button>
    <div v-else class="ps-2">
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
  page,
  totalPages,
  previousPage,
  nextPage,
  goToPage,
} = pagination

const onPageChange = (e) => {
  const val = parseInt(e.target.value)

  if (isNaN(val)) {
    goToPage(1)
    e.target.value = 1
  } else if (val < 1) {
    goToPage(1)
    e.target.value = 1
  } else if (val > totalPages.value) {
    goToPage(totalPages.value)
    e.target.value = totalPages.value
  } else {
    goToPage(val)
  }
}
</script>
