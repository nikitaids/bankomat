import React from 'react';

type InputPropsType = {
    onChangeHandler:(value:string)=>void
    title:string
}

export const Input = (props:InputPropsType) => {
    return (
        <input onChange={(event) => props.onChangeHandler(event.currentTarget.value)} value={props.title} type="text"/>
    );
};

