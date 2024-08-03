import classes from './MyPages.module.css'
import React from 'react';
import MyButton from "../MyButton/MyButton";


const MyPages = ({pagesArray, changePage}) => {
    return (
        <div className={classes.page__wrapper}>
            {pagesArray.map(p => (
                <MyButton
                    key={p}
                    onClick={() => changePage(p)}>{p}</MyButton>
            ))
            }
        </div>
    );
};

export default MyPages;