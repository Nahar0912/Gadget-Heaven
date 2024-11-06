import React, { useState } from "react";
import { useCart } from "../CartContext";

const Cart = () => {
    const { cartItems, removeFromCart, getTotalPrice, clearCart } = useCart();
    const [sortedItems, setSortedItems] = useState(cartItems);
    const [isSorted, setIsSorted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [purchaseTotal, setPurchaseTotal] = useState(0);

    const sortByPrice = () => {
        const sorted = [...cartItems].sort((a, b) => b.price - a.price);
        setSortedItems(sorted);
        setIsSorted(true);
    };

    const handlePurchase = () => {
        const total = getTotalPrice();
        setPurchaseTotal(total);
        setShowModal(true);
        clearCart();
    };

    const closeModal = () => setShowModal(false);

    const totalPrice = getTotalPrice();

    return (
        <div>
            <div className='flex md:flex-row justify-between items-center mx-20 mt-10 mb-7'>
                <div>
                    <h1 className='font-bold text-2xl'>Cart</h1>
                </div>
                <div className='flex gap-3'>
                    <h1 className='font-bold text-2xl'>Total cost: ${totalPrice}</h1>
                    <button onClick={sortByPrice} className='btn rounded-full'>Sort by Price</button>
                    <button 
                        onClick={handlePurchase} 
                        className={`btn bg-purple-600 text-white rounded-full ${totalPrice === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={totalPrice === 0} 
                    >
                        Purchase
                    </button>
                </div>
            </div>
            <div className="px-64">
                {(isSorted ? sortedItems : cartItems).map(item => (
                    <div key={item.product_id} className="flex justify-between items-center border-b p-5">
                        <img src={item.product_image} alt={item.product_title} className="h-16 w-16" />
                        <div>
                            <h2>{item.product_title}</h2>
                            <p>Price: ${item.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.product_id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
                        <div className="flex justify-center mb-4">
                            <img src="images/Group.png" alt="Success" className="max-w-full h-auto" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Payment Successful</h2>
                        <p>Your payment of ${purchaseTotal}</p>
                        <button onClick={closeModal} className="btn bg-purple-600 text-white rounded-full mt-4 px-4 py-2">
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Cart;
