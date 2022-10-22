import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
function CheckoutProduct({
  product: {
    id,
    category,
    rate,
    prime,
    description,
    image,
    price,
    rating,
    title,
  },
}) {
  return (
    <div className='grid grid-cols-5'>
      <Image src={image} height={200} width={200} objectFit='contain' />

      {/**Mid */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>

        <div className='flex '>
          {Array(rate)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-400' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-4'>{description}</p>

        <CurrencyFormat prefix={'$'} displayType={'text'} value={price} />

        {prime && (
          <div className='flex items-center space-x-2   '>
            <img
              className='w-12 '
              src='https://links.papareact.com/fdw'
              alt=''
              loading='lazy'
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
