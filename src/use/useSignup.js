import { ref } from 'vue'
import API from '@/services/requests'

const useSignup = () => {
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const termsAccepted = ref(false)
  const newsletterSubscribed = ref(false)
  const errors = ref({})

  const onSubmit = () => {
    errors.value = []
    API.signUp({
      name: name.value,
      email: email.value,
      password: password.value,
      termsAccepted: termsAccepted.value,
      newsletterSubscribed: newsletterSubscribed.value,
    }).catch((err) => (errors.value = err.response.data.errors))
  }

  return [
    name,
    email,
    password,
    termsAccepted,
    newsletterSubscribed,
    errors,
    onSubmit,
  ]
}

export default useSignup
