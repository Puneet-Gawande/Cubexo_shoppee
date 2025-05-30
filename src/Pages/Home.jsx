import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='max-w-6xl mx-auto p-4'>
      <div className='text-center mx-auto p-4'>
        <h1 className='text-5xl font-bold text-gray-700 mb-6'>
          Welcome to ShopApp
        </h1>
        <p className='text-xl text-gray-500 mb-8 max-w-2xl mx-auto'>
          Discover the best products at unbeatable prices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/products"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Shop Now
          </Link>

          <Link
            to="/cart"
            className="bg-blue-500 text-white  px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            View Cart
          </Link>
        </div>
      </div>
    
    <div className='grid grid-cols-1 gap-6 mt-3'>
      <div className='bg-white p-6 rounded-lg shadow-md text-center'>
        <h3 className='text-lg font-black'>Free Delivery</h3>
        <p className='text-gray-500 text-center pt-2'>Free Shiping on all orders over 1000</p>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md text-center'>
        <h3 className='text-lg font-black'>Quality Product</h3>
        <p className='text-gray-500 text-center pt-2'>100% Authentic and Original items</p>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md text-center'>
        <h3 className='text-lg font-black'>Secure Payment</h3>
        <p className='text-gray-500 text-center pt-2'>Your Payment information is safe with us</p>
      </div>
      </div>
    </div>
  )
}

export default Home