import { ref, computed } from 'vue'
import { toFullErrors, toInvalidFields } from '@/helpers/errors'

const useValidation = ({ errors }) => {
  errors = errors || ref({})

  const fullErrors = computed(() => toFullErrors(errors.value))
  const invalidFields = computed(() => toInvalidFields(errors.value))

  const invalidFieldClass = (field) =>
    invalidFields.value.includes(field) && 'is-invalid'

  return { fullErrors, invalidFields, invalidFieldClass }
}

export default useValidation
