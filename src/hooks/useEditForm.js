import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useForm from '@/hooks/useForm'
import useFrontendValidation from '@/hooks/useFrontendValidation'
import useObject from '@/hooks/async/useObject'
import useUrlParams from '@/hooks/useUrlParams'

const useEditForm = ({
  id,
  schema,
  onFetch,
  onFetchError,
  onUpdate,
  onSuccess,
  successToast,
  successRedirectPath,
}) => {
  const data = ref({})
  const errors = ref({})
  const form = useForm({ errors })
  const validation = useFrontendValidation({ data, errors, schema })
  const router = useRouter()
  const object = useObject(data)
  const urlParams = useUrlParams()
  id = id || urlParams.id

  const onSubmit = () => {
    validation.validateForm() &&
      form.submit(onUpdate(id, data.value)).then((res) => {
        successRedirectPath && router.push(successRedirectPath)
        successToast && window.Toast.success(successToast(res.data))
        onSuccess && onSuccess(res.data)
      })
  }

  const fetchObject = () => {
    object.loading.value = true
    onFetch(id)
      .then((res) => object.setObject(res.data))
      .catch((err) => onFetchError(err))
  }

  fetchObject()

  return {
    data,
    ...validation,
    ...form,
    ...object,
    validation,
    form,
    object,
    onSubmit,
  }
}

export default useEditForm
