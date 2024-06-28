'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/EC.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const path = usePathname()
  return (
    <div className='fixed top-0 left-0 w-full bg-white/60 backdrop-blur-md shadow-sm flex items-center gap-3 px-3 z-50 py-2'>
      <div className='w-full max-w-screen-lg mx-auto lg:px-20 justify-between flex items-center gap-3'>
        <Link href="/">
          <Image 
            src={logo}
            alt='logo'
            width={35}
            height={35}
          />
        </Link>
        <div className='flex gap-2 lg:gap-6 lg:text-lg'>
          <Link href={path === '/' ? '#about-me' : '/#about-me'} className='text-black font-medium'>About Me</Link>
          <Link href={path === '/' ? '#work' : '/#work'} className='text-black font-medium'>Work</Link>
          <Link href='/cv' className='text-black font-medium'>CV</Link>
        </div>
      </div>
    </div>
  )
}

export default Header