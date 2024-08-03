import React from 'react';
import cl from './Loader.module.css'

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent : 'center' }}>
            <div className={cl.loader}></div>
        </div>

    );
};

export default Loading;