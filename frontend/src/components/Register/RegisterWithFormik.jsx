import FormError from 'components/Form/FormError/FormError'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { loginService } from 'services/login'
import 'styles/form.css'
import './Register.css'

const initialValues = { username: '', password: '' }

const validateFields = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Debe ingresar un nombre de usuario'
  }
  if (!values.password) {
    errors.password = 'Debe ingresar una contraseña'
  } else if (values.password.length < 8) {
    errors.password = 'La contraseña es demasiado corta'
  }
  return errors
}

export default function Register() {
  const [registered, setRegistered] = useState(false)

  const onSubmit = async (values, { setFieldError }) => {
    try {
      await loginService.register(values)
      setRegistered(true)
    } catch (err) {
      setFieldError('username', err.message)
    }
  }

  if (registered) {
    return (
      <h4>
        Felicitaciones! Usuario registrado <span style={{ color: 'green' }}>✔</span>
      </h4>
    )
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validateFields}>
        {({ errors, touched, isValid, isSubmitting }) => (
          <Form className="form">
            <section className="form-body">
              <h4 className="form-header">Registrarse</h4>
              <label htmlFor="username">Usuario</label>
              <Field
                className={touched.username && errors.username ? 'has-error' : ''}
                autoComplete="username" 
                id="username"
                name="username"
                type="text"
              />
              <ErrorMessage name="username" component={FormError} />
              <label htmlFor="password">Contraseña</label>
              <Field
                className={touched.password && errors.password ? 'has-error' : ''}
                autoComplete="current-password"
                id="password"
                name="password"
                type="password"
              />
              <ErrorMessage name="password" component={FormError} />

              <button type="submit" className="btn" disabled={!isValid || !Object.keys(touched).length || isSubmitting}>
                Registrarse
              </button>
            </section>
          </Form>
        )}
      </Formik>
    </>
  )
}
