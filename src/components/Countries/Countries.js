import React, { useEffect, useState } from 'react';
import Country from '../Country/Country'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(
        () => {
            fetch('https://restcountries.com/v3.1/all')
                .then(res => res.json())
                .then(data => setCountries(data))
        }, []
    )
    return (
        <div>
            <h1>Visiting Countries</h1>
            <h3>Available: {countries.length}</h3>
            {
                countries.map((country) =>
                    <Country area={country.area} name={country.name.common} population={country.population} key={country.name.common.toString()}></Country>
                )
            }
        </div>
    )
};

export default Countries;