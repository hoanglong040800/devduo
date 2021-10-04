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

  // fields: yup.array().min(1).max(5).label('Fields'),

  description: yup.string().max(255).label('Description'),
})
