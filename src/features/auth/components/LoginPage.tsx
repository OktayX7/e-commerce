// react imports
import {FC, useCallback, PropsWithChildren} from 'react'
import {useState} from 'react'

// Package Imports
import {useLocation} from 'react-router-dom'

// UI Imports
import {Button, Modal} from 'components/Ui'

// Feature Imports
import {RegisterComponent} from './RegisterComponent'
import {SignInComponent} from './SignInComponent'
import {getErrorState} from '../authSelector'

// Hook Imports
import {useAppSelector} from 'hooks'

interface LoginPageContainerProps extends PropsWithChildren {
  isLoginPage: boolean
  isOpen: boolean
  onClose?: () => void
  animation?: boolean
}

const LoginPageContainer: FC<LoginPageContainerProps> = ({
  isLoginPage,
  isOpen,
  onClose,
  children,
  animation,
}) => {
  return (
    <>
      {isLoginPage && (
        <div className=' w-10/12  md:w-6/12 lg:w-4/12 mx-auto my-20 py-1 '>{children}</div>
      )}
      {!isLoginPage && (
        <Modal
          title='Sign In'
          modalBodyClassName='py-8 px-16'
          modalClassName='top-1.75/12 left-1/3 w-1/3 bg-white rounded-lg shadow-lg z-50 fixed '
          isOpen={isOpen}
          onClose={onClose!}
          animation={animation}>
          {children}
        </Modal>
      )}
    </>
  )
}

interface LoginPageProps {
  isOpen?: boolean
  onClose?: () => void
}

export const LoginPage: FC<LoginPageProps> = ({isOpen, onClose}) => {
  const [isLogin, setIsLogin] = useState(true)
  const [addAnimation, setAddAnimation] = useState(false)
  const toggleIsLogin = () => {
    setIsLogin(!isLogin)
    setAddAnimation(true)
    setTimeout(() => {
      setAddAnimation(false)
    }, 300)
  }

  const location = useLocation()
  const isLoginPage = location.pathname === '/auth/login'

  const error = useAppSelector(getErrorState())

  // UseCallBack Nedir ? -> https://blog.bitsrc.io/5-ways-to-avoid-react-component-re-renderings-90241e775b8c
  const renderAuthButton = useCallback(() => {
    return (
      <>
        <div className='flex items-center justify-center mt-4'>
          <hr className='border-gray-300 border-1 w-full mr-3' />
          <span className='text-gray-500 font-medium'> or </span>
          <hr className='border-gray-300 border-1 w-full ml-3' />
        </div>

        <Button
          onClick={toggleIsLogin}
          type='button'
          color='transparent'
          size='full'
          className='p-3 mt-4'>
          {isLogin ? <span>Create an account</span> : <span>Already have an account?</span>}
        </Button>
      </>
    )
  }, [isLogin])

  return (
    <LoginPageContainer
      animation={addAnimation}
      isLoginPage={isLoginPage}
      isOpen={isOpen!}
      onClose={onClose}>
      {error && <h2 className='bg-red-400 text-red-700 px-4 py-3 mb-3 rounded-lg'>{error}</h2>}

      {isLogin && <SignInComponent />}
      {!isLogin && <RegisterComponent />}
      {renderAuthButton()}
    </LoginPageContainer>
  )
}
