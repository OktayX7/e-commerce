/* eslint-disable @typescript-eslint/no-non-null-assertion */
// React Imports
import {FC, useEffect, useRef, useState} from 'react'

// Hook Imports
import {useAppDispatch} from 'hooks'

// UI Imports
import {Input} from 'components'

// Package Imports
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

// Feature Imports
import {setQueryFilterAction} from '../productAction'

interface ProductSearchProps {
  isOpenSearch: boolean
  setIsOpenSearch: (isOpenSearch: boolean) => void
}

export const ProductSearch: FC<ProductSearchProps> = ({isOpenSearch, setIsOpenSearch}) => {
  const dispatch = useAppDispatch()
  const setQueryFilter = (queryFilter: string) => dispatch(setQueryFilterAction(queryFilter))

  const [inputValue, setInputValue] = useState<string>('')

  const searchRef = useRef<HTMLFormElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const searchClasses = classNames('relative pt-9 pb-1', {
    'height-animation-open': isOpenSearch,
    'height-animation-close': !isOpenSearch,
  })

  useEffect(() => {
    if (isOpenSearch) {
      searchRef.current?.querySelector('input')?.focus()
    }
    if (!isOpenSearch) {
      setTimeout(() => {
        searchRef.current?.classList.add('hidden')
      }, 500)
    }
  }, [isOpenSearch])

  return (
    <>
      <form
        onSubmit={(event) => {
          // Sayfa yenilemesini onlemek icin preventDefault atildi.
          event.preventDefault()

          setIsOpenSearch(false)
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
          setQueryFilter(searchInputRef.current?.value!)
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          searchInputRef!.current!.value = ''
          setInputValue('')
        }}
        ref={searchRef}
        className={searchClasses}>
        <Input
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
          inputRef={searchInputRef}
          type='text'
          name='search'
          size='full'
          placeholder='Search Products'
          className='border-none text-2xl px-0 search-input'
        />
        <FontAwesomeIcon
          onClick={() => {
            setIsOpenSearch(false)
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            searchInputRef!.current!.value = ''
          }}
          icon={faXmark}
          className='text-primary-300 absolute right-2 top-12 text-2xl cursor-pointer'
        />
      </form>
      {inputValue.length > 2 && isOpenSearch && (
        <p className='pt-4 text-primary-400 text-sm animate-bounce'>
          press <span className='underline'>Enter</span> to search
        </p>
      )}
    </>
  )
}
