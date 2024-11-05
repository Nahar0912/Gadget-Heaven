import React from 'react';
import { useWishlist } from '../WishlistContext'; 
import { useCart } from '../CartContext'; 

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useWishlist(); 
    const { addToCart } = useCart(); 

    return (
        <div>
            <div className='mx-20 mt-10 mb-7'>
                <h1 className='font-bold text-2xl'>Wish List</h1>
            </div>
            <div className='mx-20'>
                {wishlist.length === 0 ? (
                    <p>Your wishlist is empty!</p>
                ) : (
                    wishlist.map((item) => (
                        <div key={item.product_id} className='flex justify-between items-center border p-4 mb-4'>
                            <img src={item.product_image} alt={item.product_title} className='w-16 h-16' />
                            <div className='flex flex-col'>
                                <h2 className='font-bold'>{item.product_title}</h2>
                                <p>Price: ${item.price}</p>
                                <div className='flex gap-2'>
                                    <button className='btn bg-purple-600 text-white' onClick={() => addToCart(item)}>
                                        Add To Cart
                                    </button>
                                    <button className='btn' onClick={() => removeFromWishlist(item.product_id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Wishlist;
