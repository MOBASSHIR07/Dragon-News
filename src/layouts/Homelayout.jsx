import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNavbar from '../components/layout-components/RightNavbar';
import { Outlet } from 'react-router-dom';

const Homelayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-4'>
                    <LatestNews></LatestNews>
                </section>

            </header>
            <nav className='w-11/12 mx-auto my-4'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto my-4 grid md:grid-cols-12 gap-4'>
                <aside className='left col-span-3'><LeftNavbar /></aside>
                <section className='col-span-6'><Outlet /></section>
                <aside className='col-span-3'><RightNavbar /></aside>
            </main>


        </div>
    );
};

export default Homelayout;