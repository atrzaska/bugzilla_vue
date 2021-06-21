import { ref } from 'vue'
import API from '@/services/requests'

const useSignup = (errors) => {
  errors = errors || ref({})

  const isSubmitting = ref(false)
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const termsAccepted = ref(false)
  const newsletterSubscribed = ref(false)

  const payload = () => ({
    name: name.value,
    email: email.value,
    password: password.value,
    termsAccepted: termsAccepted.value,
    newsletterSubscribed: newsletterSubscribed.value,
  })
  const signUp = () => {
    isSubmitting.value = true
    errors.value = []
    API.signUp(payload())
      .then((res) => (isSubmitting.value = false))
      .catch((err) => {
        isSubmitting.value = false
        if (err.response.status === 422) {
          errors.value = err.response.data.errors
        } else {
          window.Toast.error('Something went wrong, please try again.')
        }
      })
  }

  return {
    name,
    email,
    password,
    termsAccepted,
    newsletterSubscribed,
    errors,
    payload,
    signUp,
    isSubmitting,
  }
}

export default useSignup
