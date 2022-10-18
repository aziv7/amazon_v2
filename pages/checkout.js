import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';

const Checkout = () => {
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/**left section */}
        <div className='flex-grow p-5 shadow-sm'>
          <Image
            objectFit='contain'
            width={1020}
            height={250}
            src='https://links.papareact.com/ikj'
          />
        </div>
        <div className='flex flex-col p-5 space-y-10 bg-white '>
          <h1 className='text-3xl border-b pb-4'>Shopping Cart</h1>
        </div>

        {/**right section */}
      </main>
    </div>
  );
};

export default Checkout;
