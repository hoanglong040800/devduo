import * as yup from 'yup'

export const authSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),

  pswd: yup.string().required().min(8).max(20).label('Password'),

  pswdCf: yup
    .string()
    .oneOf([yup.ref('pswd'), null], 'This field does not match with password'),
})

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const profileSchema = yup.object().shape({
  full_name: yup.string().required().min(5).max(40).label('Full Name'),

  thumnail: yup.string().required().url().label('Thumnail URL'),

  price: yup
    .number()
    .typeError('Money is required')
    .required()
    .min(1)
    .max(2000)
    .label('Money'),

  fields: yup.array().required().min(1).max(5).label('Fields'),

  technologies: yup.array().required().min(1).max(5).label('Technologies'),

  description: yup.string().max(1000).label('Description'),

  contacts: yup.object().label('Contacts'),

  facebook: yup.string().url().label('Facebook'),

  linkedin: yup.string().url().label('LinkedIn'),

  github: yup.string().url().label('Github'),
})

export const mentorFilterSchema = yup.object().shape({
  fields: yup.array().max(1).label('Fields'),

  technologies: yup.array().max(1).label('Technologies'),
})
