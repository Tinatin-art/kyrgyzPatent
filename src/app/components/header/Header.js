import React from 'react'
import logo from "../../../assets/images/logo.png";
import {
    Link
} from 'react-router-dom';

const Header = () => {
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
                    <Link className="user-auth-link" to="/">Войти</Link>
                    <Link className="user-auth-link" to="/">Регистрация</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header