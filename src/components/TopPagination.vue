<template>
  <div
    v-if="showPagination"
    class="d-flex justify-content-end align-items-center"
  >
    <a v-if="hasPreviousPage" href="" @click.prevent="previousPage()">
      <div class="pr-2 text-primary">
        <i class="fas fa-chevron-left" />
      </div>
    </a>
    <div v-else class="pr-2">
      <i class="fas fa-chevron-left" />
    </div>
    <input
      type="text"
      class="form-control text-center col-2 mr-2"
      :value="page"
      @change="onPageChange"
    />
    <span>of {{ totalPages }}</span>
    <a v-if="hasNextPage" href="" @click.prevent="nextPage()">
      <div class="pl-2 text-primary">
        <i class="fas fa-chevron-right" />
      </div>
    </a>
    <div v-else class="pl-2">
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
