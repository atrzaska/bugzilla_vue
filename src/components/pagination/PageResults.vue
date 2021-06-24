<template>
  <nav v-if="showPagination" aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link text-dark">
          {{ first }}-{{ last }} of {{ total }} results
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
  total,
  pageFirstItem: first,
  pageLastItem: last,
} = pagination
</script>
