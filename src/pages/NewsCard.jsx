import React from 'react';
import { FaEye, FaStar, FaBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    author,
    image_url,
    details,
    total_view,
    rating,
    published_date
  } = news;

  return (
    <div className="bg-white shadow rounded-md overflow-hidden mb-6">
      {/* Header */}
      <div className=" bg-base-200 flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt="Author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-sm text-gray-800">{author?.name}</p>
            <p className="text-xs text-gray-500">{author?.published_date?.split(' ')[0]}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="text-lg font-bold leading-snug text-gray-900">{title}</h2>
      </div>

      {/* Image */}
      <div className="p-4">
        <img
          src={image_url}
          alt={title}
          className="w-full h-56 object-cover rounded-md"
        />
      </div>

      {/* Details */}
      <div className="px-4 text-sm text-gray-700 mb-4">
        <p className="leading-relaxed">
          {details.length > 50 ? (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`} className="text-orange-500 font-medium cursor-pointer"> Read More</Link>
            </>
          ) : (
            details
          )}
        </p>
    
      </div>
     <hr className=" w-11/12 mx-auto border-t border-gray-200 my-4" />


      {/* Footer */}
      <div className="px-4 my-2 pb-4 flex justify-between items-center text-sm text-gray-600">
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-orange-400 text-base">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="ml-1 text-gray-700 font-medium">{rating?.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
