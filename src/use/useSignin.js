import { ref } from 'vue'
import API from '@/services/requests'

const useSignin = () => {
  const error = ref(false)
  const isSubmitting = ref(false)
  const data = ref({
    email: '',
    password: '',
    rememberMe: false,
  })

  const signIn = () => {
    isSubmitting.value = true
    error.value = false
    API.signIn(data.value)
      .then((res) => (isSubmitting.value = false))
      .catch((err) => {
        isSubmitting.value = false
        if (err.response.status === 422) {
          error.value = true
        }
      })
  }

  return { data, error, isSubmitting, signIn }
}

export default useSignin
