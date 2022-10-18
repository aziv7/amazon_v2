import Image from 'next/image';
import React from 'react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header>
      <div className='flex items-center p-1 flex-grow py-2 bg-amazon_blue'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            className='cursor-pointer'
            objectFit='contain'
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            alt='Amazon'
          />
        </div>
        <div className='hidden flex-grow cursor-pointer rounded-md h-9 sm:flex items-center  bg-yellow-400 hover:bg-yellow-500 '>
          <input
            className='p-2 h-full w-6 flex-grow outline-none rounded-l-md flex-shrink px-4'
            type='text'
            placeholder='Search products'
          />

          <SearchIcon className='h-12 p-4' />
        </div>

        <div className='flex items-center text-sm space-x-5 mx-8 whitespace-nowrap text-white'>
          <div onClick={!session ? signIn : signOut} className='link'>
            <p> {session ? `Hello ${session?.user?.name}` : 'Sign In'} </p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p className='font-extrabold md:text-sm'>Returns & Orders</p>
          </div>
          <div className='link relative hidden md:inline'>
            <ShoppingCartIcon className='h-10 ' />
            <div className='rounded-full absolute top-0 left-7 h-4 w-4 bg-yellow-400 text-xs font-bold text-black text-center'>
              8
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
        <p className='link flex items-center space-x-1 '>
          <MenuIcon className='h-6 ' /> <span>All</span>
        </p>
        <p className='link flex items-center space-x-1 '>
          <span>Prime Video</span>
        </p>
        <p className='link flex items-center space-x-1 '>
          <span>Amazon Business</span>
        </p>
        <p className='link flex items-center space-x-1 '>
          <span>Today's Deals</span>
        </p>
        <p className='hidden lg:inline-flex'>Electronics</p>
        <p className='hidden lg:inline-flex'>Food & Grocery</p>
        <p className='hidden lg:inline-flex'>Prime</p>
        <p className='hidden lg:inline-flex'>Buy Again</p>
        <p className='hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
