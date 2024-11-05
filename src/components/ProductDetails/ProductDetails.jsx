import React from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams(); 
    const data = useLoaderData();
    const id = parseInt(productId, 10);
    const product = data.find(item => item.product_id === id);

    if (!product) {
        return <p>Product not found!</p>;
    }

    const { product_image, product_title, price, Specification, availability, rating } = product;

    return (
        <div>
            <div className="flex justify-center items-center ">
                <figure>
                    <img src={product_image} alt={product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {product_title}</h2>
                    <p>Price: ${price}</p>
                    <p>Availability: {availability ? 'In Stock' : 'Out of Stock'}</p>
                    <p>Specifications:</p>
                    <ul>
                        {Specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
