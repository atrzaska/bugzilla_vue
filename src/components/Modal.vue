<template>
  <div v-if="modal.show" class="modal-backdrop fade show" />
  <transition name="fade">
    <div
      v-if="modal.show"
      class="modal fade show"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div v-if="!!modal.title" class="modal-header border-0">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ modal.title }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="onClose"
            />
          </div>
          <div v-if="!!modal.body" class="modal-body">
            {{ modal.body }}
          </div>
          <div
            v-if="modal.showCancel || !!modal.confirm"
            class="modal-footer border-0"
          >
            <button
              v-if="modal.showCancel"
              type="button"
              class="btn btn-outline-secondary"
              @click="modal.onClose"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="modal.onConfirm"
            >
              {{ modal.confirm }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import useModal from '@/hooks/useModal'

const { Modal, modal } = useModal()
window.Modal = Modal
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
