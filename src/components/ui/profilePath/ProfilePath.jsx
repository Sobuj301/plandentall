'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ProfilePath = () => {
    const links = [
        {
            title:"My Details",
            path:"/profile/details"
        },
        {
            title:"Documents",
            path:"/profile/documents"
        },
        {
            title:"Reviews",
            path:"/profile/reviews"
        },
        {
            title:"Feedback",
            path:"/profile/feedback"
        },
        {
            title:"Onboarding",
            path:"/profile/onboarding"
        },
    ]

    const pathName = usePathname()
    return (
        <div className='flex gap-5 ml-8'>
            {
                links.map((link,index) =>{
                    const isActive = pathName === link.path
                    return(
                        <Link
                        className={isActive ? "text-orange-700" : ""} 
                        href={link.path}
                        key={index}>{link.title}</Link>
                    )
                })
            }
        </div>
    );
};

export default ProfilePath;