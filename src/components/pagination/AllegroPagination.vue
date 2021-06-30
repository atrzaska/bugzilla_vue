<template>
  <nav v-if="showPagination" aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li v-if="hasPreviousPage" class="page-item">
        <a @click.prevent="previousPage()" class="page-link" href="#">
          <i class="fas fa-chevron-left" />
          <span class="ms-3 text-primary">PREVIOUS</span>
        </a>
      </li>

      <li v-if="isBeginning" :class="['page-item', activePageClass(1)]">
        <a @click.prevent="goToPage(1)" class="page-link" href="#">1</a>
      </li>
      <li v-if="isBeginning" :class="['page-item', activePageClass(2)]">
        <a @click.prevent="goToPage(2)" class="page-link" href="#">2</a>
      </li>
      <li v-if="isBeginning" :class="['page-item', activePageClass(3)]">
        <a @click.prevent="goToPage(3)" class="page-link" href="#">3</a>
      </li>
      <li v-if="isBeginning" :class="['page-item', activePageClass(4)]">
        <a @click.prevent="goToPage(4)" class="page-link" href="#">4</a>
      </li>
      <li v-if="isBeginning" :class="['page-item', activePageClass(5)]">
        <a @click.prevent="goToPage(5)" class="page-link" href="#">5</a>
      </li>

      <li v-if="isMiddle || isEnd" class="page-item">
        <a @click.prevent="goToPage(1)" class="page-link" href="#">1</a>
      </li>
      <li v-if="isMiddle || isEnd" class="page-item">
        <a class="page-link text-dark">...</a>
      </li>

      <li v-if="isMiddle" class="page-item">
        <a @click.prevent="goToPage(page - 2)" class="page-link" href="#">
          {{ page - 2 }}
        </a>
      </li>
      <li v-if="isMiddle" class="page-item">
        <a @click.prevent="goToPage(page - 1)" class="page-link" href="#">
          {{ page - 1 }}
        </a>
      </li>
      <li v-if="isMiddle" class="page-item active">
        <a class="page-link">{{ page }}</a>
      </li>
      <li v-if="isMiddle" class="page-item">
        <a @click.prevent="goToPage(page + 1)" class="page-link" href="#">
          {{ page + 1 }}
        </a>
      </li>
      <li v-if="isMiddle" class="page-item">
        <a @click.prevent="goToPage(page + 2)" class="page-link" href="#">
          {{ page + 2 }}
        </a>
      </li>

      <li v-if="isEnd" :class="['page-item', activePageClass(totalPages - 4)]">
        <a @click.prevent="goToPage(totalPages - 4)" class="page-link" href="#">
          {{ totalPages - 4 }}
        </a>
      </li>
      <li v-if="isEnd" :class="['page-item', activePageClass(totalPages - 3)]">
        <a @click.prevent="goToPage(totalPages - 3)" class="page-link" href="#">
          {{ totalPages - 3 }}
        </a>
      </li>
      <li v-if="isEnd" :class="['page-item', activePageClass(totalPages - 2)]">
        <a @click.prevent="goToPage(totalPages - 2)" class="page-link" href="#">
          {{ totalPages - 2 }}
        </a>
      </li>
      <li v-if="isEnd" :class="['page-item', activePageClass(totalPages - 1)]">
        <a @click.prevent="goToPage(totalPages - 1)" class="page-link" href="#">
          {{ totalPages - 1 }}
        </a>
      </li>
      <li v-if="isEnd" :class="['page-item', activePageClass(totalPages)]">
        <a @click.prevent="goToPage(totalPages)" class="page-link" href="#">
          {{ totalPages }}
        </a>
      </li>

      <li class="page-item disabled">
        <a class="page-link text-dark">of</a>
      </li>
      <li class="page-item disabled">
        <a class="page-link text-dark">{{ totalPages }}</a>
      </li>

      <li v-if="hasNextPage" class="page-item">
        <a @click.prevent="nextPage()" href="#" class="page-link">
          <span class="me-3 text-primary">NEXT</span>
          <i class="fas fa-chevron-right" />
        </a>
      </li>
    </ul>
  </nav>
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
  activePageClass,
} = pagination

const isBeginning = computed(() => page.value < 5)
const isEnd = computed(() => page.value > totalPages.value - 4)
const isMiddle = computed(() => !isBeginning.value && !isEnd.value)
</script>

<style scoped>
.page-item.disabled .page-link {
  color: #666;
}
</style>
