import { ref } from 'vue'
import API from '@/services/requests'
import Toast from '@/lib/toast'

const useSignup = (errors) => {
  errors = errors || ref({})

  const submitting = ref(false)
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
    submitting.value = true
    errors.value = []
    API.signUp(payload())
      .then((res) => (submitting.value = false))
      .catch((err) => {
        submitting.value = false
        if (err.response.status === 422) {
          errors.value = err.response.data.errors
        } else {
          Toast.error('Something went wrong, please try again.')
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
    submitting,
  }
}

export default useSignup
