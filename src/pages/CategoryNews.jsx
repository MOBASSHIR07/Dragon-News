import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {data: categoryNews } = useLoaderData();
    return (
        <div>
            <h2 className='text-xl font-semibold'>Dragon News Home</h2>
            <div>
                {
                    categoryNews.map((news) => (
                        <NewsCard key={news._id} news={news}></NewsCard>
                    ))
                        
                   
                }
            </div>

        </div>
    );
};

export default CategoryNews;