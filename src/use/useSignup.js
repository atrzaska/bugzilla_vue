import { ref } from 'vue'
import { useRouter } from 'vue-router'
import API from '@/services/requests'

const useSignup = (errors) => {
  const router = useRouter()
  errors = errors || ref({})
  const isSubmitting = ref(false)
  const data = ref({
    name: '',
    email: '',
    password: '',
    termsAccepted: false,
    newsletterSubscribed: true,
  })

  const signUp = () => {
    isSubmitting.value = true
    errors.value = []
    API.signUp(data.value)
      .then((res) => {
        isSubmitting.value = false
        router.push('/signup/success')
      })
      .catch((err) => {
        isSubmitting.value = false
        if (err.response.status === 422) {
          errors.value = err.response.data.errors
        }
      })
  }

  return { data, errors, signUp, isSubmitting }
}

export default useSignup
