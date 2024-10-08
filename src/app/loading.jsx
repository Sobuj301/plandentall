import React from 'react';

const Loading = () => {
    return (
        <div className='flex items-center justify-center mt-10'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Loading;