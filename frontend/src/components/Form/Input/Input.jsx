import { ErrorMessage } from '@hookform/error-message'
import FormError from 'components/Form/FormError/FormError'
import React, { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

function Input(props) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const { name, label } = props

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        {...props}
        {...register(name)}
        aria-label={name}
        className={errors[name] ? 'has-error' : ''}
      />
      <ErrorMessage errors={errors} name={name} render={FormError} />
    </>
  )
}

export default forwardRef(Input)
