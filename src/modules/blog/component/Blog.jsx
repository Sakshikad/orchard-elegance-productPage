import React, { useState } from 'react';
import BlogPost from './BlogPost';
import Posts from '../Post';
import Pagination from '../Pagination';


const POSTS_PER_PAGE = 3;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Posts.length / POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page < 1) {
      setCurrentPage(totalPages); 
    } else if (page > totalPages) {
      setCurrentPage(1); 
    } else {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = Posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center my-8">Our Blog</h1>
      <div className="flex flex-wrap justify-center">
        {currentPosts.map((post) => (
          <BlogPost
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Blog;