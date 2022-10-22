import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cartReducer';
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
    quantity,
  },
}) {
  const dispatch = useDispatch();

  const addProductToBasket = () => {
    dispatch(
      addToCart({
        id,
        category,
        rate,
        prime,
        description,
        image,
        price,
        rating,
        title,
      })
    );
  };

  const removeFromBasket = () => {
    dispatch(
      removeFromCart({
        id,
      })
    );
  };

  return (
    <div className='grid grid-cols-5'>
      <Image src={image} height={200} width={200} objectFit='contain' />

      {/**Mid */}
      <div className='col-span-3 text-xl mx-5'>
        <p>
          {quantity} x {title}
        </p>

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
      {/**right add/remove buttons */}

      <div className='my-auto justify-self-end flex flex-col space-y-5'>
        <button onClick={addProductToBasket} className='button mt-auto'>
          Add to Basket
        </button>

        <button onClick={removeFromBasket} className='button mt-auto'>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
