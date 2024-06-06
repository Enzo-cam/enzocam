import React from 'react'
import ContactRRSS from './ContactRRSS'

const Perfil = () => {
  return (
    <div className='w-full max-w-screen-lg mx-auto lg:px-20 gap-3'>
        <h1 className='text-3xl'>Hi, I'm </h1>
        <h1 className='text-3xl font-medium'>Enzo Cámera </h1>
        <h3 className='text-grisOsc text-xl mt-1 font-normal'>Frontend Developer at <span className='font-semibold text-grisAbout'>ROD</span></h3>

        <ContactRRSS />
    </div>
  )
}

export default Perfil