import React from 'react';
import Header from '../../shared/Header/Header';
import RightSideNav from '../../shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';

const NewDetails = () => {
    const {id} = useParams();
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='md:col-span-2 border'>
                    <h2 className='text-3xl'>News Details:{id}</h2>
                </div>
                <div className='border'>
                    <RightSideNav></RightSideNav>
                </div>
                
            </div>
            
        </>
    );
};

export default NewDetails;