/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Author: Brian McCarthy
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';
import { Trash2, Plus, Minus, ArrowLeft, CreditCard } from 'lucide-react';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Helper to calculate total cost for a single item type
  const calculateTotalCost = (item) => {
    const numericCost = parseFloat(item.cost.replace('$', ''));
    return (numericCost * item.quantity).toFixed(2);
  };

  // Helper for grand total
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
        const numericCost = parseFloat(item.cost.replace('$', ''));
        return total + (numericCost * item.quantity);
    }, 0).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
        handleRemove(item.name);
    }
  };

  const handleRemove = (plantName) => {
    dispatch(removeItem(plantName));
  };

  const handleCheckoutShopping = (e) => {
    alert('Coming Soon');
  };

  const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-green-900">Your Shopping Cart</h2>
        <div className="flex items-center space-x-4">
            <div className="bg-white px-6 py-3 rounded-2xl border border-stone-100 shadow-sm">
                <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">Total Plants</p>
                <p className="text-2xl font-bold text-green-700">{totalItemsCount}</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl border border-stone-100 shadow-sm">
                <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">Total Amount</p>
                <p className="text-2xl font-bold text-green-700">${calculateTotalAmount()}</p>
            </div>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-stone-200">
            <p className="text-stone-500 text-lg mb-6">Your cart is as empty as a pot without a plant.</p>
            <button 
                onClick={onContinueShopping}
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-700 transition-all shadow-md active:scale-95"
            >
                <ArrowLeft size={20} />
                <span>Harvest Some Plants</span>
            </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex items-center space-x-6 hover:shadow-md transition-shadow">
                        <div className="size-24 rounded-xl overflow-hidden shadow-inner flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-grow flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-stone-800">{item.name}</h3>
                                <p className="text-green-700 font-semibold">{item.cost}</p>
                                <p className="text-stone-400 text-xs mt-1">Subtotal: ${calculateTotalCost(item)}</p>
                            </div>
                            
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center bg-stone-50 rounded-xl p-1 border border-stone-200">
                                    <button 
                                        onClick={() => handleDecrement(item)}
                                        className="p-2 hover:bg-white rounded-lg transition-colors text-stone-600 cursor-pointer"
                                    >
                                        <Minus size={18} />
                                    </button>
                                    <span className="w-10 text-center font-bold text-stone-800">{item.quantity}</span>
                                    <button 
                                        onClick={() => handleIncrement(item)}
                                        className="p-2 hover:bg-white rounded-lg transition-colors text-stone-600 cursor-pointer"
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>
                                <button 
                                    onClick={() => handleRemove(item.name)}
                                    className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                                    title="Remove item"
                                >
                                    <Trash2 size={22} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="lg:col-span-1">
                <div className="bg-green-50 p-8 rounded-3xl border border-green-100 space-y-6 sticky top-28">
                    <h3 className="text-2xl font-bold text-green-900">Summary</h3>
                    <div className="space-y-4 text-stone-700">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="font-bold">${calculateTotalAmount()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span className="text-green-600 font-bold uppercase text-sm">Free</span>
                        </div>
                        <hr className="border-green-200" />
                        <div className="flex justify-between text-xl text-green-900 mt-4">
                            <span className="font-bold">Total</span>
                            <span className="font-black">${calculateTotalAmount()}</span>
                        </div>
                    </div>
                    <div className="space-y-3 pt-4">
                        <button 
                            onClick={handleCheckoutShopping}
                            className="w-full bg-green-800 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-green-900 transition-all shadow-lg active:scale-95 cursor-pointer"
                        >
                            <CreditCard size={20} />
                            <span>Checkout</span>
                        </button>
                        <button 
                            onClick={onContinueShopping}
                            className="w-full bg-white text-green-800 border-2 border-green-800 py-4 rounded-2xl font-bold hover:bg-green-50 transition-all active:scale-95 cursor-pointer"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
