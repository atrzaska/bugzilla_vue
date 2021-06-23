import { ref } from 'vue'
import API from '@/services/requests'

const useForm = ({ data, errors }) => {
  data = data || ref({})
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
        } else {
          window.Toast.error('Something went wrong, please try again.')
        }
      })
  }

  return { data, errors, isSubmitting, submit }
}

export default useForm
