import { ref } from 'vue'

const useForm = ({ errors }) => {
  errors = errors || ref({})
  const isSubmitting = ref(false)

  const submit = (promise) => {
    isSubmitting.value = true
    errors.value = []
    return promise
      .then((res) => {
        isSubmitting.value = false
        return res
      })
      .catch((err) => {
        isSubmitting.value = false
        if (err.response.status === 422) {
          errors.value = err.response.data.errors
        }
      })
  }

  return { errors, isSubmitting, submit }
}

export default useForm
