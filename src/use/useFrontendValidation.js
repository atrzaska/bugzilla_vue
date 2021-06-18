import { ref, computed } from 'vue'
import { toFullErrors, toInvalidFields } from '@/helpers/errors'

const useFrontendValidation = ({ errors, schema }) => {
  errors = errors || ref({})

  const fullErrors = computed(() => toFullErrors(errors.value))
  const invalidFields = computed(() => toInvalidFields(errors.value))
  const isValid = computed(() => Object.keys(errors.value).length === 0)

  const invalidFieldClass = (field) =>
    invalidFields.value.includes(field) && 'is-invalid'

  const validateField = (field, val) =>
    schema
      .validateAt(field, { [field]: val })
      .then(() => delete errors.value[field])
      .catch((err) => (errors.value[field] = err.message))

  const validateForm = (obj) => {
    schema
      .validate(obj, { abortEarly: false })
      .then(() => (errors.value = {}))
      .catch((err) =>
        err.inner.forEach((error) => (errors.value[error.path] = error.message))
      )

    return isValid.value
  }

  return {
    isValid,
    fullErrors,
    invalidFields,
    invalidFieldClass,
    validateField,
    validateForm,
  }
}

export default useFrontendValidation
