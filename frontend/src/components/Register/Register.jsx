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
    await loginService.register(values)
    setRegistered(true)
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
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            {...autoFocus}
            className={errors?.username ? 'has-error' : ''}
            id="username"
            label="Usuario"
            maxLength='35'
            name="username"
            spellCheck='false'
            type="text"
            {...register('username', {
              validate: (value) => {
                return !!value.trim() || 'Campo obligatorio'
              },
            })}
          />
          <Input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            className={errors?.password ? 'has-error' : ''}
            id="password"
            label="Contraseña"
            maxLength='72'
            name="password"
            spellCheck='false'
            type="password"
            {...register('password', {
              required: 'Campo obligatorio',
              minLength: {
                value: 5,
                message: 'Debe tener entre 5 y 72 caracteres',
              },
            })}
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
