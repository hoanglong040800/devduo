import * as yup from 'yup'

export const schema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  pswd: yup.string().required().min(8).max(20).label('Password'),
  pswdCf: yup
    .string()
    .oneOf([yup.ref('pswd'), null], 'This field does not match with password'),
})
