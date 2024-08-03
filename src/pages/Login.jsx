import React, {useContext} from 'react';
import MyInput from "../component/UI/MyInput/MyInput";
import MyButton from "../component/UI/MyButton/MyButton";
import {AuthContext} from "../constect";


const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (event) => {
      event.preventDefault();
      setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <MyInput type='text' placeholder='Login and email....' />
            <MyInput type='pasword' placeholder='Pasword....' />
            <MyButton onClick={login}>Login</MyButton>
        </div>
    );
};

export default Login;