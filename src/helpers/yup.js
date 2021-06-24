import * as yup from 'yup'

const signUpSchema = yup.object().shape({
  name: yup.string().required().min(8).max(255),
  email: yup.string().email().max(255),
  password: yup.string().min(8).max(255),
  termsAccepted: yup
    .boolean()
    .required()
    .oneOf([true], 'The terms and conditions must be accepted.'),
  newsletterSubscribed: yup.boolean(),
})

const signInSchema = yup.object().shape({
  email: yup.string().email().max(255),
  password: yup.string().min(8).max(255),
})

const projectSchema = yup.object().shape({
  name: yup.string().required().max(255),
})

const storySchema = yup.object().shape({
  name: yup.string().required().max(255),
  description: yup.string().required().max(255),
  kind: yup.string().oneOf(['feature', 'bug', 'chore', 'release']),
  container: yup.string().oneOf(['icebox', 'backlog']),
  projectId: yup.number().required().positive().integer(),
})

export { signUpSchema, signInSchema, projectSchema, storySchema }
