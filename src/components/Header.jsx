import React from 'react';
import logo from '../assets/logo.png'; 
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center p-4'>
            <div>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>
            <p>{
                moment().format('dddd , MMMM Do YYYY , h:mm:ss a')
                }</p>
        </div>
    );
};

export default Header;