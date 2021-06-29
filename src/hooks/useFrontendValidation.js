import { ref, computed } from 'vue'
import { toFullErrors, toInvalidFields } from '@/services/errors'

const useFrontendValidation = ({ data, errors, schema }) => {
  errors = errors || ref({})

  const fullErrors = computed(() => toFullErrors(errors.value))
  const invalidFields = computed(() => toInvalidFields(errors.value))
  const isValid = computed(() => Object.keys(errors.value).length === 0)

  const invalidFieldClass = (field) =>
    invalidFields.value.includes(field) && 'is-invalid'

  const validateField = (field) =>
    schema
      .validateAt(field, data.value)
      .then(() => delete errors.value[field])
      .catch((err) => (errors.value[field] = err.message))

  const validateForm = () => {
    try {
      schema.validateSync(data.value, { abortEarly: false })
      errors.value = {}
    } catch (err) {
      err.inner.forEach((error) => (errors.value[error.path] = error.message))
    }

    return isValid.value
  }

  return {
    isValid,
    fullErrors,
    invalidFields,
    invalidFieldClass,
    validateField,
    validateForm,
    errors,
  }
}

export default useFrontendValidation
