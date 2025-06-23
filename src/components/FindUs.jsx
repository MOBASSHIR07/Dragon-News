import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const FindUs = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold mb-3 mt-2'>Find Us</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item bg-transparent hover:bg-gray-100 text-black justify-start border-0 border-b border-gray-300 ">
                    <FaFacebookF className="text-[#1877F2] mr-2" /> Facebook
                </button>
                <button className="btn join-item bg-transparent hover:bg-gray-100 text-black justify-start border-0 border-b border-gray-300 ">
                    <FaTwitter className="text-[#1DA1F2] mr-2" /> Twitter
                </button>
                <button className="btn join-item bg-transparent hover:bg-gray-100 text-black justify-start border-0 border-b border-gray-300">
                    <FaInstagram className="text-[#E4405F] mr-2" /> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;