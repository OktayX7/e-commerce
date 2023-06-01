// React Imports
import {useNavigate} from 'react-router-dom'

// Components Imports
import {CheckoutOrder} from './CheckoutOrder'

// Feature Imports
import {CheckoutModel} from '../models'

// UI Imports
import {Input, Select} from 'components/Ui'

// Package Imports
import {Formik, Form, Field, FormikHelpers} from 'formik'
import {countryList} from 'utils/countryList'
import * as Yup from 'yup'

export const CheckoutPage = () => {
  const randomNumber = Math.floor(Math.random() * 1000)
  const navigate = useNavigate()

  const initialValues: CheckoutModel = {
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    postcode: '',
    city: '',
    state: '',
    phone: '',
    email: '',
  }

  const checkoutValidationSchema = Yup.object({
    firstName: Yup.string().required('First name field is required.'),
    lastName: Yup.string().required('Last name field is required.'),
    companyName: Yup.string(),
    country: Yup.string().required('Country field is required.'),
    streetAddress: Yup.string().required('Street address field is required.'),
    postcode: Yup.string().required('Postcode field is required.'),
    city: Yup.string().required('City field is required.'),
    state: Yup.string(),
    phone: Yup.string().required('Phone field is required.'),
    email: Yup.string().email('Enter a valid email address.').required('Email field is required.'),
  })

  const onSubmit = (
    values: CheckoutModel,
    {resetForm, setValues}: FormikHelpers<CheckoutModel>
  ) => {
    alert(JSON.stringify(values, null, 2))
    navigate(`/checkout/order-received/${randomNumber}`)
    setValues(initialValues)
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutValidationSchema}
      onSubmit={onSubmit}>
      {({errors, values, handleChange, handleSubmit}) => (
        <div className='max-w-7xl mx-auto px-4 py-16 text-primary-700 flex gap-20'>
          <div className='w-10/12'>
            <h2 className='pb-7 text-2xl'>Billing details</h2>

            <Form>
              <div className='flex flex-col gap-4 '>
                <div className='flex gap-8'>
                  <Field
                    wrapperClassName='w-1/2'
                    type='text'
                    name='firstName'
                    label='First name *'
                    size='full'
                    className='px-2'
                    error={errors.firstName}
                    value={values.firstName}
                    onChange={handleChange}
                    as={Input}
                  />

                  <Field
                    wrapperClassName='w-1/2'
                    type='text'
                    name='lastName'
                    label='Last name *'
                    size='full'
                    className='px-2'
                    error={errors.lastName}
                    value={values.lastName}
                    onChange={handleChange}
                    as={Input}
                  />
                </div>

                <Field
                  type='text'
                  name='companyName'
                  label='Company name (optional)'
                  size='full'
                  className='px-2'
                  error={errors.companyName}
                  value={values.companyName}
                  onChange={handleChange}
                  as={Input}
                />

                <Field
                  name='country'
                  value={values.country}
                  label='Country / Region *'
                  className='my-3'
                  onChange={handleChange}
                  datas={countryList.map((country) => {
                    return {value: country.code, displayName: country.name}
                  })}
                  as={Select}
                />

                <Field
                  type='text'
                  name='streetAddress'
                  label='Street address *'
                  size='full'
                  className='px-2'
                  error={errors.streetAddress}
                  value={values.streetAddress}
                  onChange={handleChange}
                  as={Input}
                />

                <Field
                  type='text'
                  name='city'
                  label='City *'
                  size='full'
                  className='px-2'
                  error={errors.city}
                  value={values.city}
                  onChange={handleChange}
                  as={Input}
                />

                <Field
                  type='text'
                  name='state'
                  label='State *'
                  size='full'
                  className='px-2'
                  error={errors.state}
                  value={values.state}
                  onChange={handleChange}
                  as={Input}
                />

                <Field
                  type='text'
                  name='postcode'
                  label='Postcode / ZIP *'
                  size='full'
                  className='px-2'
                  error={errors.postcode}
                  value={values.postcode}
                  onChange={handleChange}
                  as={Input}
                />

                <Field
                  type='text'
                  name='phone'
                  label='Phone *'
                  size='full'
                  className='px-2'
                  error={errors.phone}
                  value={values.phone}
                  onChange={handleChange}
                  as={Input}
                />

                <Field
                  type='email'
                  name='email'
                  label='Email address *'
                  size='full'
                  className='px-2'
                  error={errors.email}
                  value={values.email}
                  onChange={handleChange}
                  as={Input}
                />
              </div>
            </Form>
          </div>

          <CheckoutOrder handleSubmit={handleSubmit} />
        </div>
      )}
    </Formik>
  )
}
