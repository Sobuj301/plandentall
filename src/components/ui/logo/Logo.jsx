import Image from 'next/image';
import React from 'react';
import logo from "../../../../public/Plandentall.png"

const Logo = () => {
    return (
        <div className='flex items-center justify-center pb-7 rounded-md mt-2 pt-3 bg-gray-50'>
            <Image alt='logo.png' src={logo} height={100} width={100} />
        </div>
    );
};

export default Logo;