import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name } = props.country.name.common;
    const { population, area, region,flags } = props.country;

    return (
        <div className='country'>
            <h2  >Name: {name}</h2>
            <img src={flags.png} alt="" />
            <h4  >Population: {population}</h4>
            <p  ><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;