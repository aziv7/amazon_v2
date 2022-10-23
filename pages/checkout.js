import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { CheckoutProduct } from '../components';
import Header from '../components/Header';
import { selectItems, selectItemsPrice } from '../slices/cartReducer';

const Checkout = () => {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const price = useSelector(selectItemsPrice);

  console.log(price);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    let prodcts = [];
    items.map((e) => {
      let index = prodcts.findIndex((p) => p.id == e.id);

      if (index == -1) prodcts.push({ ...e, quantity: 1 });
      else prodcts[index].quantity += 1;
    });

    setProducts(prodcts);
  }, [items]);

  const checkout = () => {};

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
          <h1 className='text-3xl border-b pb-4'>
            {items.length > 0 ? 'Shopping Cart' : 'Shopping Cart is empty'}{' '}
            Shopping Cart
          </h1>
          {products.map((item) => (
            <CheckoutProduct product={item} key={item.id} />
          ))}
        </div>

        {/**right section */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items.length} items):{' '}
                <span className='font-bold'>
                  {' '}
                  <CurrencyFormat
                    prefix={'$'}
                    displayType={'text'}
                    value={price}
                  />{' '}
                </span>
              </h2>

              <span className='font-bold'></span>
              <button
                disabled={!session}
                className={` button mt-2 ${
                  !session &&
                  'from-gray-300 to-gray-500 border-gray-200 cursor-not-allowed text-gray-200'
                }`}
                onClick={!session ? signIn : checkout}>
                {!session ? 'SignIn to checkout' : 'Checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
