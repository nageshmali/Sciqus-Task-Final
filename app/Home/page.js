"use client"
import Link from 'next/link'
import React from 'react'


const page = () => {
    return (
        <>
            <div className='' >
                <div className='homep h-screen relative'>
                    <img src='mainbg.png' className='lg:h-full lg:w-screen h-0 w-0'/>
                    <img src='Tabmd.png' className='lg:h-0 sm:h-0 lg:w-0 sm:w-0 md:h-full md:w-full bg-[#F1EDED] h-0 w-0'/>
                    <img src='MobileHome.png' className='lg:h-0 md:h-0 lg:w-0 md:w-0 bg-[#F1EDED] h-full w-full'/>
                    
                </div>

                <div className='hero flex flex-col wrap items-center justify-center w-1/2 lg:gap-10 md:gap-5 gap-3 absolute top-[33%] lg:left-0 md:left-[25%] left-[20%]'>
                    <h1 className='lg:text-7xl lg:font-bold md:text-5xl md:font-bold  text-xl font-bold'>You are a ?</h1>
                    <div className='flex lg:flex-row md:flex-row flex-col lg:gap-10 md:gap-5 gap-3'>
                        <button className='lg:text-5xl lg:font-bold bg-[#efbe08] lg:py-4 lg:px-6 rounded
                        md:text-3xl md:font-bold md:py-2 md:px-4 text-xl font-bold py-1 px-2'>
                            <Link
                            href={'/StudentRegister'}
                            >
                            Student
                            </Link>
                        </button>
                        <button className='lg:text-5xl lg:font-bold bg-[#4832f8] lg:py-4 lg:px-6 rounded
                        md:text-3xl md:font-bold md:py-2 md:px-4 text-xl font-bold py-1 px-2 text-white'>
                            <Link
                            href={'/AdminLogin'}
                            >
                            Admin
                            </Link>
                        </button>
                        
                    </div>
                </div>

                <div className='absolute lg:top-10 md:top-20 top-40 lg:left-36 md:left-[25%] left-4'>
                    <h1 className='font-bold text-xl lg:text-5xl md:text-5xl'>Welcome to Student Registration System</h1>
                </div>
            </div>
            
        </>
    )
}

export default page