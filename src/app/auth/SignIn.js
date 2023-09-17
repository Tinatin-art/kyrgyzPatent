import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from './store/AuthSlice';

const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    let userData = {
      email: emails,
      password: password,
    };

    const signInUser = () => {
        dispatch(signIn(userData))
          .unwrap()
          .then((res) => {
            if (res && res.status === 200) {
              navigate(`/patent`);
            }
          });
        setEmails("");
        setPassword("");
    };
    
    
    return (

    <div className='container'>
        <div className="auth">
                <h1 className="auth-ttl">Войдите в свой аккаунт</h1>
                <div className="auth-inner">
                    <form className="auth-form">
                        <div className="auth-up">
                            <label htmlFor="auth-email" className="auth-label">Email</label>
                            <input 
                                onChange={handleEmail}
                                name="emails"
                                type="email"
                                value={emails}
                                className="auth-input" 
                                id="auth-email" 
                                placeholder="Введите email"
                                autoFocus={true}
                            />
                        </div>
                        <div className="auth-up">
                            <label htmlFor="auth-password" className="auth-label">Пароль</label>
                            <input 
                                onChange={handlePassword}
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                className="auth-input" 
                                id="auth-password" 
                                placeholder="Введите пароль"
                            />
                            <div className={`show-password ${showPassword ? "eye-open" : "eye-close"}`}
                                onClick={handleShowPassword}></div>
                        </div>
                        <div className="auth-link">
                            <p className="auth-link-title">У вас нет учетной записи?</p>
                            <Link
                                to={"/signup"}
                                className="auth-link-btn"
                            >
                              Зарегистрироваться
                            </Link>
                        </div>
                        <button type="button" className="auth-btn" onClick={signInUser}>Войти</button>
                    </form>
                </div>
            </div>

    </div>
  )
}

export default SignIn