import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useCart } from '../CartContext'; 
import { useWishlist } from '../WishlistContext'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const data = useLoaderData();
    const id = parseInt(productId, 10);
    const product = data.find(item => item.product_id === id);
    const { addToCart } = useCart(); 
    const { wishlist, addToWishlist } = useWishlist();
    
    const [isInWishlist, setIsInWishlist] = useState(false); 

    useEffect(() => {
        const existsInWishlist = wishlist.some(item => item.product_id === id);
        setIsInWishlist(existsInWishlist);
    }, [wishlist, id]);

    if (!product) {
        return <p>Product not found!</p>;
    }

    const { product_image, product_title, price, Specification, availability, description, rating } = product;

    const handleAddToCart = () => {
        addToCart(product);
        toast.success("Item added successfully!"); 
    };

    return (
        <div className='mx-10 flex flex-col justify-center items-center'>
            <div className='px-56 text-center text-white bg-purple-600 h-96 p-10'>
                <h1 className='font-bold text-3xl'>Product Details</h1><br />
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="bg-white flex justify-center items-center -mt-36 relative z-10 h-96 w-2/3 p-10">
                <figure>
                    <img className='h-80' src={product_image} alt={product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {product_title}</h2>
                    <p>Price: ${price}</p>
                    <p className='w-20 text-center border border-green-900 bg-green-200 rounded-full'>{availability ? 'In Stock' : 'Out of Stock'}</p>
                    <p>{description}</p>
                    <p className='font-bold'>Specifications:</p>
                    <ul>
                        {Specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                    <p className='font-bold'>Rating: {rating}</p>
                    <div className="card-actions">
                        <button className="btn bg-purple-600 text-white rounded-full" onClick={handleAddToCart}>
                            Add To Cart
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                        <button
                            className='btn rounded-full'
                            onClick={() => {
                                addToWishlist(product);
                                setIsInWishlist(true); 
                            }}
                            disabled={isInWishlist} 
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" /> 
        </div>
    );
};

export default ProductDetails;
