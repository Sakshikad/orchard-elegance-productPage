import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ id, title, excerpt, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{excerpt}</p>
        <Link
          to={`/blog/${id}`}
          className="inline-block bg-organicGreen-300 border border-gray-300 hover:bg-transparent hover:text-green-500 text-white py-2 px-4 rounded-full text-center transition duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;