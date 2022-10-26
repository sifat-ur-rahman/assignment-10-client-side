import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])


    useEffect(()=>{
        fetch('https://server-three-phi.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='bg-secondary m-2 p-2 rounded bg-opacity-50'>
            <h4 className='bg-light rounded'>
                 All Courses: {categories.length} 
            </h4>
            <div className='w-75  m-4  '>
                {
                    categories.map(c => <p className='m-2 bg-light rounded' 
                        key={c.id}>
                             <Link to={`/details/${c.id}`}>{c.name}</Link>
                        
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;