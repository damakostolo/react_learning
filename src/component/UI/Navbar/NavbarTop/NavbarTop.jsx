import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from './NavbarTop.module.css'
import {AuthContext} from "../../../../constect";
import MyButton from "../../MyButton/MyButton";


const NavbarTop = () =>{
    const {setIsAuth} = useContext(AuthContext);
    const exit = (event) => {
        event.preventDefault()
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={classes.nav}>
            <div className={classes.navLinks}>
                <Link className={classes.link} to="/laptops">Laptops</Link>
                <Link className={classes.link} to="/test">test</Link>
                <Link className={classes.link} to="/laptops">Laptops</Link>
                <MyButton className={classes.link} onClick={exit}>exit</MyButton>
            </div>
        </div>
    );
};

export default NavbarTop;