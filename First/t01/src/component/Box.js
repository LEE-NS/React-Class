//rafce <- HTML의 !
import React from 'react'
import { useState } from 'react';

const Box = (props) => {
    const [number, setNumber] = useState(1);
    const add = () => {
        setNumber(number + 1);
    };
    return (
        <div className='box'>
            Box{number}
            <p>{props.name}입니다</p>
            <button onClick={add}>click here</button>
        </div>
    );
};

export default Box