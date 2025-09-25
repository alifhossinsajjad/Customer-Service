import React from 'react';
import Counter from '../Counter/Counter';
import vactor1 from '../../assets/vector1.png'
import vactor2 from '../../assets/vector2.png'

const Banner = () => {
    return (
        <Counter>
            <div className='grid grid-cols-2 gap-5 my-14 '>

                <div className=' '
                    style={{
                        backgroundImage: `url(${vactor1}), url(${vactor2})`,
                        backgroundPosition: 'left center, right center',
                        backgroundSize: '50% 100%, 50% 100%',
                        backgroundRepeat: 'no-repeat, no-repeat'
                    }} >
                    <div className='flex flex-col justify-center bg-gradient-to-r  h-50 from-[#632EE3] to-[#9F62F2] text-white rounded-xl text-center shadow p-6' >
                        <h2 className='text-2xl'>In-Progress</h2>
                        <p className='text-6xl font-semibold'>0</p>

                    </div>
                </div>

                <div className='flex flex-col justify-center bg-gradient-to-r h-50 from-[#54CF68] to-[#00827A] text-white rounded-xl p-6 text-center shadow' >
                    <h2 className='text-2xl'>Resolved</h2>
                    <p className='text-6xl font-semibold'>0</p>
                </div>
            </div>
        </Counter>
    );
};

export default Banner;