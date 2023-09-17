import React from 'react'
import logo from "../../../assets/images/logo.png";
import {
    useNavigate
} from 'react-router-dom';
import Cookies from 'js-cookie';
import tokenService from '../../setup/token-service';

const Header = () => {
    const user = Cookies.get("role")

    const navigate = useNavigate()

    const handleLogout = () => {
        setTimeout(() => {
          tokenService.logOut();
          navigate("/signin");
        }, 500);
      };

  return (
    <header className='container'>
        <div className="header__menu">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-inner">
                <label for="search-input" className="search-inner">
                    <input id="search-input" className="search-input" type="text" placeholder="Я ищу"/>
                    <i className="search-icon"></i>
                </label>
                <div className="user-auth-btn">
                    
                    <span className="user-auth-link">{user}</span>
                    <button className="user-auth-link" onClick={handleLogout}>Выйти</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header