import Head from 'next/head';
import { Banner, Header, ProductFeed } from '../components';
import axios from 'axios';

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        {/**Banner */}
        <Banner />
        {/**Products */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const prod = await axios.get('https://fakestoreapi.com/products');
  return {
    props: {
      products: prod.data,
    },
  };
}
