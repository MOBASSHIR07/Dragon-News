import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
       <div className='flex gap-2 items-center bg-base-200 p-2'>
    <p className='bg-[#d72050] text-base-100 px-3 py-1'>Latest</p>
    <Marquee pauseOnHover={true} className='space-x-10'>
        <Link to='/news'>📢 Tech Giants Collaborate to Advance AI Safety Standards Worldwide</Link>
        <Link to='/news'>📢 Bangladesh Launches First Satellite-Based Flood Alert System</Link>
        <Link to='/news'>📢 OpenAI Releases New Tools for Smarter and Safer Chatbot Interactions</Link>
    </Marquee>
</div>

    );
};

export default LatestNews;