import React from "react";
import { useCart } from "../CartContext"; 

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div>
            <div className='flex md:flex-row justify-between items-center mx-20 mt-10 mb-7'>
                <div>
                    <h1 className='font-bold text-2xl'>Cart</h1>
                </div>
                <div className='flex gap-3'>
                    <h1 className='font-bold text-2xl'>Total cost:</h1>
                    <button className='btn rounded-full'>Sort by Price</button>
                    <button className='btn bg-purple-600 text-white rounded-full'>Purchase</button>
                </div>
            </div>
            <div className="px-64">
                {cartItems.map(item => (
                    <div key={item.product_id} className="flex justify-between items-center border-b p-5">
                        <img src={item.product_image} alt={item.product_title} className="h-16 w-16" />
                        <div>
                            <h2>{item.product_title}</h2>
                            <p>Price: ${item.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.product_id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
