<template>
  <div
    v-if="show && backdrop"
    class="modal-backdrop fade show"
    @click="$emit('close')"
  />
  <transition
    name="side-drawer-transition"
    :enter-active-class="placement.enterClass"
    :leave-active-class="placement.leaveClass"
  >
    <div
      v-if="show"
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
          @click="$emit('close')"
        />
      </header>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits, toRefs } from 'vue'

const props = defineProps({
  show: Object,
  title: String,
  right: Boolean,
  backdrop: Boolean,
  noHeader: Boolean,
  width: Number,
})

defineEmits(['close'])

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
    enterClass: 'animated slideInLeft',
    leaveClass: 'animated slideOutLeft',
    wrapperClass: 'b-side-drawer',
  },
  right: {
    enterClass: 'animated slideInRight',
    leaveClass: 'animated slideOutRight',
    wrapperClass: 'b-side-drawer b-side-drawer-right',
  },
}

const placement = right.value ? PLACEMENTS.right : PLACEMENTS.left
</script>
