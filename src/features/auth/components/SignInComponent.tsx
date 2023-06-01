// UI Imports
import {Input, Link, Checkbox, Button} from 'components/Ui'

// Package Imports
import {Formik, Form, Field, FormikHelpers} from 'formik'
import * as Yup from 'yup'

// Model Imports
import {SignInRequestModel} from '../models'

// Hook Imports
import {useAppDispatch} from 'hooks'

// Feature Imports
import {signInAction} from '../authActions'

export const SignInComponent = () => {
  const dispatch = useAppDispatch()
  const login = (signInRequest: SignInRequestModel) => dispatch(signInAction(signInRequest))

  const initialValues: SignInRequestModel = {
    email: localStorage.getItem('email') || '',
    password: localStorage.getItem('password') || '',
    remember: localStorage.getItem('remember') === 'true' ? true : false,
  }

  const loginRequestModelValidationSchema = Yup.object({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const onSubmit = (values: SignInRequestModel, {resetForm}: FormikHelpers<SignInRequestModel>) => {
    login(values).then(() => {
      if (values.remember) {
        localStorage.setItem('email', values.email)
        localStorage.setItem('password', values.password)
        localStorage.setItem('remember', 'true')
      } else {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        localStorage.removeItem('remember')
      }
      resetForm()
    })

    return
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginRequestModelValidationSchema}
      onSubmit={onSubmit}>
      {({errors, values, handleChange, handleSubmit}) => (
        <Form>
          <Field
            type='email'
            name='email'
            label='Username or email address *'
            placeholder='Email'
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

          <div className='flex justify-between mt-5'>
            <Field
              checked={values.remember}
              onChange={handleChange}
              name='remember'
              label='Remember me'
              as={Checkbox}
            />

            <Link to='/' className='text-primary hover:text-primary-700'>
              Lost your password?
            </Link>
          </div>
          <Button
            onClick={handleSubmit}
            type='submit'
            color='primary'
            size='full'
            className='p-3 mt-4'>
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  )
}
