// Package Imports
import * as Yup from 'yup'
import {Formik, Form, Field, FormikHelpers} from 'formik'

// UI Imports
import {Input, Button} from 'components/Ui'

// Feature Imports
import {RegisterRequestModel} from '../models'

export const RegisterComponent = () => {
  const initialValues: RegisterRequestModel = {
    email: '',
    password: '',
  }

  const registerRequestModelValidationSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const onSubmit = (
    values: RegisterRequestModel,
    {resetForm, setValues}: FormikHelpers<RegisterRequestModel>
  ) => {
    alert(JSON.stringify(values, null, 2))
    setValues(initialValues)
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerRequestModelValidationSchema}
      onSubmit={onSubmit}>
      {({errors, values, handleChange}) => (
        <Form>
          <Field
            type='email'
            name='email'
            label='Email address *'
            placeholder='Email address'
            size='full'
            className='px-3'
            error={errors.email}
            value={values.email}
            onChange={handleChange}
            as={Input}
          />
          <Field
            type='password'
            name='password'
            label='Password *'
            placeholder='Password'
            size='full'
            className='px-3'
            wrapperClassName='mt-5'
            error={errors.password}
            value={values.password}
            onChange={handleChange}
            as={Input}
          />

          <Button type='submit' color='primary' size='full' className='p-3 mt-4'>
            Create an account
          </Button>
        </Form>
      )}
    </Formik>
  )
}
