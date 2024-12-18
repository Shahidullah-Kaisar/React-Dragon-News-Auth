import React from 'react';
import Header from '../../shared/Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import LeftSideNav from '../../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {

    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className=''>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2'>
                    {
                        news.map(loop => <NewsCard key={loop._id} news={loop}></NewsCard>)
                    }
                </div>
                <div className=''>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;