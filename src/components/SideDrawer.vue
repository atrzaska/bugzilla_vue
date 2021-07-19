<template>
  <div
    v-if="show && backdrop"
    id="sideDrawerBackdrop"
    class="modal-backdrop fade"
    @click="onCloseWrapped"
  />
  <div
    v-if="show"
    id="sideDrawerWrapper"
    :class="['shadow', 'bg-white', 'h-100', placement.wrapperClass]"
    :style="{ width }"
  >
    <template v-if="noHeader" />
    <header
      v-else
      class="d-flex align-items-center justify-content-between p-3"
    >
      <h5 class="mb-0">{{ title }}</h5>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="onCloseWrapped"
      />
    </header>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, toRefs, watch } from 'vue'
import toggleClass from '@/services/toggleClass'

const props = defineProps({
  show: Object,
  title: String,
  right: Boolean,
  backdrop: Boolean,
  noHeader: Boolean,
  width: Number,
})

const emit = defineEmits(['close'])

const {
  title,
  show = false,
  right = false,
  backdrop = false,
  noHeader = false,
  width = '320px',
} = toRefs(props)

const PLACEMENTS = {
  left: {
    wrapperClass: 'side-drawer',
  },
  right: {
    wrapperClass: 'side-drawer side-drawer-right',
  },
}

const placement = right.value ? PLACEMENTS.right : PLACEMENTS.left

const animate = () => {
  toggleClass('sideDrawerBackdrop', 'show')
  toggleClass('sideDrawerWrapper', 'side-drawer-active')
}

const onClose = () => emit('close')

const onCloseWrapped = () => {
  animate()
  setTimeout(onClose, 400)
}

watch(show, () => setTimeout(animate, 1))
</script>
