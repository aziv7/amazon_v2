import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CheckoutProduct } from '../components';
import Header from '../components/Header';
import { selectItems } from '../slices/cartReducer';

const Checkout = () => {
  const items = useSelector(selectItems);

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
      </main>
    </div>
  );
};

export default Checkout;
