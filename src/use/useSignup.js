import { ref } from 'vue'
import API from '@/services/requests'

const useSignup = (errors) => {
  errors = errors || ref({})

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
  const onSubmit = () => {
    errors.value = []
    API.signUp(payload()).catch(
      (err) => (errors.value = err.response.data.errors)
    )
  }

  return {
    name,
    email,
    password,
    termsAccepted,
    newsletterSubscribed,
    errors,
    payload,
    onSubmit,
  }
}

export default useSignup
