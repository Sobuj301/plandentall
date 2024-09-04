"use client"
import React from 'react';
import qs from "query-string"
import { useRouter,} from 'next/navigation';

const CategoryBox = ({ name }) => {
    const router = useRouter()
    
    const handleClick = () => {
        router.push({
            pathname: '/',
            query: { key1: name },
          });
    }

    return (
        <div onClick={handleClick}>
            {name}
        </div>
    );
};

export default CategoryBox;