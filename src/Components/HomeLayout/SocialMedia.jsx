import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import swimming from '../../../public/assets/swimming.png'
import class_img from '../../../public/assets/class.png'
import playground from '../../../public/assets/playground.png'

const SocialMedia = () => {
    return (
        <div className='grid gap-3'>
            <div className='grid gap-3'>
            <button className='btn  btn-outline hover:btn-primary'><FcGoogle /> Login in with Google</button>
            <button className='btn  btn-outline hover:btn-secondary'><FaGithub /> Login with Github</button>
            </div>
            <div className='mt-5'>
                <h1 className='font-bold'>Follow on us</h1>
                <div className='grid gap-2 mt-4'>
                    <button className='btn'><FaFacebook />
                    Facebook</button>
                    <button className='btn'>Twitter</button>
                    <button className='btn'><FaInstagram />Instagram</button>
                </div>
            </div>
            <div className='bg-[#F3F3F3] grid  justify-center gap-3'>
                <img src={swimming} alt="" />
                <img src={class_img}alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default SocialMedia;