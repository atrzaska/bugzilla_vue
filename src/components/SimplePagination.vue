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
import { defineProps } from 'vue'

const props = defineProps({ pagination: Object })

const { pagination } = props
const {
  showPagination,
  hasPreviousPage,
  previousPage,
  hasNextPage,
  nextPage,
  page,
  visiblePages,
  goToPage,
} = pagination
</script>
