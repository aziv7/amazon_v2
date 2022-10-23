import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { images } from '../next.config';

const Order = ({ order }) => {
  return (
    <div className='relative border rounded-md'>
      <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
        <div>
          <p className='font-bold text-xs'>ORDER PLACED</p>
        </div>
        <div>
          <p className='text-xs font-bold'>TOTAL</p>
          <p>
            <CurrencyFormat
              prefix={'$'}
              displayType={'text'}
              value={order?.amount}
            />
          </p>
        </div>
        <p className='flex-1 text-right text-blue-500 text-sm whitespace-nowrap sm:text-xl self-end'>
          {order?.items.length} items
        </p>
        <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>
          ORDER # {order?.id}
        </p>
      </div>
      <div className='p-5 sm:p-10'>
        <div className='flex space-x-6 overflow-x-auto '>
          {images.map((img) => (
            <img src={img} className='h-20 object-contain sm:h-32' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
