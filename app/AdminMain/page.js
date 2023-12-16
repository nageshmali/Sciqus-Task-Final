"use client"
import React, { useState } from 'react'
import Sample from '../Component/Sample'
import Link from 'next/link'


const page = () => {

  const [page,setPage] = useState(false);
  const viewAll = () => {
    setPage(true);
  }

  return (
    <>
      <div className='h-screen'>
          <img src='StudentMain.png' className='lg:h-full lg:w-screen h-0 w-0' />
          <img src='Tabmd.png' className='lg:h-0 sm:h-0 lg:w-0 sm:w-0 md:h-full md:w-full bg-[#F1EDED] h-0 w-0'/>
          <img src='MobileHome.png' className='lg:h-0 md:h-0 lg:w-0 md:w-0 bg-[#F1EDED] h-full w-full' />
      </div>

      <div className='absolute lg:top-0 md:top-0 top-6 flex items-center gap-2 left-4 md:gap-8 md:left-16 lg:gap-8 lg:left-16 h-24'>
        <Link href={''} onClick={viewAll} className='text-xl font-bold py-2 px-4 rounded-lg text-white bg-[#4832f8]'>View All Students</Link>
        <Link href={'/Home'} className='text-xl font-bold py-2 px-4 rounded-lg text-white bg-[#4832f8]'>Logout</Link>
      </div>

      <div className='absolute lg:left-80 md:left-80 left-2 lg:top-[20%] md:top-[20%] top-36'>
        <h1 className='lg:text-4xl md:text-4xl text-2xl font-bold'>This is Admin Logged In Page !</h1>
      </div>

      <div className={`${page?'block':'hidden'} lg:w-auto md:w-auto w-screen  absolute lg:top-[30%] md:top-[30%] top-44 lg:left-72 md:left-72`}>
        <Sample/>
      </div>
    </>
  )
}

export default page