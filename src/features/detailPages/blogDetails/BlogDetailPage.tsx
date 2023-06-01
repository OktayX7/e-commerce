// React Imports
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

//Icon Imports
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

//Style Imports
import './blog-detail.scss'

// Feature Imports
import {CommentModel} from './models'
import {ProductImgDetailModal} from 'features/product'
import {ContentTypeModel} from '../blog/models'
import {getBlogState} from '../blog/blogSelector'
import {getBlogByTitleAction} from '../blog/blogAction'

// Package Imports
import {Formik, Form, Field, FormikHelpers} from 'formik'
import * as Yup from 'yup'

// UI Imports
import {Button, Input, Link, TextArea} from 'components'

// Hook Imports
import {useAppDispatch, useAppSelector} from 'hooks'

export const BlogDetailPage = () => {
  const blog = useAppSelector(getBlogState())
  const [showImgModal, setShowImgModal] = useState(false)

  const dispatch = useAppDispatch()

  const initialValues: CommentModel = {
    name: '',
    email: '',
    comment: '',
    website: '',
  }

  // Modal
  const blogImagesArray = blog?.images?.map((image) => image.url)
  const closeModal = () => {
    setShowImgModal(false)
  }

  const commentModelValidationSchema = Yup.object({
    name: Yup.string().required('name is required'),
    email: Yup.string().required('email is required'),
    website: Yup.string(),
    comment: Yup.string().required('comment is required'),
  })

  const onSubmit = (values: CommentModel, {resetForm, setValues}: FormikHelpers<CommentModel>) => {
    alert(JSON.stringify(values, null, 2))
    setValues(initialValues)
    resetForm()
  }

  const {slug} = useParams<{slug: string}>()

  useEffect(() => {
    if (slug) {
      dispatch(getBlogByTitleAction(slug))
    }
    console.log(blog)
  }, [slug])

  const renderContent = (content: ContentTypeModel) => {
    const index = Math.floor(Math.random() * 100)

    if (content.contentType === 'text') {
      return (
        <p key={`${content.contentType}_${index}`} className='text-primary-500 mb-7'>
          {content.content}
        </p>
      )
    } else if (content.contentType === 'heading') {
      return (
        <h4 className=' max-w-3xl mx-auto text-2xl mb-7' key={`${content.contentType}_${index}`}>
          {content.content}
        </h4>
      )
    } else if (content.contentType === 'image') {
      return (
        <div className='w-full' key={`${content.contentType}_${index}`}>
          <img src={content.content} alt='img' className='w-full' />
        </div>
      )
    }
  }

  const renderGaleryImage = (image: {url: string}) => {
    const index = Math.floor(Math.random() * 100)

    return (
      <div
        onClick={() => setShowImgModal(true)}
        key={`${image.url}_${index}`}
        className='group mb-2 md:mb-4 blog-detail-overlay cursor-pointer'>
        <img src={image.url} alt='' />
        <div className='group-hover:flex sm:py-2 text-5xl text-warning blog-detail-icons'>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className=' pt-16 block border-b border-primary-200 mb-12'>
        <div className=' max-w-7xl mx-auto pr-4 pl-4 '>
          <div className=' max-w-4xl mx-auto px-4'>
            <div
              className='relative overflow-hidden pb-[75%] mb-11 ml-[-5vw] align-left '
              style={{width: 'calc(100% + 10vw)'}}>
              <img
                src={blog?.contents && blog.contents[0].content}
                className='w-full absolute top-[50%] h-auto align-bottom translate-y-[-50%]'
              />
            </div>
            <div className='text-center mb-7'>
              <h2 className=' text-2xl mb-3'>
                {blog?.title ?? 'Inspiration: Rural Living - Mock'}
              </h2>
              <span className='text-primary-400'>By NordicMade on August 1 2, 2015</span>
            </div>
            <div>{blog?.contents && blog.contents.map((content) => renderContent(content))}</div>

            {blog?.images && (
              <div className='grid grid-cols-2 my-6 gap-6'>
                {blog.images.map((image) => renderGaleryImage(image))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='bg-primary-100 py-16'>
        <div className=' max-w-7xl mx-auto pr-4 pl-4 '>
          <div className=' max-w-4xl mx-auto px-4'>
            <h2 className='text-primary pb-16 text-3xl text-center'>
              3 replies to “Inspiration: Rural Living”
            </h2>
            <div className='border-b border-primary-300'>
              <div className='flex flex-row'>
                <div>
                  <img
                    src='https://secure.gravatar.com/avatar/fb411414965058214f1a1d7cf15be210?s=60&d=mm&r=g'
                    alt='img'
                    style={{width: '64px', height: '64px'}}
                    className='absolute top-[-5] rounded-[50%] hidden md:block'
                  />
                </div>

                <div className=' mb-8 md:ml-20'>
                  <p className='text-xl'>{blog?.author && blog.author}</p>
                  <time className='text-primary-400 '>{blog?.publishDate && blog.publishDate}</time>
                  <div className='mt-4'>
                    <p className='text-lg text-primary-500'>
                      Authentic church-key aesthetic marfa Vice. Biodiesel asymmetrical forage
                      seitan, semiotics DIY retro selfies. Jean shorts letterpress dreamcatcher.
                    </p>
                  </div>
                  <div className='mt-5'>
                    <Link to='/' className='text-warning hover:text-primary-900'>
                      Reply
                    </Link>
                  </div>
                </div>
              </div>
              <div className='md:ml-20'>
                <div>
                  <img
                    src='https://secure.gravatar.com/avatar/676d90a1574e9d3ebf98dd36f7adad60?s=60&d=mm&r=g'
                    alt='img'
                    style={{width: '64px', height: '64px'}}
                    className='absolute top-[-5] rounded-[50%] hidden md:block'
                  />
                </div>

                <div className=' mb-8 md:ml-20 '>
                  <p className='text-xl'>Nicholas Sanders</p>
                  <time className='text-primary-400'>August 12, 2015 at 11:13 am</time>
                  <div className='mt-4'>
                    <p className='text-lg text-primary-500'>
                      Fashion axe readymade shabby chic, selfies banjo sartorial gentrify
                      distillery.
                    </p>
                  </div>
                  <div className='mt-5'>
                    <Link to='/' className='text-warning hover:text-primary-900'>
                      Reply
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row mt-5'>
              <div>
                <img
                  src='https://secure.gravatar.com/avatar/676d90a1574e9d3ebf98dd36f7adad60?s=60&d=mm&r=g'
                  alt='img'
                  style={{width: '64px', height: '64px'}}
                  className='absolute top-[-5] rounded-[50%] hidden md:block'
                />
              </div>

              <div className=' mb-8 md:ml-20'>
                <p className='text-xl'>Marie Jenkins</p>
                <time className='text-primary-400 '>August 12, 2015 at 11:15 am</time>
                <div className='mt-4'>
                  <p className='text-lg text-primary-500'>
                    Hoodie leggings street art post-ironic chambray pickled distillery. Cronut
                    meggings keytar church-key. Selfie hashtag skateboard, hella shabby chic bespoke
                    freegan.
                  </p>
                </div>
                <div className='mt-5'>
                  <Link to='/' className='text-warning hover:text-primary-900'>
                    Reply
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-2xl'>Leave a Reply</h3>
              <span className='text-primary-500 text-sm'>
                Your email address will not be published. Required fields are marked *
              </span>
            </div>

            <div className='my-3'>
              <Formik
                initialValues={initialValues}
                validationSchema={commentModelValidationSchema}
                onSubmit={onSubmit}>
                {({errors, values, handleChange}) => (
                  <Form>
                    <Field
                      className='flex flex-col w-full my-2 px-2'
                      type='text'
                      name='comment'
                      label='Comment *'
                      size='full'
                      cols='45'
                      rows='8'
                      error={errors.comment}
                      value={values.comment}
                      onChange={handleChange}
                      as={TextArea}
                    />

                    <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-8 mt-5'>
                      <Field
                        wrapperClassName='w-full'
                        className='my-2 bg-white px-2'
                        type='text'
                        name='name'
                        label='Name *'
                        size='full'
                        error={errors.name}
                        value={values.name}
                        onChange={handleChange}
                        as={Input}
                      />

                      <Field
                        wrapperClassName='w-full'
                        className='bg-white px-2'
                        type='email'
                        name='email'
                        label='Email *'
                        size='full'
                        error={errors.email}
                        value={values.email}
                        onChange={handleChange}
                        as={Input}
                      />
                    </div>

                    <Field
                      type='text'
                      className='bg-white px-2'
                      name='website'
                      label='Website'
                      size='full'
                      wrapperClassName='mt-5'
                      value={values.website}
                      onChange={handleChange}
                      as={Input}
                    />

                    <Button type='submit' color='primary' size='sm' className='p-3 mt-7'>
                      Post Comment
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {showImgModal && (
        <ProductImgDetailModal productImages={blogImagesArray!} onClose={closeModal} />
      )}
    </>
  )
}
