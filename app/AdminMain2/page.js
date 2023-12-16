"use client"
import React, { useState } from 'react'
import Sample2 from '../Component/Sample2'
import Link from 'next/link'


const page = () => {


  return (
    <>
      <div className='h-screen'>
          <img src='StudentMain.png' className='lg:h-full lg:w-screen h-0 w-0' />
          <img src='Tabmd.png' className='lg:h-0 sm:h-0 lg:w-0 sm:w-0 md:h-full md:w-full bg-[#F1EDED] h-0 w-0' />
          <img src='MobileHome.png' className='lg:h-0 md:h-0 lg:w-0 md:w-0 bg-[#F1EDED] h-full w-full' />
      </div>

      <div className='absolute lg:top-0 md:top-0 top-6 flex items-center gap-8 lg:left-16 md:left-16 left-10 h-24'>
        <Link href={'/Home'} className='text-xl font-bold py-2 px-4 rounded-lg text-white bg-[#4832f8]'>Logout</Link>
      </div>

      <div className='absolute lg:left-80 md:left-40 left-6 lg:top-[20%] md:top-[20%] top-40'>
        <h1 className='lg:text-4xl md:text-2xl text-2xl font-bold'>This is Admin Logged In Page !</h1>
      </div>

      <div className={`lg:w-auto md:w-auto w-screen absolute lg:top-[30%] md:top-[30%] top-48 lg:left-72 md:left-36 `}>
        <Sample2/>
      </div>
    </>
  )
}

export default page