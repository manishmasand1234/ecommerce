import React, { useState } from 'react';
import './index.css';  

export default function Category({ finalCategory, setCatname }) {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  let cat = finalCategory.map((v, i) => (
    <li 
      onClick={() => {
        setCatname(v.url);
        setShowCategories(false); 
      }} 
      key={i} 
      className='bg-gray-300 p-3 sm:p-4 cursor-pointer text-lg sm:text-xl font-serif font-semibold mb-2 rounded-md hover:bg-gray-400 transition'
    >
      {v.name}
    </li>
  ));

  return (
    <div className='bg-white shadow-md p-4 sm:p-6 rounded-lg'>
      
      {/* Mobile Button to Toggle Categories */}
      <button 
        onClick={toggleCategories} 
        className='lg:hidden w-full bg-blue-600 text-white p-3 rounded-md mb-3 text-lg font-semibold'
      >
        {showCategories ? "Hide Categories" : "Show Categories"}
      </button>

      {/* Category List - Always Visible on Desktop */}
      <ul className={`space-y-2 ${showCategories ? "block" : "hidden"} lg:block`}>
        {cat}
      </ul>
      
    </div>
  );
}
