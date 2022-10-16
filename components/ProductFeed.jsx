import React from 'react';
import Product from './Product';

const ProductFeed = ({ products }) => {
  return (
    <div className='md:-mt-36 grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {products.slice(0, 4).map((prod) => (
        <Product product={prod} key={prod.id} />
      ))}

      <img
        loading='lazy'
        className='md:col-span-full'
        src='https://links.papareact.com/dyz'
        alt=''
      />
      <div className='md:col-span-2 lg:col-span-1'>
        {products.slice(4, 5).map((prod) => (
          <Product product={prod} key={prod.id} />
        ))}
      </div>

      {products.slice(6).map((prod) => (
        <Product product={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ProductFeed;
