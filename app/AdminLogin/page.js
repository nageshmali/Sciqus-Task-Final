"use client"
import Link from 'next/link';
import React, { useState } from 'react'


const page = () => {

  const [adminemail,setAdminEmail] = useState("");
  const [adminpass,setAdminPass] = useState("");

  const [validAdmin,setValidAdmin] = useState(false);

  const realAdminEmail = "admin@gmail.com";
  const realAdminPass = "admin@12345";

  const [errors,setErrors] = useState({});

  const goAdminEnter = () =>{

    const validationerror = {};

    if(!adminemail.trim()){
      validationerror.email = "email is required";
    }
    else if(!/\S+@\S+\.\S+/.test(adminemail)){
      validationerror.email = "email is not valid";
    }

    if(!adminpass.trim()){
      validationerror.password = "password is required";
    }
    else if(adminpass.length < 6){
      validationerror.password = "password should be atleast 6 characters";
    }
    else if(adminpass != realAdminPass){
      validationerror.password = "password incorrect"
    }

    setErrors(validationerror);


    if(Object.keys(validationerror).length==0 && adminemail === realAdminEmail && adminpass === realAdminPass){
      setValidAdmin(true)
      alert("Admin Login Successful");
      
    }
  }



  return (
    <>
      <div className='h-screen'>
          <img src='AdminLog.png' className='lg:h-full lg:w-screen h-0 w-0' />
          <img src='Tabmd.png' className='lg:h-0 sm:h-0 lg:w-0 sm:w-0 md:h-full md:w-full bg-[#F1EDED] h-0 w-0' />
          <img src='MobileHome.png' className='lg:h-0 md:h-0 lg:w-0 md:w-0 bg-[#F1EDED] h-full w-full' />
      </div>

      <div className="absolute lg:top-4 md:top-4 top-16 lg:right-1/4 md:right-1/4 flex items-center justify-center px-4 py-10 lg:px-3 lg:py-12">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-5xl font-bold text-black sm:text-5xl">Admin Login</h2>
            

            <form className="mt-5">
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-500">
                    Admin Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 "
                      type="email"
                      name='email'
                      placeholder="Email"
                      id="email"
                      value={adminemail}
                      onChange={(e)=>{
                        goAdminEnter
                        setAdminEmail(e.target.value)
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
                      name='password'
                      placeholder="Password"
                      id="password"
                      value={adminpass}
                      onChange={(e)=>{
                        goAdminEnter;
                        setAdminPass(e.target.value);
                      }}
                    ></input>
                    {errors.password && <span className='text-red-600'>{errors.password}</span>}
                  </div>
                </div>
                <div>
                  <button
                    type='button'
                    className={`inline-flex w-full items-center justify-center rounded-md bg-[#4832f8] px-3.5 py-2.5 font-semibold text-white hover:bg-[#5649b9] mt-2`}
                    onClick={goAdminEnter}
                  >
                    Login
                  </button>

                  

                </div>
                <Link 
                  href={'/AdminMain'}
                  className={`inline-flex w-full items-center justify-center rounded-md bg-[#efbe08] ${validAdmin==true?'block':'hidden'} px-3.5 py-2.5 font-semibold text-black mt-16`}
                  >Go to Admin Page</Link>
                
              </div>
              
            </form>

          </div>
        </div>
    </>
  )
}

export default page