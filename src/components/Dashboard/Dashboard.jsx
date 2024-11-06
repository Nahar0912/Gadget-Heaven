import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const isCartActive = location.pathname === '/dashboard' || location.pathname === '/dashboard/cart';
    const isWishlistActive = location.pathname === '/dashboard/wishlist';

    return (
        <div className="">
            <div className="bg-purple-600 text-white flex flex-col justify-center items-center py-10">
                <h1 className="font-bold text-3xl text-center">Dashboard</h1><br />
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p><br />
                <div>
                    <Link to="/dashboard/cart">
                        <button
                            className={`btn px-10 mr-3 rounded-full ${
                                isCartActive ? 'bg-white text-purple-600' : 'bg-inherit text-white'
                            }`}
                        >
                            Cart
                        </button>
                    </Link>
                    <Link to="/dashboard/wishlist">
                        <button
                            className={`btn px-9 rounded-full ${
                                isWishlistActive ? 'bg-white text-purple-600' : 'bg-inherit text-white'
                            }`}
                        >
                            Wishlist
                        </button>
                    </Link>
                </div>
            </div>

            <div className="p-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
