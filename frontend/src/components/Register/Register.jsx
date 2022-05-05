import Form from 'components/Form/Form'
import Input from 'components/Form/Input/Input'
import useMedia from 'hooks/useMedia'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { loginService } from 'services/login'
import 'styles/form.css'

const defaultValues = { username: '', password: '' }

function Register() {
  const [registered, setRegistered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const methods = useForm({ defaultValues, mode: 'all' })
  const isTablet = useMedia('(max-width: 950px)')
  const autoFocus = isTablet ? {} : { autoFocus: 'on' }

  const {
    register,
    formState: { errors, isValid, isDirty },
  } = methods

  const onSubmit = async (values) => {
    try {
      await loginService.register(values)
      setRegistered(true)
    } catch (err) {
      console.log(err)
    }
  }

  const usernameValidation = {
    validate: (value) => {
      return !!value.trim() || 'Campo obligatorio'
    },
  }

  const passwordValidation = {
    required: 'Campo obligatorio',
    minLength: {
      value: 5,
      message: 'Debe tener entre 5 y 72 caracteres',
    },
  }

  if (registered) {
    return (
      <h4 className="App-title text-center">
        Felicitaciones! Usuario registrado <span className="success">✔</span>{' '}
      </h4>
    )
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit} setIsSubmitting={setIsSubmitting}>
        <section className="form-body">
          <h4 className="form-header">Registrarse</h4>
          <Input
            {...autoFocus}
            className={errors?.username ? 'has-error' : ''}
            id="username"
            label="Usuario"
            maxLength="35"
            name="username"
            type="text"
            {...register('username', usernameValidation)}
          />
          <Input
            className={errors?.password ? 'has-error' : ''}
            id="password"
            label="Contraseña"
            maxLength="72"
            name="password"
            type="password"
            {...register('password', passwordValidation)}
          />
          <button type="submit" className="btn" disabled={isSubmitting || !isDirty || !isValid}>
            {isSubmitting ? 'Registrando usuario...' : 'Registrarse'}
          </button>
        </section>
      </Form>
    </FormProvider>
  )
}

export default Register
