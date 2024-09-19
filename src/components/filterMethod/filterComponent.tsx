import {useState} from "react";

const [money, setMoney] = useState([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
]);

type MoneysType = {
    moneys: MoneyBanknoteType[]
    setMoney:(moneys: MoneyBanknoteType[])=>void
}

type MoneyBanknoteType = {
    banknots: string
    value: number
    number: string
}


export function FilterComponent() {

    let [value, setValue] = useState('')

    if (value === 'Dollars'){
    money.filter((filterValue) => filterValue.banknots === 'Dollars')
    }
    if (value === 'RUBLS'){
        money.filter((filterValue) => filterValue.banknots === 'RUBLS')
        console.log(money)
    }

    const onClickFilter = (value:'all'|'RUBLS'|'Dollars') =>{
        setValue(value)
    }

    return




}
