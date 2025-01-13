
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '@/app/Redux/cartSlice';
import { RootState } from '@/app/Redux/store';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { LucideDelete} from 'lucide-react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-semibold">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="py-10 px-5 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-10">Shopping Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center bg-white shadow-md rounded-lg p-4 mb-6">
                <div className="flex-shrink-0 w-24 h-24 relative">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      <LucideDelete/>
                    </button>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-600">Price: ${item.price}</span>
                    <div className="flex items-center ml-4">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="px-2 py-1 border border-gray-300 rounded-lg text-gray-600"
                      >
                        <FaMinus/>
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="px-2 py-1 border border-gray-300 rounded-lg text-gray-600"
                      >
                        <FaPlus/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

       
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cart Summary</h2>
            <div className="flex justify-between mb-4">
              <span className="text-lg text-gray-600">Total Items:</span>
              <span className="text-lg font-semibold">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-lg text-gray-600">Total Price:</span>
              <span className="text-lg font-semibold">${calculateTotal()}</span>
            </div>
            <button
              onClick={handleClearCart}
              className="px-6 py-2 bg-red-500 text-white rounded-lg w-full mb-4"
            >
              Clear Cart
            </button>
            <button
              onClick={() => alert('Proceeding to checkout...')}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg w-full"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
