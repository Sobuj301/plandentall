import ProfileHeader from '@/components/ui/profileHeader/ProfileHeader';
import ProfilePath from '@/components/ui/profilePath/ProfilePath';
import React from 'react';

const ProfileLayout = ({ children }) => {

    return (
        <div>
            <div>
                <ProfileHeader />
                <ProfilePath />
            </div>
            <div className='p-8'>
                {children}
            </div>
        </div>
    );
};

export default ProfileLayout;