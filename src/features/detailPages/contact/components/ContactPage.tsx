// Package Imports
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons'
import {faLocationDot, faBriefcase} from '@fortawesome/free-solid-svg-icons'

//Feateure imports
import {ContactSection} from './ContactSection'
export const ContactPage = () => {
  return (
    <div className=' my-11 md:my-16'>
      <div className='ml-16 lg:ml-80'>
        <h1 className='text-3xl mb-6 text-primary'>We’d love to hear from you.</h1>
        <iframe
          className='w-8/12 h-96'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.9016273694012!2d29.05394204323697!3d41.170508505158956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409fe009ae9bcce7%3A0xd4d43d363c18c6e8!2sSar%C4%B1yer%20Belediyesi%20R%C4%B1fat%20Ilgaz%20K%C3%BClt%C3%BCr%20Merkezi%20Ve%20Nejat%20Uygur%20Sahnesi!5e0!3m2!1str!2str!4v1684936842643!5m2!1str!2str'
          width='600'
          height='450'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'></iframe>
      </div>

      <div className='md:flex md:flex-row mx-auto max-w-7xl my-11'>
        <ContactSection
          title='Get in Touch'
          icon={faPaperPlane}
          contactInfoElements={[
            'Tarup 5210, Odense kommune, Danmark',
            'Monday to Friday: 10am to 7pm',
          ]}
          contactCommunicationInfo='hello@example.com'
        />

        <ContactSection
          title='Visit Us'
          icon={faLocationDot}
          contactInfoElements={['Telephone: 703.172.3412', 'Fax: 703.172.2341']}
          contactCommunicationInfo='Get Directions'
        />

        <ContactSection
          title='Work with Us?'
          icon={faBriefcase}
          contactInfoElements={['Etsy mustache selfies Brooklyn', 'letterpress artisan swag.']}
          contactCommunicationInfo='apply@example.com'
        />
      </div>
    </div>
  )
}
