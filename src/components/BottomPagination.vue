<template>
  <div class="d-flex justify-content-between align-items-center">
    <span>{{ first }}-{{ last }} of {{ total }}</span>
    <div
      v-if="showPagination"
      class="d-flex justify-content-center align-items-center"
    >
      <a v-if="hasPreviousPage" href="" @click.prevent="previousPage()">
        <div class="pr-2 text-primary">
          <i class="fas fa-chevron-left" />
        </div>
      </a>
      <div v-else class="pr-2">
        <i class="fas fa-chevron-left" />
      </div>
      <span>{{ page }} of {{ totalPages }}</span>
      <a v-if="hasNextPage" href="" @click.prevent="nextPage()">
        <div class="pl-2 text-primary">
          <i class="fas fa-chevron-right" />
        </div>
      </a>
      <div v-else class="pl-2">
        <i class="fas fa-chevron-right" />
      </div>
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
  total,
  pageFirstItem: first,
  pageLastItem: last,
} = pagination
</script>
