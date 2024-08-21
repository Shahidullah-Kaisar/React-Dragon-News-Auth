import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QZone1 from '../../assets/qZone1.jpg'
import QZone2 from '../../assets/qZone2.jpg'
import QZone3 from '../../assets/qZone3.jpg'

const LeftSideNav = () => { 
    const [categories, setCategoroies] = useState([])

    useEffect(()=>{
        fetch('Categories.json')
        .then(res => res.json())
        .then(data => setCategoroies(data))
    },[])
    return (
        <div className='space-y-6'>
             <h2 className="text-2xl">All Category</h2>
             {
                categories.map(loop => <Link
                    to={`/category/${loop.id}`}
                     className='block ml-4 text-xl font-semibold'>
                    {loop.name}
                    </Link>)
             }
             <div className='space-y-2'>
                <img src={QZone3} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone1} alt="" />
             </div>
        </div>
    );
};

export default LeftSideNav;