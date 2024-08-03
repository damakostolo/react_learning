import React from 'react';
import '../styles/laptopItem.css'
import MyButton from "./UI/MyButton/MyButton";
import {useNavigate} from "react-router-dom";


const LaptopItem = (props) => {
    const router = useNavigate()
    return (
        <div className="laptop-item">
            <div>
                <strong>{props.laptop.id}. {props.laptop.title}</strong>
                <div>{props.laptop.body}</div>
            </div>
                <MyButton onClick={() => props.removeLaptops(props.laptop)}>remove</MyButton>
                <MyButton onClick={() => router(`/laptops/${props.laptop.id}`)} >See</MyButton>
        </div>
    );
};

export default LaptopItem;