import Image from 'next/image'
import React from 'react'
import logo from '../../public/RYU.png'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-white/60 backdrop-blur-md shadow-sm flex items-center gap-2 px-3 z-50'>
        <Image 
            src={logo}
            alt='logo'
            width={40}
            height={40}
        />
        <Link href='#' className='text-black font-medium'>About Me</Link>
        <Link href='#' className='text-black font-medium'>Work</Link>
        <Link href='#' className='text-black font-medium'>CV</Link>
        
    </div>
  )
}

export default Header