// Feature Imports
import {AboutSection} from './AboutSection'
import {TeamMember} from './TeamMember'

// Package Imports
import {faFacebookF, faTwitter, faInstagram, faTiktok} from '@fortawesome/free-brands-svg-icons'

export const AboutPage = () => {
  const defaultSocialMedias = [
    {
      socialMediaUrl: '/cindoruk',
      icon: faFacebookF,
    },
    {
      socialMediaUrl: '/',
      icon: faTwitter,
    },
    {
      socialMediaUrl: '/',
      icon: faInstagram,
    },
    {
      socialMediaUrl: '/tiktok',
      icon: faTiktok,
    },
  ]

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='text-2xl md:text-3xl px-32 my-7'>
        <h2>Our story so far.</h2>
      </div>
      <div className=' overflow-hidden align-middle relative px-4'>
        <div
          className="bg-[url('/public/images/about.jpg')] bg-no-repeat object-cover w-full bg-center"
          style={{minHeight: '410px'}}></div>
      </div>

      <div className='px-8 mt-12'>
        <AboutSection title='The Brand'>
          <div className='text-primary-600'>
            <p>
              Messenger bag raw denim health goth pour-over, twee Neutra Vice ethical bespoke. Irony
              hashtag mixtape kogi blog you probably haven’t heard of them, fashion axe readymade
              scenester flexitarian. Ugh bespoke actually vinyl photo booth tattooed paleo Pinterest
              Schlitz. Cronut hella selfies, flexitarian sriracha keffiyeh Intelligentsia biodiesel.
            </p>
            <p>
              Ethical sustainable gastropub chillwave. Gentrify semiotics cold-pressed, narwhal
              hashtag cardigan artisan swag kale chips raw denim wolf tilde. High Life brunch
              stumptown salvia, Godard readymade scenester flexitarian.
            </p>
          </div>
        </AboutSection>

        <AboutSection title='Contact'>
          <div className='text-primary-600'>
            <p className=' mb-5 '>
              Telephone: 703.172.3412
              <br />
              <a href='/' className='text-warning hover:text-primary'>
                hello@example.com
              </a>
            </p>
            <p>
              Van Spartan #73, 1081 Amsterdam, Netherlands
              <br />
              Monday to Friday: 10am to 7pm
            </p>
          </div>
        </AboutSection>

        <AboutSection title='Our Team'>
          <div className='text-primary px-0 team-member'>
            <ul className='flex flex-wrap md:flex md:flex-row '>
              <TeamMember
                src='/images/team-member-1.jpg'
                name='Anthony Moore'
                jobTitle='Founder & CEO'
                socialMedias={defaultSocialMedias}
              />

              <TeamMember
                src='/images/team-member-2.jpg'
                name='Douglas Morgan'
                jobTitle='Creative Director'
                socialMedias={defaultSocialMedias}
              />

              <TeamMember
                src='/images/team-member-3.jpg'
                name='Kimberly Miller'
                jobTitle='Sales Director'
                socialMedias={defaultSocialMedias}
              />
            </ul>
          </div>
        </AboutSection>
      </div>
    </div>
  )
}
