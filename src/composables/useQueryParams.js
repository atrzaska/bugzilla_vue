import { useRouter, useRoute } from 'vue-router'

const useQueryParams = () => {
  const router = useRouter()
  const route = useRoute()

  const queryParams = route.query
  const setQueryParams = (params) => {
    console.log(params)
    console.log(queryParams)
    console.log(Object.assign({}, queryParams, params))
    router.push({
      path: route.path,
      query: Object.assign({}, queryParams, params),
    })
  }

  return { queryParams, setQueryParams }
}

export default useQueryParams
