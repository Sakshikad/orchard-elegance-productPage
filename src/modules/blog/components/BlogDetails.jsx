import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../Post';

const BlogDetail = () => {
  const { id } = useParams();
  const postId = parseInt(id); 

  const selectedPost = Posts.find(post => post.id === postId);

  if (!selectedPost) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center my-8">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-64 object-cover" src={selectedPost.imageUrl} alt={selectedPost.title} />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{selectedPost.title}</h1>
          <p className="text-gray-700 text-base leading-relaxed">{selectedPost.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
