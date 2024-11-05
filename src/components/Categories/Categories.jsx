import React from 'react';

const Categories = ({ setSelectedCategory }) => {
    return (
        <aside className="flex flex-col ml-10 p-3 gap-4 h-72 border border-black rounded-3xl">
            <button className="btn rounded-full px-10" onClick={() => setSelectedCategory('all')}>All Products</button>
            <button className="btn rounded-full px-10" onClick={() => setSelectedCategory('laptops')}>Laptops</button>
            <button className="btn rounded-full px-10" onClick={() => setSelectedCategory('phones')}>Phones</button>
            <button className="btn rounded-full px-10" onClick={() => setSelectedCategory('smart watches')}>Smart Watches</button>
        </aside>
    );
};

export default Categories;
