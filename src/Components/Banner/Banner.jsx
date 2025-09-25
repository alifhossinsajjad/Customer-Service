import React from 'react';
import Counter from '../Counter/Counter';
import vactor1 from '../../assets/vector1.png'
import bgImg from '../../assets/image.png'




const Banner = () => {
    return (
         <Counter>
             <div className='grid grid-cols-2 gap-5 my-14 '>

                <div>
                    <div className='relative flex flex-col justify-center bg-gradient-to-r  h-50 from-[#632EE3] to-[#9F62F2] text-white rounded-xl text-center shadow p-6' >
                        <img src={vactor1} alt="" className='w-64 absolute left-0' />
                        <h2 className='text-2xl'>In-Progress</h2>
                        <p className='text-6xl font-semibold'>0</p>
                        <img src={bgImg} alt=""  className='w-64 absolute right-0'/>

                    </div>
                </div>

                <div className=' relative flex flex-col justify-center bg-gradient-to-r h-50 from-[#54CF68] to-[#00827A] text-white rounded-xl p-6 text-center shadow' >
                    <img src={vactor1} alt="" className='w-64 absolute left-0' />
                    <h2 className='text-2xl'>Resolved</h2>
                    <p className='text-6xl font-semibold'>0</p>
                    <img src={bgImg} alt=""  className='w-64 absolute right-0'/>
                </div>
            </div>
         </Counter>
    );
};

export default Banner;