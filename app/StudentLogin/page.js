"use client"
import Link from 'next/link'
import React, { useState } from 'react'



const page = () => {
  const [studemail, setStudEmail] = useState("");
  const [studpass, setStudPass] = useState("");

  const [validStud,setValidStud] = useState(false);

  const realStudEmail = "student@gmail.com";
  const realStudPass = "student@12345";
  
  const [errors,setErrors] = useState({});

  const StudentLoggedIn = () => {

    const validationerror = {};
  
    if(!studemail.trim()){
      validationerror.email = "Email is required";
    }
    else if(!/\S+@\S+\.\S+/.test(studemail)){
      validationerror.email = "Email is not valid";
    }
  
    if(!studpass.trim()){
      validationerror.password = "Password is required";
    }
    else if(studpass.length < 6){
      validationerror.password = "Password should be atleast 6 characters";
    }
    else if(studpass != realStudPass){
      validationerror.password = "Password incorrect"
    }
  
    setErrors(validationerror);
  
  
    if(Object.keys(validationerror).length==0 && studemail === realStudEmail && studpass === realStudPass){
      setValidStud(true);
      alert("Student Login Successful");
      
    }
    

  }

  return (
    <>
        <div className='h-screen'>
          <img src='StudentLog.png' className='lg:h-full lg:w-screen h-0 w-0' />
          <img src='Tabmd.png' className='lg:h-0 sm:h-0 lg:w-0 sm:w-0 md:h-full md:w-full bg-[#F1EDED] h-0 w-0' />
          <img src='MobileHome.png' className='lg:h-0 md:h-0 lg:w-0 md:w-0 bg-[#F1EDED] h-full w-full' />
        </div>

        <div className="absolute lg:top-16 left-2 top-16 bg-white lg:left-72 md:left-60 flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-16">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-5xl font-bold text-black sm:text-5xl">Student Login</h2>
            

            <form className="mt-5">
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-500">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 "
                      type="email"
                      placeholder="Enter student@gmail.com for valid student"
                      id="email"
                      name='email'
                      value={studemail}
                      onChange={(e) => {
                        StudentLoggedIn;
                        setStudEmail(e.target.value);
                      }}
                    ></input>
                    {errors.email && <span className='text-red-600'>{errors.email}</span>}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-500">
                      Password
                    </label>
                  </div>
                  
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm "
                      type="password"
                      placeholder="Enter student@12345 for valid password"
                      id="password"
                      name='password'
                      value={studpass}
                      onChange={(e) => {
                        StudentLoggedIn;
                        setStudPass(e.target.value);
                      }}
                    ></input>
                    {errors.password && <span className='text-red-600'>{errors.password}</span>}
                  </div>
                  <div className='mt-2 text-sm'>
                    <button>Forgot Password ?</button>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#4832f8] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#5649b9] mt-2"
                    onClick={StudentLoggedIn}
                  >
                    Login
                  </button>

                  <Link
                    href={'/StudentMain'}
                    className={`${validStud?'block':'hidden'} inline-flex w-full items-center justify-center rounded-md bg-[#efbe08] px-3.5 py-2.5 font-semibold mt-2`}
                  
                  >
                    Go to Student page
                  </Link>
                </div>
              </div>
              <p className="mt-2 text-base text-gray-600">
              New Student?
              <Link
                href="/StudentRegister"
                className="font-medium text-black ml-1.5"
              >
                Register
              </Link>
            </p>
            </form>

          </div>
        </div>


        
    </>
  )
}

export default page