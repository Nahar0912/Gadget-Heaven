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
            <div>
                {cartItems.map(item => (
                    <div key={item.product_id} className="flex justify-between items-center border-b p-2">
                        <img src={item.product_image} alt={item.product_title} className="h-16 w-16" />
                        <div>
                            <h2>{item.product_title}</h2>
                            <p>Price: ${item.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.product_id)} className="btn bg-red-600 text-white rounded-full">Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
