import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useForm from '@/hooks/useForm'
import useFrontendValidation from '@/hooks/useFrontendValidation'

const useNewForm = ({
  data,
  schema,
  onCreate,
  successToast,
  successRedirectPath,
  onSuccess,
}) => {
  data = data || ref({})
  const errors = ref({})
  const form = useForm({ data, errors })
  const validation = useFrontendValidation({ data, errors, schema })
  const router = useRouter()

  const onSubmit = () => {
    validation.validateForm() &&
      form.submit(onCreate(data.value)).then((res) => {
        successRedirectPath && router.push(successRedirectPath)
        successToast && window.Toast.success(successToast(res.data))
        onSuccess && onSuccess(res.data)
      })
  }

  return { ...form, ...validation, onSubmit }
}

export default useNewForm
