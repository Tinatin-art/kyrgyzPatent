import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <ul className='sidebar'>
        <NavLink NavLink to={"/"}
        className="sidebar-link"
        >Товарные знаки</NavLink>
        <NavLink NavLink to={"/tims"}
        className="sidebar-link"
        >Топология интегральных микросистем (ТИМС)</NavLink>
        <NavLink NavLink to={"/nmpt"}
        className="sidebar-link"
        >Товарные знаки</NavLink>
    </ul>
  )
}

export default Sidebar