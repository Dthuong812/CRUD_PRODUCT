import Search from 'antd/es/transfer/search';
import React from 'react';

const SearchProduct = ({ onSearch }) => {
    const handleOnChange = (value) => {
        onSearch(value); 
    };

    return (
        <div style={{ width: "300px", marginLeft: "30px" }}>
            <Search
                placeholder="Search"
                onChange={(event) => handleOnChange(event.target.value)}
                enterButton
            />
        </div>
    );
};

export default SearchProduct;