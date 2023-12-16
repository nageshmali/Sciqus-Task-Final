import Link from 'next/link'
import React from 'react'

const students = [
  {
    name: 'Nagesh Mali',
    title: 'Front-end Development',
    email: 'malinagesh@gmail.com',
  },
  {
    name: 'Rakesh Sharma',
    title: 'Back-end Development',
    email: 'rakeshsharma@gmail..com',
  },
  {
    name: 'Ketan Shah',
    title: 'Full Stack Development',
    email: 'kshah@gmail.com',
  },
  {
    name: 'Rahul Verma',
    title: 'Android Development',
    email: 'rahool@gmail.com',
  },
]

export function Sample() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        className="px-4 py-3.5"
                      >
                        <span>Student Name</span>
                      </th>
                      <th
                        className="px-4 py-3.5"
                      >
                        <span>Student Email</span>
                      </th>
                      <th
                        className="px-12 py-3.5"
                      >
                        Course Taken
                      </th>

                      <th
                        className="px-4 py-3.5 text-left"
                      >
                        Payment
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {students.map((stud) => (
                      <tr key={stud.name} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-4 lg:py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="">{stud.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                            <div className="">{stud.email}</div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className=" text-gray-900">Frontend Developer</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          Paid
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full border-gray-300">
          <div className="mt-2 flex items-center justify-end">
            <div className="space-x-2">
              <Link
                href={''}
                className="rounded-md bg-[#4832f8] px-3 py-2 font-bold text-white hover:bg-[#6f5df8]"
              >
                &larr; Previous
              </Link>
              <Link
                href={'/AdminMain2'}
                className="rounded-md bg-[#efbe08] px-3 py-2 font-bold hover:bg-[#ffdb58]"
              >
                Next &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sample