import {useState} from "react";
import {Input} from "./input";
import {Button} from "./button";

type InputPropsType = {
    addMessage:(title:string)=>void
}

export function Form (props:InputPropsType){

    let [title,setTitle] = useState("" );

    let onChangeHandler = (value: string) => {
        setTitle(value)
     }

    const onClickButtonHandler = () =>{
        props.addMessage(title)
        setTitle('')
    }

    return <div>
            <div>
                <Input onChangeHandler={onChangeHandler} title={title}/>
                <Button onClickButtonHandler={onClickButtonHandler} />
            </div>
        </div>
}