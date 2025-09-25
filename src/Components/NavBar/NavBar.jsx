import React from 'react';
import vectorPlus from '../../assets/VectorPlus.png'

const NavBar = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <div>
            <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 shadow bg-white relative transition-all mt-0">

           <h1 className='text-xl font-bold'>CS — Ticket System</h1>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <a href="#">Home</a>
                <a href="#">FAQ</a>
                <a href="#">Changelog</a>
                <a href="#">Blog</a>
                <a href="#">Download</a>
                <a href="#">ontact</a>

                <button className=" flex gap-2 items-center cursor-pointer px-8 py-2  bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] hover:bg-indigo-600 transition text-white rounded">
                 <img className='h-3'  src={vectorPlus} alt="" />   New Ticket
                </button>
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <a href="#" className="block">Home</a>
                <a href="#" className="block">About</a>
                <a href="#" className="block">Contact</a>
                <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    New Ticket
                </button>
            </div>

        </nav>
        </div>
    );
};

export default NavBar;