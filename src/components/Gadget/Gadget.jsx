import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    return (
        <div className="card bg-base-100 w-72 shadow-xl">
            <figure className="px-4 pt-4">
                <img className="rounded-xl h-52 w-80" src={gadget.product_image} alt={gadget.product_title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {gadget.product_title}</h2>
                <p>Price: ${gadget.price}</p>
                <div className="card-actions">
                    <Link to={`/product/${gadget.product_id}`}>
                        <button className="btn text-purple-700 border border-purple-700 rounded-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gadget;
