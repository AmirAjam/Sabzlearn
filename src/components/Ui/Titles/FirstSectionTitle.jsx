import React from 'react'

const FirstSectionTitle = ({children}) => {
  return (
    <h3 className='section-head__title relative font-kalameh text-base md:text-lg text-gray-700
     dark:text-gray-400 first-section-title w-fit'>
        {children}
    </h3>
  )
}

export default FirstSectionTitle