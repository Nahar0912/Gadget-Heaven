import React from 'react';
import { useWishlist } from '../WishlistContext'; 
import { useCart } from '../CartContext'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useWishlist(); 
    const { addToCart } = useCart(); 

    const handleAddToCart = (item) => {
        addToCart(item); 
        toast.success("Item added to cart successfully!");
    };

    return (
        <div>
            <div className='mx-20 mt-10 mb-7'>
                <h1 className='font-bold text-2xl'>Wish List</h1>
            </div>
            <div className='mx-20 px-60'>
                {wishlist.length === 0 ? (
                    <p>Your wishlist is empty!</p>
                ) : (
                    wishlist.map((item) => (
                        <div key={item.product_id} className='flex justify-between items-center border p-4 mb-4'>
                            <img src={item.product_image} alt={item.product_title} className='w-16 h-16' />
                            <div className='flex flex-col'>
                                <h2 className='font-bold'>{item.product_title}</h2>
                                <p>Price: ${item.price}</p>
                                <button className='btn bg-purple-600 text-white' onClick={() => handleAddToCart(item)}>
                                    Add To Cart
                                </button>
                            </div>
                            <button className='btn' onClick={() => removeFromWishlist(item.product_id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>
                    ))
                )}
            </div>
            <ToastContainer position='top-center'/> 
        </div>
    );
};

export default Wishlist;
