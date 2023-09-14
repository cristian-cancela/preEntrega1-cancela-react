
const CategoryItem = ({ isActive = false, name }) => {
    return (
      <a className={`nav-link ${isActive ? 'active text-primary' : ''}`} aria-current="page" href="#">
        {name}
      </a>
    );
  };
  
  export default CategoryItem;
  
  
  
  
  