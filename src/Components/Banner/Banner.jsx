import React from 'react';
import Counter from '../Counter/Counter';
import vactor1 from '../../assets/vector1.png'
import vactor2 from '../../assets/vector2.png'

const Banner = () => {
    return (
        <Counter>
            <div className='grid grid-cols-2 gap-5 my-14 '>

                <div  className=' ' style={{ backgroundImage: `url(${vactor1})`}} >
             <div className='flex flex-col justify-center bg-gradient-to-r  h-50 from-[#632EE3] to-[#9F62F2] text-white rounded-xl text-center shadow p-6' >
                        <h2>pendding</h2>
                        <p>0</p>

                    </div>
                </div>

                <div className='flex flex-col justify-center bg-gradient-to-r h-50 from-[#54CF68] to-[#00827A] text-white rounded-xl p-6 text-center shadow' >
                    <h2>pendding</h2>
                    <p>0</p>
                </div>
            </div>
        </Counter>
    );
};

export default Banner;