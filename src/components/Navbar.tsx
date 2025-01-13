
'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/Redux/store'; 
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa'; 

const Navbar = () => {
 
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <nav className=" py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5">
        
        <div className="relative">
          <Link href="/Cart">
            <FaShoppingCart className="text-4xl cursor-pointer " />
          </Link>

        
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
