import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';

const Root = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto font-poppins'>
                <Outlet></Outlet>
            </div>
            <div className='mt-6'>
                <Footer></Footer>
            </div>
        </>
        
    );
};

export default Root;