  
  import React from 'react';
  import { Link } from 'react-router-dom'; 
  
  const CategoryItem = ({ isActive = false, name, categoryId }) => {
    return (
      <Link to={`/category/${categoryId}`} className={`nav-link ${isActive ? 'active text-primary' : ''}`} aria-current="page">
        {name}
      </Link>
    );
  };
  
  export default CategoryItem;
  