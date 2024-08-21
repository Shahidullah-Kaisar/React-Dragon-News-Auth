import React from 'react';
import logo from '../../assets/logo.jpg'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center m-10'>
            <img className='h-32 w-96 mx-auto m-3' src={logo} alt="" />
            <p className='text-xl m-2'>Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;