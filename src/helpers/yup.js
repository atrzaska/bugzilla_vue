import * as yup from 'yup'

const signUpSchema = yup.object().shape({
  name: yup.string().required().min(8).max(255),
  email: yup.string().required().email().max(255),
  password: yup.string().min(8).max(255),
  termsAccepted: yup
    .boolean()
    .required()
    .oneOf([true], 'The terms and conditions must be accepted.'),
  newsletterSubscribed: yup.boolean(),
})

const signInSchema = yup.object().shape({
  email: yup.string().required().email().max(255),
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

const newMemberSchema = yup.object().shape({
  email: yup.string().required().email().max(255),
  projectId: yup.number().required().positive().integer(),
})

const editMemberSchema = yup.object().shape({
  role: yup.string().oneOf(['owner', 'member']),
})

const recoverPasswordSchema = yup.object().shape({
  email: yup.string().required().email().max(255),
})

const confirmEmailSchema = yup.object().shape({
  email: yup.string().required().email().max(255),
})

const resetPasswordSchema = yup.object().shape({
  password: yup.string().min(8).max(255),
})

export {
  signUpSchema,
  signInSchema,
  projectSchema,
  storySchema,
  newMemberSchema,
  editMemberSchema,
  recoverPasswordSchema,
  confirmEmailSchema,
  resetPasswordSchema,
}
