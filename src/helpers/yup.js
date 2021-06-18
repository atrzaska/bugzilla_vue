import * as yup from 'yup'

const signUpSchema = yup.object().shape({
  name: yup.string().required().min(8).max(255),
  email: yup.string().email().max(255),
  password: yup.string().min(8).max(255),
  termsAccepted: yup.boolean().required(),
  newsletterSubscribed: yup.boolean(),
})

const signInSchema = yup.object().shape({
  email: yup.string().email().max(255),
  password: yup.string().min(8).max(255),
})

export { signUpSchema, signInSchema }
