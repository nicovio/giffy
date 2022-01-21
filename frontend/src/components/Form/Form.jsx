import Error from 'components/Error/Error'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import 'styles/form.css'
import './Form.css'

export default function Form({ onSubmit, setIsSubmitting, children }) {
  const { handleSubmit, setError: setFieldError } = useFormContext()
  const [error, setError] = useState()

  const submit = async (values) => {
    try {
      setIsSubmitting(true)
      await onSubmit(values)
    } catch (err) {
      if (err.field) {
        setFieldError(err.field, {
          type: 'manual',
          message: err.message,
        })
      } else {
        setError(err)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      {children}
      {error && <Error message={error.message} />}
    </form>
  )
}
