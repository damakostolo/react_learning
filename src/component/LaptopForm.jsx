import React, {useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

const LaptopForm = ({addNewLaptop}) => {

    const [laptopForm, setLaptopForm] = useState({title:'', body:''});

    const newLaptop = (e) => {
        e.preventDefault();
        const newLaptop = {
            ...laptopForm, id: Date.now()}
        addNewLaptop(newLaptop)
        setLaptopForm({title: '', body: ''})
    }


    return (
        <div>
            <MyInput
                placeholder={'title'}
                value={laptopForm.title}
                onChange={e => setLaptopForm({...laptopForm, title: e.target.value })}/>
            <MyInput
                placeholder={'description'}
                value={laptopForm.body}
                onChange={e => setLaptopForm({...laptopForm, body: e.target.value })}/>
            <MyButton onClick={newLaptop}>Push</MyButton>
        </div>
    );
};

export default LaptopForm;