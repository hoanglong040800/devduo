import { FormControl, TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'

export default function TextFieldController({
  name,
  label,
  control,
  errors,
  defaultValue = '',
}) {
  return (
    <FormControl margin="dense" fullWidth>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            error={!!errors[name]}
            helperText={errors[name]?.message}
          />
        )}
      />
    </FormControl>
  )
}
