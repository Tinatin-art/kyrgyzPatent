import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from './store/AuthSlice';
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


function formatPhoneNumber(phoneNumber) {
    let cleanNum = phoneNumber.toString().replace(/\D/g, "");
    const match = cleanNum.match(/^(\d{3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return "(" + match[1] + ") " + (match[2] ? match[2] + "-" : "") + match[3];
    }
    return "+".concat(cleanNum);
}
const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formSchema = Yup.object().shape({
        fullName: Yup.string().required("required name"),
        phoneNumber: Yup.string()
          .required("required phone number")
          .min(12, "Телефон должен содержать не менее 12 символов"),
        email: Yup.string()
          .email("Должен быть действительный адрес электронной почты")
          .max(255)
          .required("required email"),
        password: Yup.string()
          .required("required password")
      });

    const {
        register,
        resetField,
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onTouched",
        resolver: yupResolver(formSchema),
      });


      const onSubmit = (data) => {
        let datas = {
          fullName: data.fullName,
          phoneNumber: formatPhoneNumber(data.phoneNumber),
          email: data.email,
          password: data.password,
        };

        console.log(datas)
    
        dispatch(signUp({datas, navigate}))
        resetField("fullName");
        resetField("email");
        resetField("phoneNumber");
        resetField("password");
      };
    

    const onInvalid = (errors) => {
        console.error(errors);
    };
    return (

    <div className='container'>
        <div className="auth">
                <h1 className="auth-ttl">Зарегистрироваться</h1>
                <div className="auth-inner">
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit, onInvalid)}>
                        <div className="auth-up">
                        <label htmlFor="auth-name" className="auth-label">Имя</label>
                        <Controller
                            name="fullName"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                              <>
                                <input
                                  {...register("fullName")}
                                  value={value}
                                  onChange={(e) => {
                                    onChange(e);
                                  
                                  }}
                                  type="text"
                                  name="name"
                                  placeholder={"name"}
                                  className="auth-input"
                                  autoFocus={true}
                                  id='auth-name'
                                  aria-invalid={errors.fullName ? "true" : "false"}
                                />
                                <p className="errorText">{errors.firstName?.message}</p>
                              </>
                            )}
                        />
                        </div>
                        <div className="auth-up">
                        <label htmlFor="auth-emails" className="auth-label">Почта</label>
                        <Controller
                            name="email"
                            control={control}
                           
                            render={({ field: { onChange, value } }) => (
                              <>
                                <input
                                  {...register("email")}
                                  value={value}
                                  onChange={(e) => {
                                    onChange(e);
                                 
                                  }}
                                  type="email"
                                  name="email"
                                  placeholder={"your email"}
                                  className="auth-input"
                                  autoFocus={true}
                                  id='auth-emails'
                                  aria-invalid={errors.yourEmail ? "true" : "false"}
                                />
                                <p className="errorText">
                                  {errors.yourEmail?.message}
                                </p>
                              </>
                            )}
                        />
                        </div>
                        <div className="auth-up">
                        <label htmlFor="auth-password" className="auth-label">Пароль</label>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                              <>
                                <input
                                  {...register("password")}
                                  value={value}
                                  onChange={onChange}
                                  type="text"
                                  name="password"
                                  placeholder={"enter password"}
                                  id='auth-password'
                                  className={`auth-input ${
                                    errors.password ? "errorBorder" : ""
                                  }`}
                                />

                                <p className="errorText">{errors.password?.message}</p>
                              </>
                            )}
                        />
                        </div>
                        <div className="auth-up">
                        <label htmlFor="auth-phone" className="auth-label">Номер телефона</label>
                        <Controller
                            name="phoneNumber"
                            control={control}
                           
                            render={({ field: { onChange, value } }) => (
                              <>
                                <PhoneInput
                              
                                  value={value}
                                  onChange={(e) => {
                                    onChange(e);
                                  }}
                                  country={"kg"}
                                  inputRef={{ ...register("phoneNumber") }}
                                  placeholder={"phone number"}
                                  onlyCountries={["kg","ru"]}
                                  inputProps={{
                                    autoFocus: true,
                                  }}
                                  inputStyle={{
                                    width: "100%",
                                    height: "50px",
                                    border: "0.6px solid rgba(0, 0, 0, 0.2)",
                                
                                    fontSize: "18px",
                                    paddingLeft: "80px",
                                  }}
                                  buttonStyle={{
                                    border: "none",
                                    top: "10px",
                                    left: "20px",
                                    height: "30px",
                                
                                  }}
                                  
                                />
                                <span className="errorText">
                                  {errors.phoneNumber?.message}
                                </span>
                              </>
                            )}
                        />
                        </div>
                        <div className="auth-link">
                            <p className="auth-link-title">У вас есть учетная запись?</p>
                            <Link
                                to={"/signin"}
                                className="auth-link-btn"
                            >
                              Войти в аккаунт
                            </Link>
                        </div>
                        <button type="submit" className="auth-btn">Войти</button>
                    </form>
                </div>
            </div>

    </div>
  )
}

export default SignUp