import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data.data.news_category);
            });
    }, []);

    return (
        <div>
            <h2 className='font-semibold mb-2 text-xl'>All Categories</h2>
            <div className='flex flex-col gap-1'>
                {
                    categories.map(category => (
                        <NavLink
                            to={`/category/${category.category_id}`}
                            key={category.category_id}
                            className={({ isActive }) =>
                                `btn btn-sm normal-case text-left justify-start ${isActive ? 'bg-base-300 text-black' : 'bg-transparent hover:bg-gray-100'
                                }`
                            }
                        >
                            {category.category_name}
                        </NavLink>

                    ))
                }
            </div>
        </div>
    );
};

export default LeftNavbar;
