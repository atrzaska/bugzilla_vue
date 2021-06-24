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

      <li v-if="isBeginning" :class="['page-item', page === 1 && 'active']">
        <a @click.prevent="goToPage(1)" class="page-link" href="#">1</a>
      </li>
      <li v-if="isBeginning" :class="['page-item', page === 2 && 'active']">
        <a @click.prevent="goToPage(2)" class="page-link" href="#">2</a>
      </li>
      <li v-if="isBeginning" :class="['page-item', page === 3 && 'active']">
        <a @click.prevent="goToPage(3)" class="page-link" href="#">3</a>
      </li>
      <li v-if="isBeginning" :class="['page-item', page === 4 && 'active']">
        <a @click.prevent="goToPage(4)" class="page-link" href="#">4</a>
      </li>
      <li v-if="isBeginning" :class="['page-item', page === 5 && 'active']">
        <a @click.prevent="goToPage(5)" class="page-link" href="#">5</a>
      </li>

      <li v-if="isMiddle || isEnd" class="page-item">
        <a @click.prevent="goToPage(1)" class="page-link" href="#">1</a>
      </li>
      <li v-if="isMiddle || isEnd" class="page-item">
        <a class="page-link text-dark">...</a>
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

      <li v-if="isBeginning || isMiddle" class="page-item">
        <a class="page-link">...</a>
      </li>
      <li v-if="isBeginning || isMiddle" class="page-item">
        <a @click.prevent="goToPage(totalPages)" class="page-link" href="#">
          {{ totalPages }}
        </a>
      </li>

      <li
        v-if="isEnd"
        :class="['page-item', page === totalPages - 4 && 'active']"
      >
        <a @click.prevent="goToPage(totalPages - 4)" class="page-link" href="#">
          {{ totalPages - 4 }}
        </a>
      </li>
      <li
        v-if="isEnd"
        :class="['page-item', page === totalPages - 3 && 'active']"
      >
        <a @click.prevent="goToPage(totalPages - 3)" class="page-link" href="#">
          {{ totalPages - 3 }}
        </a>
      </li>
      <li
        v-if="isEnd"
        :class="['page-item', page === totalPages - 2 && 'active']"
      >
        <a @click.prevent="goToPage(totalPages - 2)" class="page-link" href="#">
          {{ totalPages - 2 }}
        </a>
      </li>
      <li
        v-if="isEnd"
        :class="['page-item', page === totalPages - 1 && 'active']"
      >
        <a @click.prevent="goToPage(totalPages - 1)" class="page-link" href="#">
          {{ totalPages - 1 }}
        </a>
      </li>
      <li v-if="isEnd" :class="['page-item', page === totalPages && 'active']">
        <a @click.prevent="goToPage(totalPages)" class="page-link" href="#">
          {{ totalPages }}
        </a>
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
} = pagination

const isBeginning = computed(() => page.value < 5)
const isEnd = computed(() => page.value > totalPages.value - 4)
const isMiddle = computed(() => !isBeginning.value && !isEnd.value)
</script>
