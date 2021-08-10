import React from 'react';

import './search-box.styles.css';

// Functional components do not have access to state because they dont have access to constructor. They also do not have access to lifecycle methods. Functional components just get some props and return some html.

export const SearchBox = ({ placeholder, handleChange}) => (
    <input type="search" 
           className = "search"
           placeholder= {placeholder} 
           onChange = {handleChange}
    />
)