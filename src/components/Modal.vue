<template>
  <div v-if="modal.show" id="modalBackDrop" class="modal-backdrop fade" />
  <div
    v-if="modal.show"
    class="modal fade"
    id="modal"
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
            @click="onCloseWrapped"
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
            @click="onCloseWrapped"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="onConfirmWrapped"
          >
            {{ modal.confirm }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, watch } from 'vue'
import useModal from '@/hooks/useModal'
import toggleClass from '@/services/toggleClass'

const { Modal, modal } = useModal()
window.Modal = Modal

const animate = () => {
  toggleClass('modalBackDrop', 'show')
  toggleClass('modal', 'show')
}

const onCloseWrapped = () => {
  animate()
  setTimeout(modal.onClose, 400)
}

const onConfirmWrapped = () => {
  animate()
  setTimeout(modal.onConfirm, 400)
}

const { show } = toRefs(modal)
watch(show, () => setTimeout(animate, 1))
</script>
