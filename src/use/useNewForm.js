import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useForm from '@/use/useForm'
import useFrontendValidation from '@/use/useFrontendValidation'

const useNewForm = ({
  data,
  schema,
  onCreate,
  successToast,
  successRedirectPath,
}) => {
  data = data || ref({})
  const errors = ref({})
  const form = useForm({ data, errors })
  const validation = useFrontendValidation({ errors, schema })
  const router = useRouter()

  const onSubmit = () => {
    validation.validateForm(data.value) &&
      form.submit(onCreate(data.value)).then((res) => {
        successRedirectPath && router.push(successRedirectPath)
        successToast && window.Toast.success(successToast(res.data))
      })
  }

  return { ...form, ...validation, onSubmit }
}

export default useNewForm
