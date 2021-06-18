import { ref } from 'vue'
import API from '@/services/requests'

const useSignin = () => {
  const email = ref('')
  const password = ref('')
  const error = ref(false)
  const onSubmit = () => {
    error.value = false
    API.signIn(email.value, password.value).catch((err) => (error.value = true))
  }

  return { email, password, error, onSubmit }
}

export default useSignin
