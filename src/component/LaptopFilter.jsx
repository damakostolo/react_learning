import React from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/mySelect/MySelect";

const LaptopFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
            placeholder={'search title...'}
            value={filter.search}
            onChange={e => setFilter({...filter, search: e.target.value})}/>
            <MySelect
            options={[
                {name:'title', value:'title'},
                {name:'description', value:'body'},
            ]}
            value={filter.sort}
            defaultOption={'filter'}
            onChange={sort => setFilter({...filter, sort: sort})}/>
        </div>
    );
};

export default LaptopFilter;