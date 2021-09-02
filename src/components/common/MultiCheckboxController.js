import { Checkbox, FormControl, FormControlLabel } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'

export default function MultiCheckboxController({
  list,
  name,
  selectedList,
  setSelectedList,
  control,
  setValue,
}) {
  useEffect(() => {
    setValue(name, selectedList)
  }, [])

  function changeHandler(value) {
    // kiem tra mang selected item co ton tai value k
    const isPresent = selectedList.indexOf(value)

    // da ton tai -> unchecked -> xoa khoi mang
    if (isPresent !== -1) {
      const remaining = selectedList.filter(item => item !== value)
      setSelectedList(remaining)
    }

    // khong ton tai -> checked -> them vao mang
    else {
      setSelectedList(prev => [...prev, value])
    }

    setValue(name, selectedList)
  }

  return (
    <FormControl>
      {
        //
        list.map(item => (
          <FormControlLabel
            label={item}
            key={item}
            control={
              <Controller
                name={name}
                control={control}
                defaultValue=""
                render={() => (
                  <Checkbox
                    checked={selectedList.includes(item)}
                    onChange={() => changeHandler(item)}
                  />
                )}
              />
            }
          />
        ))
      }
    </FormControl>
  )
}
