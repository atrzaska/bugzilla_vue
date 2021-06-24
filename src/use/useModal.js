import { reactive } from 'vue'

const useModal = () => {
  const modal = reactive({
    show: false,
    title: 'Modal title',
    body: 'Modal message',
    showCancel: true,
    confirm: 'Confirm',
    onClose: () => (modal.show = false),
    onConfirm: () => modal.onClose(),
  })

  const show = (options) => {
    modal.show = true
    modal.title = options.title || ''
    modal.body = options.body || ''
    modal.showCancel = options.showCancel || true
    modal.confirm = options.confirm || 'Confirm'
    modal.onConfirm = () => {
      modal.onClose()
      options.onConfirm && options.onConfirm()
    }
  }

  const Modal = {
    show,
    confirm: show,
    confirmDelete: ({ name, onConfirm }) =>
      show({
        title: `You are about to delete ${name}`,
        body:
          'This action cannot be undone. Are you sure you want to continue?',
        onConfirm,
      }),
    ok: ({ title, body, onConfirm = () => {} }) =>
      show({ title, body, onConfirm, showCancel: false, confirm: 'OK' }),
  }

  return { Modal, modal }
}

export default useModal
