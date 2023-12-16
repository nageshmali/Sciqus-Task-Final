import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='h-screen'>
          <img src='StudentMain.png' className='lg:h-full lg:w-screen h-0 w-0' />
          <img src='Tabmd.png' className='lg:h-0 sm:h-0 lg:w-0 sm:w-0 md:h-full md:w-full bg-[#F1EDED] h-0 w-0' />
          <img src='MobileHome.png' className='lg:h-0 md:h-0 lg:w-0 md:w-0 bg-[#F1EDED] h-full w-full' />
      </div>

      <div className='absolute lg:top-0 md:top-0 top-10 left-4 flex items-center gap-3 lg:gap-8 lg:left-16 md:gap-8 md:left-16 h-24'>
        <Link href={'/Home'} className='text-xl font-bold py-2 px-4 rounded-lg text-white bg-[#4832f8]'>Home</Link>
        <Link href={'/Home'} className='text-xl font-bold py-2 px-4 rounded-lg text-white bg-[#4832f8]'>Logout</Link>
      </div>

      <div className='absolute lg:left-72 md:left-72 left-4 top-[20%]'>
        <h1 className='lg:text-4xl md:text-2xl text-xl font-bold'>This is a Student Logged In Page !</h1>
      </div>

      <div className='absolute lg:top-[30%] top-52 lg:left-72 left-4 border-gray-400 border rounded-md'>
        <div className="w-[300px] rounded-md border">
        <img
          src='course.jpg'
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4 bg-white">
          <h1 className="inline-flex items-center text-lg font-semibold">
            Learn Frontend Development &nbsp;
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Learn Frontend Development From basics to advance in this 6 month period.
          </p>
          
          <button
            type="button"
            className="mt-4 w-full rounded bg-[#4832f8] px-2 py-1.5 text-sm font-bold text-white"
          >
            Enroll Now
          </button>
        </div>
      </div>
      </div>

    </>
  )
}

export default page