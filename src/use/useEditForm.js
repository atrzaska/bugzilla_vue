import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useForm from '@/use/useForm'
import useFrontendValidation from '@/use/useFrontendValidation'
import useObject from '@/use/useObject'
import useUrlParams from '@/use/useUrlParams'

const useEditForm = ({
  data,
  schema,
  onFetch,
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
  const { id } = useUrlParams()

  const onSubmit = () => {
    validation.validateForm(data.value) &&
      form.submit(onUpdate(data.value)).then((res) => {
        router.push(successRedirectPath)
        window.Toast.success(successToast(res.data))
      })
  }

  const fetchObject = () => {
    object.loading.value = true
    onFetch(id).then((res) => object.setObject(res.data))
  }

  fetchObject()

  return { ...validation, ...form, ...object, onSubmit }
}

export default useEditForm
