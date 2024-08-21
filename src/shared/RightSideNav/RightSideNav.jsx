import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import Qzone1 from '../../assets/qZone1.jpg'
import Qzone2 from '../../assets/qZone2.jpg'
import Qzone3 from '../../assets/qZone3.jpg'
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3'>
                <h2 className="text-3xl">Login With</h2>
                <button className='btn btn-outline w-full'><FcGoogle />Google</button>
                <button className='btn btn-outline w-full'><FaGithub />GitHub</button>
            </div>
            <div className='p-4'>
                <h2 className="text-3xl mb-3">Find Us On</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
            </div>
            <div className='p-4 space-y-3'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;