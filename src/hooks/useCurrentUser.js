import { computed } from 'vue'
import useObject from '@/hooks/useObject'
import API from '@/services/requests'

const useCurrentUser = (defaultValue = {}) => {
  const { object: user, setObject, loading } = useObject(defaultValue)

  API.fetchCurrentUser()
    .then((res) => setObject(res.data))
    .catch(() => setObject(defaultValue))

  const isLoggedIn = computed(() => !!user.value.id)

  return { isLoggedIn, user, loading }
}

export default useCurrentUser
