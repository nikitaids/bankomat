import {MoneyType} from "./App";
import React from "react";
import styled from "styled-components";
import {CurrentBankomat} from "./CurrentBankomat";

type CityPropsType = {
    data: MoneyType[]
}

export const City = (props: CityPropsType) => {
  /*  return {props.data.map((banknote, index) => {
            return <Wrapper key={index}>
                <div key={banknote.banknote}>{banknote.banknote}</div>
                <div key={banknote.nominal}>{banknote.nominal}</div>
                <div key={banknote.id}>{banknote.id}</div>
            </Wrapper>
        })}


*/

    const mappedMoney = props.data.map((el:MoneyType,index)=>(
        <CurrentBankomat
        key={el.id}
        money={el}
        />
    ))

    return (
        <Wrapper>
            {mappedMoney}
        </Wrapper>
    )

}

const Wrapper = styled.div`
display: flex;
justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: darkslategrey;
`