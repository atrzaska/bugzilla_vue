import { computed } from 'vue'
import useObject from '@/use/useObject'
import API from '@/services/requests'

const useCurrentUser = (defaultValue = {}) => {
  const { object: user, setObject, loading } = useObject(defaultValue)

  API.fetchCurrentUser()
    .then((res) => setObject(res.data))
    .catch((err) => setObject(defaultValue))

  const isLoggedIn = computed(() => !!user.value.id)

  return { isLoggedIn, user, loading }
}

export default useCurrentUser
