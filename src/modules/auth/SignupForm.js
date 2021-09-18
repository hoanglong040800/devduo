import { Button, Box } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from 'common/utils/validation-schema'
import TextFieldController from 'common/components/TextFieldController'

export default function SignupForm() {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function onSubmit() {
    alert(watch('email'), watch('pswd'))
  }

  return (
    <>
      <form>
        <TextFieldController
          name="email"
          label="Email"
          control={control}
          errors={errors}
        />

        <TextFieldController
          name="pswd"
          label="Password"
          control={control}
          errors={errors}
        />

        <TextFieldController
          name="pswdCf"
          label="Password Confirmation"
          control={control}
          errors={errors}
        />

        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Signup
          </Button>
        </Box>
      </form>
    </>
  )
}
