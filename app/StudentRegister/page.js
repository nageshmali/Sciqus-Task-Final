"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {

  const [regDone, setRegDone] = useState(false);

  const [mainStudent, setMainStudent] = useState([]);

  const [errors, setErrors] = useState({});


  const [studfname, setStudFName] = useState("");
  const [studlname, setStudLName] = useState("");
  const [studemail, setStudEmail] = useState("");
  const [studpass, setStudPass] = useState("");


  const submitStudent = () => {
    const validationerror = {};

    if (!studfname.trim()) {
      validationerror.fname = "First Name is required";
    }

    if (!studlname.trim()) {
      validationerror.lname = "Last Name is required";
    }

    if (!studemail.trim()) {
      validationerror.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(studemail)) {
      validationerror.email = "email is not valid";
    }

    if (!studpass.trim()) {
      validationerror.password = "password is required";
    }
    else if (studpass.length < 6) {
      validationerror.password = "password should be atleast 6 characters";
    }


    setErrors(validationerror);


    if (Object.keys(validationerror).length == 0) {

      setMainStudent([...mainStudent, { studfname, studlname, studemail, studpass }]);

      setRegDone(true);


      setStudFName("");
      setStudLName("");
      setStudEmail("");
      setStudPass("");


      alert("Student Registration Success");

    }

  }

  return (
    <>
      <div>
        <div className='h-screen'>
          <img src='StudentLog.png' className='lg:h-full lg:w-screen h-0 w-0' />
          <img src='Tabmd.png' className='lg:h-0 sm:h-0 lg:w-0 sm:w-0 md:h-full md:w-full bg-[#F1EDED] h-0 w-0' />
          <img src='MobileHome.png' className='lg:h-0 md:h-0 lg:w-0 md:w-0 bg-[#F1EDED] h-full w-full' />
        </div>

        <div className={`${regDone ? 'block' : 'hidden'} absolute top-32 lg:left-36 md:left-36 left-10`} >
          <h1 className='mb-6 text-4xl font-bold'>Student Registration Successfull</h1>
          <Link
            href={'/StudentLogin'}
            className='rounded-md bg-[#efbe08] px-3.5 py-2.5 font-semibold text-black'
          >Go to Student Login Page</Link>
        </div>


        <div className={`absolute ${regDone ? 'hidden' : 'block'} top-10 bg-white left-4 md:left-60 lg:left-72 px-4 py-10 md:px-6 md:py-2 lg:px-8 lg:py-2 lg:top-10 md:top-10`}>
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-4xl font-bold text-black sm:text-5xl">Register Student</h2>


            <form className="mt-2">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-500">
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 text-sm placeholder:text-gray-400" type="text" placeholder="Enter First Name"
                      id="fname"
                      name='fname'
                      value={studfname}
                      onChange={(e) => {
                        submitStudent;
                        setStudFName(e.target.value);
                      }}
                    ></input>
                    {errors.fname && <span className='text-red-600'>{errors.fname}</span>}
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-500">
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 text-sm placeholder:text-gray-400" type="text" placeholder="Enter Last Name"
                      id="lname"
                      name='lname'
                      value={studlname}
                      onChange={(e) => {
                        submitStudent;
                        setStudLName(e.target.value);
                      }}
                    ></input>
                    {errors.lname && <span className='text-red-600'>{errors.lname}</span>}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-500">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 "
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      value={studemail}
                      onChange={(e) => {
                        submitStudent;
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
                      placeholder="Password"
                      id="password"
                      name='password'
                      value={studpass}
                      onChange={(e) => {
                        setStudPass(e.target.value);
                      }}
                    ></input>
                    {errors.password && <span className='text-red-600'>{errors.password}</span>}
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#4832f8] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#5649b9]"
                    onClick={submitStudent}
                  >
                    Create Student Account
                  </button>
                </div>
              </div>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?
                <Link
                  href="/StudentLogin"
                  className="font-medium text-black ml-1.5"
                >
                  Login
                </Link>
              </p>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default page;