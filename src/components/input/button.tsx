import React from 'react';

type ButtonPropsType = {
    onClickButtonHandler:()=>void
}

export const Button = (props:ButtonPropsType) => {
    return (
        <button onClick={props.onClickButtonHandler}>+</button>
    );
};

