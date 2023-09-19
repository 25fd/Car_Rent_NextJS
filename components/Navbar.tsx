import React from 'react'
import Image from 'next/image';

import Link from 'next/link';

import { CustomButton } from '@/components';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6'>
            <Link href='/' className='flex justify-center items-center'>

                <Image 
                src='/logo.svg' 
                alt='logo' 
                width={118} 
                height={18} 
                className='object-contain'/>
                </Link>

                <CustomButton
                title='Sign In'
                btnType="button"
                containerStyles=' text-primary-blue border-primary-blue border-2 rounded-full px-6 py-2 text-sm font-semibold'
                />
            </nav>
        </header>
  )
}

export default Navbar