import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useForm from '@/use/useForm'
import useFrontendValidation from '@/use/useFrontendValidation'

const useEditForm = ({
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
        router.push(successRedirectPath)
        window.Toast.success(successToast(res.data))
      })
  }

  return { ...form, ...validation, onSubmit }
}

export default useEditForm
