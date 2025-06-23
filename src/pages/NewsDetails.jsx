import React, { use } from 'react';
import Header from '../components/Header';
import RightNavbar from '../components/layout-components/RightNavbar';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData()
   
    const news = data.data[0];


    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 grid grid-cols-12 mx-auto my-10 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-semibold mb-4'>Dragon News</h2>
                    <div className='bg-white p-5 rounded-md shadow-md'>
                        <img src={news.image_url} alt={news.title} className='w-full rounded-md mb-4' />
                        <h3 className='text-xl font-bold mb-2'>{news.title}</h3>
                        <div className='text-sm text-gray-500 mb-2'>
                            {news.author?.published_date} | Tag: <span className='text-pink-600'>{news.category}</span>
                        </div>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            {news.details}
                        </p>
                        <div className='mt-4'>
                            <Link to={`/category/${news.category_id}`} className='btn btn-outline btn-error'>
                                ← All news in this category
                            </Link>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;