import React, { useEffect, useRef } from 'react';
import './BlogPage.css';

const BlogPage = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
      <h1 className='blog'>Blog</h1>
      <p className='blog'>Read our latest articles about freedom tech.</p>
    </div>
  );
};

export default BlogPage;