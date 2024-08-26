import React, { useEffect, useState } from 'react';
import Header from '../../shared/Header/Header';
import RightSideNav from '../../shared/RightSideNav/RightSideNav';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';

const NewDetails = () => {

    const {id} = useParams();

    const data = useLoaderData()
    console.log(data)

    const newsItem = data.filter(item => item._id === id);
    console.log('new',newsItem)
    console.log(newsItem[0].title)

    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='md:col-span-2'>
                    <h2 className='text-4xl text-[#cd37a0] font-bold mb-4'>Dragon News Details:</h2>
                    <img src={newsItem[0].image_url} className='mb-4' alt="" />   
                    <h2 className='text-3xl mb-3'>{newsItem[0].title}</h2>  
                    <p className='text-gray-500'>{newsItem[0].details}</p>  
                       
                </div>
                <div className=''>
                    <RightSideNav></RightSideNav>
                </div>
                
            </div>
            
        </>
    );
};

export default NewDetails;