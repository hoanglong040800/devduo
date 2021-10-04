import { FormControl, TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'

export default function TextFieldController({
  name,
  label,
  control,
  errors,
  setValue,
  type='text',
  defaultValue = '',
  required=false,
}) {
  return (
    <FormControl margin="normal" fullWidth>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            type={type}
            required={required}
            error={!!errors[name]}
            helperText={errors[name]?.message}
          />
        )}
      />
    </FormControl>
  )
}
