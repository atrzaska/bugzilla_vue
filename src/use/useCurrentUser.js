import { computed } from 'vue'
import useObject from '@/use/useObject'
import API from '@/services/requests'
const isSigninPage = window.location.pathname === '/signin'

const useCurrentUser = (defaultValue = null) => {
  const { object: user, setObject, loading } = useObject(defaultValue)

  API.fetchCurrentUser({ refresh: true })
    .then((res) => setObject(res.data))
    .catch((err) => setObject(defaultValue))

  const isLoggedIn = computed(() => !!user.value)

  return { isLoggedIn, user, loading }
}

export default useCurrentUser
