import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { CgShare } from "react-icons/cg";
import { Link } from 'react-router';
const NewsCard = ({news}) => {
    return (
        <div className='my-5'>
                <section className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Author Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <img
            src={news.author.img}
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{news.author.name}</h2>
            <p className="text-sm text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
        <div className="text-gray-500 flex gap-1">
        <IoBookmarkOutline /> <CgShare />
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h1 className="text-lg font-bold text-gray-800 leading-snug">
          {news.title}
        </h1>
      </div>

      {/* Image */}
      <img
        src={news.image_url}
        alt="News"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 text-sm text-gray-600 space-y-2">
        <p>
          {news.author.published_date}{" "}
          <span className="text-blue-600">
            Biden, EU, Ukraine, Military, Russia
          </span>
        </p>
        <p>
          {news.details}{" "}
          <Link to={`/news-details/${news.id}`} className="text-orange-500 font-medium cursor-pointer">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center text-yellow-500">
          <span className="text-sm">★ ★ ★ ★ ★</span>
          <span className="text-gray-700 ml-2 text-sm">{news.rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
        <IoEyeOutline /><p className="text-sm">{news.total_view}</p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default NewsCard;