import * as yup from 'yup'

export const authSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),

  pswd: yup.string().required().min(8).max(20).label('Password'),

  pswdCf: yup
    .string()
    .oneOf([yup.ref('pswd'), null], 'This field does not match with password'),
})

export const profileSchema = yup.object().shape({
  fullname: yup.string().required().min(2).max(40).label('Full Name'),

  thumnail_url: yup.string().required().url().label('Thumnail URL'),

  money: yup
    .number()
    .typeError('Money is required')
    .required()
    .min(1)
    .max(2000)
    .label('Money'),

  fields: yup.array().max(5).label('Fields'),

  tech: yup.array().max(5).label('Tech'),

  description: yup.string().max(255).label('Description'),
})
