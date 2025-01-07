import React from 'react'
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-50 flex items-center flex-col">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-medium sm:text-5xl">
        Finance Tracker
        <strong className="font-medium text-blue-700 sm:block"> Manage Money. Track Progress. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Take control of your finances. Track income, expenses, and savings effortlessly—all in one place.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/dashboard"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-black-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
  <Image src={'/HOM.png'} alt='dashboard'
  width={1000}
  height={700}
  className='mt-5 rou'
  />
  
</section>
  )
}

export default Hero