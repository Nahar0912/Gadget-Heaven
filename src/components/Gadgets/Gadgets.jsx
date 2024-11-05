import React from 'react';
import Gadget from './../Gadget/Gadget';

const Gadgets = ({ gadgets }) => {
    return (
        <div className="mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gadgets.map(gadget => (
                <Gadget key={gadget.product_id} gadget={gadget} />
            ))}
        </div>
    );
};

export default Gadgets;
