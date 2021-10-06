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

  contact: yup.object().label('Contact'),

  fb: yup.string().url().label('Facebook'),

  linkedin: yup.string().url().label('LinkedIn'),

  phone: yup
    .string()
    .required()
    .min(10)
    .max(10)
    .matches(phoneRegExp, 'Phone number is not valid')
    .label('Phone number'),
})
