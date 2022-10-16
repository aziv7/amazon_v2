import React from 'react';
import Product from './Product';

const ProductFeed = ({ products }) => {
  return (
    <div className='md:-mt-36 grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {products.map((prod) => (
        <Product product={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ProductFeed;
