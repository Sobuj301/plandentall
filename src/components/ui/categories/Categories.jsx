import React from 'react';
import CategoryBox from './CategoryBox';

const Categories = () => {

    const categories = [
        {
            id:"1",
            name:"Details"
        },
        {
            id:"2",
            name:"Documents"
        },
        {
            id:"3",
            name:"Reviews"
        },
        {
            id:"4",
            name:"Goals"
        },
        {
            id:"5",
            name:"Feedback"
        },
        {
            id:"6",
            name:"Onboarding"
        },
    ]
    return (
        <div className='flex gap-3 md:gap-8 ml-5 mt-6'>
            {
                categories.map((category,index) =><CategoryBox key={index} name={category.name}></CategoryBox>)
            }
        </div>
    );
};

export default Categories;