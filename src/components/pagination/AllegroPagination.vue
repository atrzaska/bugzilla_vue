<template>
  <nav v-if="showPagination" aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li v-if="hasPreviousPage" class="page-item">
        <button @click="previousPage" class="page-link">
          <i class="fas fa-chevron-left" />
          <span class="ms-3 text-primary">PREVIOUS</span>
        </button>
      </li>

      <template v-if="totalPages <= 7">
        <Li :show="totalPages >= 1" :page="1" :pagination="pagination" />
        <Li :show="totalPages >= 2" :page="2" :pagination="pagination" />
        <Li :show="totalPages >= 3" :page="3" :pagination="pagination" />
        <Li :show="totalPages >= 4" :page="4" :pagination="pagination" />
        <Li :show="totalPages >= 5" :page="5" :pagination="pagination" />
        <Li :show="totalPages >= 6" :page="6" :pagination="pagination" />
        <Li :show="totalPages >= 7" :page="7" :pagination="pagination" />
      </template>
      <template v-else>
        <Li :show="isBeginning" :page="1" :pagination="pagination" />
        <Li :show="isBeginning" :page="2" :pagination="pagination" />
        <Li :show="isBeginning" :page="3" :pagination="pagination" />
        <Li :show="isBeginning" :page="4" :pagination="pagination" />
        <Li :show="isBeginning" :page="5" :pagination="pagination" />

        <Li :show="isMiddle || isEnd" :page="1" :pagination="pagination" />
        <li v-if="isMiddle || isEnd" class="page-item disabled">
          <button class="page-link text-dark">...</button>
        </li>
        <Li :show="isMiddle" :page="page - 2" :pagination="pagination" />
        <Li :show="isMiddle" :page="page - 1" :pagination="pagination" />
        <Li :show="isMiddle" :page="page" :pagination="pagination" />
        <Li :show="isMiddle" :page="page + 1" :pagination="pagination" />
        <Li :show="isMiddle" :page="page + 2" :pagination="pagination" />

        <Li :show="isEnd" :page="totalPages - 4" :pagination="pagination" />
        <Li :show="isEnd" :page="totalPages - 3" :pagination="pagination" />
        <Li :show="isEnd" :page="totalPages - 2" :pagination="pagination" />
        <Li :show="isEnd" :page="totalPages - 1" :pagination="pagination" />
        <Li :show="isEnd" :page="totalPages" :pagination="pagination" />
      </template>

      <li class="page-item disabled">
        <button class="page-link text-dark">of</button>
      </li>
      <li class="page-item disabled">
        <button class="page-link text-dark">{{ totalPages }}</button>
      </li>

      <li v-if="hasNextPage" class="page-item">
        <button @click="nextPage" class="page-link">
          <span class="me-3 text-primary">NEXT</span>
          <i class="fas fa-chevron-right" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import Li from '@/components/pagination/Li'

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

const isBeginning = computed(() => page.value < 5)
const isEnd = computed(() => page.value > totalPages.value - 4)
const isMiddle = computed(() => !isBeginning.value && !isEnd.value)
</script>
