import React, { useEffect, useState } from 'react';
import Categories from './../Categories/Categories';
import Gadgets from './../Gadgets/Gadgets';

const MainSection = () => {
    const [gadgets, setGadgetsData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setGadgetsData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredGadgets = selectedCategory === 'all' 
        ? gadgets 
        : gadgets.filter(gadget => gadget.category === selectedCategory);

    return (
        <div className="mx-10 my-20">
            <h1 className="text-center font-bold text-3xl">Explore Cutting-Edge Gadgets</h1>
            <div className='flex flex-col md:flex-row justify-between mt-10 mb-7'>
                <Categories setSelectedCategory={setSelectedCategory} />
                <Gadgets gadgets={filteredGadgets} />
            </div>
        </div>
    );
};

export default MainSection;
