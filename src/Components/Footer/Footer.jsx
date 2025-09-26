import React from 'react';

import facebook from '../../assets/facebook.png'
import linkdin from '../../assets/linkdin.png'
import email from '../../assets/email.png'
import twitter from '../../assets/twitter.png'
import Counter from '../Counter/Counter'

const Footer = () => {
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-black mt-20">
            <Counter>
                <div>
                    <div className="flex flex-col md:flex-row items-start justify-between gap-4 py-10 border-b border-gray-500/30 text-gray-500 px-10">
                        <div>
                            <h1 className='text-xl font-bold text-white'>CS — Ticket System</h1>
                            <p className="max-w-[410px] mt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                            <ul>
                                <h2 className='text-white font-bold'>Company</h2>
                                <li>About Us</li>
                                <li>Our Mission</li>
                                <li>Contact Saled</li>

                            </ul>
                            <ul>
                                <h2 className='text-white font-bold'>Services</h2>
                                <li>Products & Services</li>
                                <li>Customer Stories</li>
                                <li>Download Apps</li>

                            </ul>
                            <ul>
                                <h2 className='text-white font-bold'>Information</h2>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Join Us</li>

                            </ul>
                          
                                <ul className='space-y-3'>
                                    <h2 className=' text-white font-bold'>Social Links</h2>
                                
                                        <li className='flex gap-2'><img src={twitter} alt="" />@CS — Ticket System</li>
                                        <li className='flex gap-2'><img src={linkdin} alt="" />@CS — Ticket System</li>
                                        <li className='flex gap-2'><img src={facebook} alt="" />@CS — Ticket System</li>
                                        <li className='flex gap-2'><img src={email} alt="" />support@cst.com</li>

                                    
                                </ul>
                            
                        </div>
                    </div>
                    <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                        © 2025 CS — Ticket System. All rights reserved.
                    </p>
                </div>
            </Counter>
        </div>
    );
};

export default Footer;