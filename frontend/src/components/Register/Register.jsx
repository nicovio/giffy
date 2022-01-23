import AccountNavbar from 'components/AccountNavbar/AccountNavbar'
import Form from 'components/Form/Form'
import Input from 'components/Form/Input/Input'
import { React, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { loginService } from 'services/login'
import 'styles/form.css'

const defaultValues = { username: '', password: '' }

export default function Register() {
  const [registered, setRegistered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const methods = useForm({ defaultValues, mode: 'all' })

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
      <h4>
        Felicitaciones! Usuario registrado <span className="success">✔</span>{' '}
      </h4>
    )
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit} setIsSubmitting={setIsSubmitting}>
        <section className="form-body">
          <AccountNavbar />
          <h4 className="form-header">Registrarse</h4>
          <Input
            label="Usuario"
            className={errors?.username ? 'has-error' : ''}
            autoComplete="off"
            id="username"
            name="username"
            type="text"
            {...register('username', { required: 'El campo es requerido' })}
          />
          <Input
            label="Contraseña"
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
          <button type="submit" className="btn" disabled={isSubmitting || !isDirty || !isValid}>
            {isSubmitting ? 'Registrando usuario...' : 'Registrarse'}
          </button>
        </section>
      </Form>
    </FormProvider>
  )
}
