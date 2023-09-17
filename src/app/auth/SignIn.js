import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {

    const [emails, setEmails] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleEmail = (e) => {
        setEmails(e.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handlePassword = (e) => {
        setPassword(e.target.value);
      };
    
    return (

    <div className='container'>
        <div class="auth">
                <h1 class="auth-ttl">Войдите в свой аккаунт</h1>
                <div class="auth-inner">
                    <form class="auth-form">
                        <div class="auth-up">
                            <label for="auth-email" class="auth-label">Email</label>
                            <input 
                                onChange={handleEmail}
                                name="emails"
                                type="email"
                                value={emails}
                                class="auth-input" 
                                id="auth-email" 
                                placeholder="Введите email"
                                autoFocus={true}
                            />
                        </div>
                        <div class="auth-up">
                            <label for="auth-password" class="auth-label">Пароль</label>
                            <input 
                                onChange={handlePassword}
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                class="auth-input" 
                                id="auth-password" 
                                placeholder="Введите пароль"
                            />
                            <div className={`show-password ${showPassword ? "eye-open" : "eye-close"}`}
                                onClick={handleShowPassword}></div>
                        </div>
                        <div className="auth-link">
                            <p className="auth-link-title">Don't have an account?</p>
                            <Link
                                to={"/signup"}
                                className="auth-link-btn"
                            >
                              Зарегистрироваться
                            </Link>
                        </div>
                        <button type="submit" class="auth-btn">Войти</button>
                    </form>
                </div>
            </div>

    </div>
  )
}

export default SignIn