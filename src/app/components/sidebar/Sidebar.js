import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getCategories } from './store/SidebarSlice';

const Sidebar = () => {

  const dispatch = useDispatch();

  const category  = useSelector((state) => ({
    ...state?.categories
  
  }));

  console.log(category)


  useEffect(() => {

      dispatch(getCategories());
   
  }, []);



  return (
    <ul className='sidebar'>
      {
          category?.category.map((item, key) => (
              <NavLink to={"/"}
                key={key}
                className="sidebar-link"
              >{item.name}</NavLink>
          ))
      }
    </ul>
  )
}

export default Sidebar