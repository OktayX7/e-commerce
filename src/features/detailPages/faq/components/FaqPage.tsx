// Feature Imports
import {FaqSection} from './FaqSection'
import {FaqSectionItem} from './FaqSectionItem'
import {faqArray} from '../faqPageArr'

export const FaqPage = () => {
  return (
    <div className='max-w-7xl mx-auto mb-10'>
      <div className='mt-4'>
        {faqArray.map((faq, index) => {
          const {title, questions, border} = faq

          return (
            <FaqSection key={`${title}_${index}`} border={border} title={title}>
              {questions.map((item, index) => {
                const {question, answer} = item

                return (
                  <FaqSectionItem key={`${question}_${index}`} question={question}>
                    <p className='lg:w-2/4'>{answer}</p>
                  </FaqSectionItem>
                )
              })}
            </FaqSection>
          )
        })}
      </div>
    </div>
  )
}
