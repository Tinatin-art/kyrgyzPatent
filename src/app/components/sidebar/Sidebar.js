import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getCategoryById } from './store/SidebarSlice';

const Sidebar = () => {

  const dispatch = useDispatch();
  const category  = useSelector((state) => ({
    ...state?.categories
  
  }));

  useEffect(() => {
      dispatch(getCategories());
  }, []);

  

  const handleClick = (id) => {
    dispatch(getCategoryById(id));
  }

  return (
    <ul className='sidebar'>
      {
          category?.category.map((item, key) => (
              <li 
                onClick={() => handleClick(item.id)}
                key={key}
                className="sidebar-link"
              >{item.name}</li>
          ))
      }
    </ul>
  )
}

export default Sidebar