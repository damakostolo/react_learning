import React from 'react';
import LaptopItem from "./LaptopItem";

const LaptopList = ({laptops, removeLaptops}) => {
    {
        if (laptops.length === 0) return <h1 style={{textAlign: 'center'}}>Post Not!</h1>
    }

    return (
        <div>
            {laptops.map((laptop , i) => (
                <LaptopItem number={i+1} key={laptop.id} laptop={laptop} removeLaptops={removeLaptops} />
            ))}
        </div>
    );
};

export default LaptopList;