import Image from 'next/image';
import React from 'react';
import cover from "../../../../public/image 1.png"
import content from "../../../../public/Content.png"
import { RiDeleteBin5Line } from "react-icons/ri";

const ProfileHeader = () => {
    return (
        <div className='px-2 pt-2 pb-5'>
            <div className='relative'>
                <div>
                    <Image className='rounded-md' src={cover} alt='image.png' height={100} width={1200} />
                    <Image className='absolute top-8 md:top-28' src={content} alt='content.png' height={100} width={100} />
                </div>
                <div className='flex justify-between ml-28 mr-10 mt-2 items-center'>
                    <div>
                        <h2>name</h2>
                        <h2>assistant Nurse</h2>
                    </div>
                    <div className='flex gap-8'>
                        <button className='bg-orange-50 text-orange-700 p-2 btn-sm rounded-md'>Deactivate Account</button>
                        <button className='bg-gray-200  px-3 rounded-md'><RiDeleteBin5Line /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfileHeader;