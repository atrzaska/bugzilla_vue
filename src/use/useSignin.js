import { ref } from 'vue'
import API from '@/services/requests'
import Toast from '@/lib/toast'

const useSignin = () => {
  const email = ref('')
  const password = ref('')
  const rememberMe = ref(false)
  const error = ref(false)
  const isSubmitting = ref(false)

  const payload = () => ({
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value,
  })

  const signIn = () => {
    isSubmitting.value = true
    error.value = false
    API.signIn(payload())
      .then((res) => (isSubmitting.value = false))
      .catch((err) => {
        isSubmitting.value = false
        if (err.response.status === 422) {
          error.value = true
        } else {
          Toast.error('Something went wrong, please try again.')
        }
      })
  }

  return { email, password, rememberMe, error, isSubmitting, payload, signIn }
}

export default useSignin
