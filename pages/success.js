import { CheckCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { Header } from '../components';

const success = () => {
  const router = useRouter();
  return (
    <div className='bg-gray-100 h-screen'>
      <Header />

      <main className='max-w-lg mx-auto '>
        <div className='flex flex-col p-10 bg-white'>
          <div className='flex items-center space-x-3 mb-5'>
            <CheckCircleIcon className='text-gray-500 h-10' />

            <h1 className='text-3xl'>
              Thank you, your order has been confirmed
            </h1>
          </div>
          <p>
            {' '}
            Thank you so much for your patience with your purchase of A Pocket
            Full of Rye. It’s not usual for us to have products on backorder
            like this, but it does happen, and I want to thank you for
            understanding. We hope to have your new book in your hands in the
            next 5 days!{' '}
          </p>
          <button
            onClick={() => {
              router.push('/orders');
            }}
            className='button mt-8'>
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default success;
