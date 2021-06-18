// TODO: unused file
import { useRouter, useRoute } from 'vue-router'

const useQueryParams = () => {
  const router = useRouter()
  const route = useRoute()

  const queryParams = route.query
  const setQueryParams = (params) => {
    router.push({
      path: route.path,
      query: Object.assign({}, queryParams, params),
    })
  }

  return { queryParams, setQueryParams }
}

export default useQueryParams
