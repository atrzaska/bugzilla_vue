import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useForm from '@/use/useForm'
import useFrontendValidation from '@/use/useFrontendValidation'
import useObject from '@/use/useObject'
import useUrlParams from '@/use/useUrlParams'

const useEditForm = ({
  id,
  data,
  schema,
  onFetch,
  onFetchError,
  onUpdate,
  successToast,
  successRedirectPath,
}) => {
  data = data || ref({})
  const errors = ref({})
  const form = useForm({ data, errors })
  const validation = useFrontendValidation({ errors, schema })
  const router = useRouter()
  const object = useObject(data)
  const urlParams = useUrlParams()
  id = id || urlParams.id

  const onSubmit = () => {
    validation.validateForm(data.value) &&
      form.submit(onUpdate(id, data.value)).then((res) => {
        successRedirectPath && router.push(successRedirectPath)
        successToast && window.Toast.success(successToast(res.data))
      })
  }

  const fetchObject = () => {
    object.loading.value = true
    onFetch(id)
      .then((res) => object.setObject(res.data))
      .catch((err) => onFetchError(err))
  }

  fetchObject()

  return { ...validation, ...form, ...object, onSubmit }
}

export default useEditForm
