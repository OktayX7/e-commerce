// Style Imports
import '../style/product-detail.scss'

// Package Import

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

// React Imports
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

// Style Imports
import '../style/product-detail.scss'

// Feature Imports
import {getProductAction} from '../productAction'
import {getProductState} from '../productSelector'

// UI Imports
import {ProductImgDetailModal} from './ProductImgDetailModal'

// Hook Imports
import {useAppDispatch, useAppSelector} from 'hooks'
import {ProductDetailModal} from './ProductDetailModal'

export const ProductDetail = () => {
  const dispatch = useAppDispatch()

  const {id} = useParams<{id: string}>()

  const product = useAppSelector(getProductState())

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    scrollTo(0, 0)
    if (id) {
      dispatch(getProductAction(id))
    }
  }, [dispatch, id])

  const {images, additionalInformation, materialDetails} = product

  return (
    <div>
      <div className='lg:bg-[#eee]'>
        <ProductDetailModal setShowModal={setShowModal} />
      </div>

      <div className='max-w-7xl mx-auto px-3'>
        <Tabs className='text-primary-400'>
          <TabList className='flex gap-20 justify-center my-5'>
            {['Description', 'Additional Information'].map((tab, index) => (
              <Tab key={`${tab}__${index}`} className='cursor-pointer focus:outline-none pb-1'>
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanel>
            <div className='pt-10 pb-12'>
              <p className='mb-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo eius dolorem
                distinctio in, earum asperiores corporis mollitia necessitatibus commodi. Omnis,
                asperiores ipsam. Similique non, voluptas esse, culpa ducimus, corporis soluta
                voluptate assumenda architecto illum repellendus delectus temporibus dolore odit
                ipsum eaque ex ipsam ipsa odio iste. Velit, aspernatur neque?
              </p>

              <ul className='list-disc pl-4'>
                {materialDetails &&
                  materialDetails.map((material, index) => (
                    <li className='leading-9' key={index}>
                      {material}
                    </li>
                  ))}
              </ul>
            </div>
          </TabPanel>
          <TabPanel className='flex justify-center'>
            <table className='block pt-10 pb-12 w-1/2'>
              <tbody>
                {additionalInformation &&
                  Object.entries(additionalInformation).map(([key, value]) => (
                    <tr key={key} className='leading-10'>
                      <td className='text-primary-800 capitalize w-1/4 font-bold'>{key}</td>
                      <td className='ml-4'>{value}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </div>

      {showModal && (
        <ProductImgDetailModal productImages={images} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}
