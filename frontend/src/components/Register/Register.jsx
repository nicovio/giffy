import FormError from 'components/FormError/FormError'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginService } from 'services/login'
import 'styles/form.css'
import './Register.css'
import { ErrorMessage } from '@hookform/error-message'

const defaultValues = { username: '', password: '' }

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
    setError,
  } = useForm({ defaultValues, mode: 'all' })
  const [registered, setRegistered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true)
      await loginService.register(values)
      setRegistered(true)
    } catch (err) {
      setError('username', {
        type: 'manual',
        message: err.message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (registered) {
    return (
      <h4>
        Felicitaciones! Usuario registrado <span className="success">✔</span>{' '}
      </h4>
    )
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <section className="form-body">
          <h4 className="form-header">Registrarse</h4>
          <label htmlFor="username">Usuario</label>
          <input
            className={errors?.username ? 'has-error' : ''}
            autoComplete="off"
            id="username"
            name="username"
            type="text"
            {...register('username', { required: 'El campo es requerido' })}
          />

          <ErrorMessage errors={errors} name="username" render={FormError} />

          <label htmlFor="password">Contraseña</label>
          <input
            maxLength="72"
            className={errors?.password ? 'has-error' : ''}
            autoComplete="off"
            id="password"
            name="password"
            type="password"
            {...register('password', {
              required: 'El campo es requerido',
              minLength: {
                value: 5,
                message: 'Debe tener entre 5 y 72 caracteres',
              },
            })}
          />
          <ErrorMessage errors={errors} name="password" render={FormError} />

          <button type="submit" className="btn" disabled={isSubmitting || !isDirty || !isValid}>
            Registrarse
          </button>
        </section>
      </form>
    </>
  )
}
