import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}

export const CurrentBankomat = ({money}: CurrentBankomatPropsType) => {
    return (
       /* money.banknote === 'DOLLARS' ?
            <BanknoteGreen>
                {money.banknote}
                {money.nominal}
            </BanknoteGreen> :
            <BanknoteBlue>
                {money.banknote}
                {money.nominal}
            </BanknoteBlue>*/
        <Banknote color={money.banknote}>
            <Name>{money.banknote}</Name>
            <Nominal>{money.nominal}</Nominal>
        </Banknote>
    );
};

const BanknoteGreen = styled.div`
    background-color: aquamarine;
    width: 100px;
    height: 50px;
    margin: 10px;
`

const BanknoteBlue = styled.div`
    background-color: lightskyblue;
    width: 100px;
    height: 50px;
    margin: 10px;
`

const Banknote = styled.div`
    background-color: ${(props)=>(props.color==='DOLLARS'?'aquamarine':'lightskyblue')};
    width: 200px;
    height: 100px;
    margin: 5px
`
const Name = styled.div`
    display: flex;
    justify-content: center;
    font-size: 15px;
`
const Nominal = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 45px
`




