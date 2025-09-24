import React from 'react';

const Counter = ({children}) => {
    return (
        <div className='container mx-auto'>
            {children}
        </div>
    );
};

export default Counter;