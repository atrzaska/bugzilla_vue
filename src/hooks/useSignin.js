import { ref } from 'vue'
import { useRouter } from 'vue-router'
import API from '@/services/requests'
import { setAccessToken } from '@/services/jwt'

const useSignin = () => {
  const router = useRouter()
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
      .then((res) => {
        const { accessToken } = res.data
        setAccessToken(accessToken)
        isSubmitting.value = false
        API.clearCurrentUserCache()
        router.push('/dashboard')
      })
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
