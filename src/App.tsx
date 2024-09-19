import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AutomobileComponent} from "./components/mapMethod/AutomobileComponent";
import {ButtonClass} from "./components/button/button";
import {useState} from "react";
import {Form} from "./components/input/Form";
import {v1} from "uuid";
import exp from "node:constants";
import {Country} from "./Country";

export type BanknotsType = 'DOLLARS' | 'RUBLS' | 'All'

export type MoneyType = {
    banknote: BanknotsType
    nominal: number
    id: string
    //setMoney:(moneys: MoneyBanknoteType[])=>void
}

const defaultMoney: MoneyType[] = [
    {banknote: 'DOLLARS', nominal: 100, id: v1()},
    {banknote: 'DOLLARS', nominal: 50, id: v1()},
    {banknote: 'RUBLS', nominal: 100, id: v1()},
    {banknote: 'DOLLARS', nominal: 100, id: v1()},
    {banknote: 'DOLLARS', nominal: 50, id: v1()},
    {banknote: 'RUBLS', nominal: 100, id: v1()},
    {banknote: 'DOLLARS', nominal: 50, id: v1()},
    {banknote: 'RUBLS', nominal: 50, id: v1()},
]


const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
    return filter === 'All' ? money : money.filter(m => m.banknote === filter)

}


function App() {

    const [money, setMoney] = useState<MoneyType[]>(defaultMoney);
    const [filterValue, setFilterValue] = useState<BanknotsType>('All')
    const [textHeader,setTextHeader] = useState<string>('lesson 4 - filter method')

    const filteredMoney = moneyFilter(money, filterValue)

    const addMoney = (banknote: BanknotsType) => {
        let newBanknote: MoneyType = {banknote: banknote, nominal: 100, id: v1()};
        let newMoney = [...money, newBanknote]
        setMoney(newMoney)
        console.log(newMoney)
    }

    const removeMoney = (banknote: BanknotsType) => {

        const index = money.findIndex((el) => el.banknote === banknote && el.nominal === 100)
        index !== -1? setMoney(money.filter((el, i) => index !== i)):setTextHeader(`${banknote} номиналом 100 отсутствуют`)

    }

    return (
        <div className="App">
            <h2 className='Header'>{textHeader}</h2>

            <Country data={filteredMoney} setFilterValue={setFilterValue} addMoney={addMoney}
                     removeMoney={removeMoney}/>


        </div>
    );
}

export default App;
