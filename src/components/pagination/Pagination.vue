<template>
  <nav v-if="showPagination" aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li v-if="hasPreviousPage" class="page-item">
        <button @click="previousPage" class="page-link">
          <i class="fas fa-chevron-left" />
        </button>
      </li>
      <li v-else class="page-item disabled">
        <button class="page-link">
          <i class="fas fa-chevron-left" />
        </button>
      </li>

      <template v-if="totalPages <= 7">
        <li v-if="totalPages >= 1" :class="['page-item', activePageClass(1)]">
          <button @click="goToPage(1)" class="page-link">1</button>
        </li>
        <li v-if="totalPages >= 2" :class="['page-item', activePageClass(2)]">
          <button @click="goToPage(2)" class="page-link">2</button>
        </li>
        <li v-if="totalPages >= 3" :class="['page-item', activePageClass(3)]">
          <button @click="goToPage(3)" class="page-link">3</button>
        </li>
        <li v-if="totalPages >= 4" :class="['page-item', activePageClass(4)]">
          <button @click="goToPage(4)" class="page-link">4</button>
        </li>
        <li v-if="totalPages >= 5" :class="['page-item', activePageClass(5)]">
          <button @click="goToPage(5)" class="page-link">5</button>
        </li>
        <li v-if="totalPages >= 6" :class="['page-item', activePageClass(6)]">
          <button @click="goToPage(6)" class="page-link">6</button>
        </li>
        <li v-if="totalPages >= 7" :class="['page-item', activePageClass(7)]">
          <button @click="goToPage(7)" class="page-link">7</button>
        </li>
      </template>
      <template v-else>
        <li v-if="isBeginning" :class="['page-item', activePageClass(1)]">
          <button @click="goToPage(1)" class="page-link">1</button>
        </li>
        <li v-if="isBeginning" :class="['page-item', activePageClass(2)]">
          <button @click="goToPage(2)" class="page-link">2</button>
        </li>
        <li v-if="isBeginning" :class="['page-item', activePageClass(3)]">
          <button @click="goToPage(3)" class="page-link">3</button>
        </li>
        <li v-if="isBeginning" :class="['page-item', activePageClass(4)]">
          <button @click="goToPage(4)" class="page-link">4</button>
        </li>
        <li v-if="isBeginning" :class="['page-item', activePageClass(5)]">
          <button @click="goToPage(5)" class="page-link">5</button>
        </li>

        <li v-if="isMiddle || isEnd" class="page-item">
          <button @click="goToPage(1)" class="page-link">1</button>
        </li>
        <li v-if="isMiddle || isEnd" class="page-item disabled">
          <button class="page-link text-dark">...</button>
        </li>

        <li v-if="isMiddle" class="page-item">
          <button @click="goToPage(page - 1)" class="page-link">
            {{ page - 1 }}
          </button>
        </li>
        <li v-if="isMiddle" class="page-item active">
          <button class="page-link">{{ page }}</button>
        </li>
        <li v-if="isMiddle" class="page-item">
          <button @click="goToPage(page + 1)" class="page-link">
            {{ page + 1 }}
          </button>
        </li>

        <li v-if="isBeginning || isMiddle" class="page-item">
          <button class="page-link">...</button>
        </li>
        <li v-if="isBeginning || isMiddle" class="page-item">
          <button @click="goToPage(totalPages)" class="page-link">
            {{ totalPages }}
          </button>
        </li>

        <li
          v-if="isEnd"
          :class="['page-item', activePageClass(totalPages - 4)]"
        >
          <button @click="goToPage(totalPages - 4)" class="page-link">
            {{ totalPages - 4 }}
          </button>
        </li>
        <li
          v-if="isEnd"
          :class="['page-item', activePageClass(totalPages - 3)]"
        >
          <button @click="goToPage(totalPages - 3)" class="page-link">
            {{ totalPages - 3 }}
          </button>
        </li>
        <li
          v-if="isEnd"
          :class="['page-item', activePageClass(totalPages - 2)]"
        >
          <button @click="goToPage(totalPages - 2)" class="page-link">
            {{ totalPages - 2 }}
          </button>
        </li>
        <li
          v-if="isEnd"
          :class="['page-item', activePageClass(totalPages - 1)]"
        >
          <button @click="goToPage(totalPages - 1)" class="page-link">
            {{ totalPages - 1 }}
          </button>
        </li>
        <li v-if="isEnd" :class="['page-item', activePageClass(totalPages)]">
          <button @click="goToPage(totalPages)" class="page-link">
            {{ totalPages }}
          </button>
        </li>
      </template>

      <li v-if="hasNextPage" class="page-item">
        <button @click="nextPage" class="page-link">
          <i class="fas fa-chevron-right" />
        </button>
      </li>
      <li v-else class="page-item disabled">
        <button class="page-link">
          <i class="fas fa-chevron-right" />
        </button>
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
