import { ref } from 'vue'
import API from '@/services/requests'

const withSignin = () => {
  const email = ref('')
  const password = ref('')
  const onSubmit = () => API.signIn(email.value, password.value)

  return [email, password, onSubmit]
}

export default withSignin
