import React from 'react'

function Stat() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-52 sm:px-6 sm:py-62 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-medium text-gray-900 sm:text-4xl dark:text-white">
          Trusted by eCommerce Businesses
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-300">
          Tailor your finance tracker to fit your needs and goals effortlessly. Stay in control of your finances!
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-900">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-300">
            Total Sales
          </dt>

          <dd className="text-4xl font-bold text-blue-600 md:text-5xl dark:text-blue-400">
            $4.8m
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-900">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-300">
            Official Addons
          </dt>

          <dd className="text-4xl font-bold text-blue-600 md:text-5xl dark:text-blue-400">
            24
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-900">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-300">
            Total Addons
          </dt>

          <dd className="text-4xl font-bold text-blue-600 md:text-5xl dark:text-blue-400">
            86
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-900">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-300">
            Downloads
          </dt>

          <dd className="text-4xl font-bold text-blue-600 md:text-5xl dark:text-blue-400">
            86k
          </dd>
        </div>
      </dl>
    </div>
  )
}

export default Stat;
