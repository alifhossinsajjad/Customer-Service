import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-2 gap-5 my-14 '>
            <div className='flex flex-col text-center justify-center rounded-md p-7 text-white h-64  bg-gradient-to-l bg-[#632EE3] to'>
                <h2>pendding</h2>
                <p>0</p>
            </div>
            <div className='flex flex-col text-center justify-center rounded-md p-7 text-white h-64  bg-red-500'>
                <h2>pendding</h2>
                <p>0</p>
            </div>
        </div>
    );
};

export default Banner;