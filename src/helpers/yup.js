import * as yup from 'yup'

const signUpSchema = yup.object().shape({
  name: yup.string().required().min(8),
  email: yup.string().email(),
  password: yup.string().min(8),
  termsAccepted: yup.boolean().required(),
  newsletterSubscribed: yup.boolean(),
})

const signInSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(8),
})

export { signUpSchema, signInSchema }
