import React from 'react';
import { useState } from 'react';

const SearchInput = ({placeholder}) => {
    // here we are creating the dtate 'value' and the function 'setValue' to update it
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className="search-container">
            <input type="text" placeholder={placeholder} value={value} onChange={handleChange}/>

            <h2 style={{ marginTop: '10px', color: 'blue'}}>Current Typing: {value}</h2>
        </div>
    );
};


export default SearchInput;