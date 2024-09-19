import {BanknotsType, MoneyType} from "./App";
import React from "react";
import {City} from "./City";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filterValue: BanknotsType) => void
    addMoney:(banknote:BanknotsType)=>void
    removeMoney:(banknote:BanknotsType)=>void
}

export const Country: React.FC<CountryPropsType> = ({data, setFilterValue,addMoney,removeMoney}: CountryPropsType) => {

    const setAll = () => {
        setFilterValue('All')
    }
    const setDollars = () => {
        setFilterValue('DOLLARS')
    }
    const setRubls = () => {
        setFilterValue('RUBLS')
    }

    const addMoneyHandler = (banknote:BanknotsType) => {
        addMoney(banknote)
    }

    const removeMoneyHandler = (banknote:BanknotsType) => {
        removeMoney(banknote)
    }

    return (
        <div>
            <div>
                <button onClick={setAll}>all</button>
                <button onClick={setRubls}>rubls</button>
                <button onClick={setDollars}>dollars</button>
            </div>
            <div>
                <button onClick={()=>addMoneyHandler('DOLLARS')}>Положить 100$</button>
                <button onClick={()=>addMoneyHandler('RUBLS')}>Положить 100p</button>
                <button onClick={()=>removeMoneyHandler('DOLLARS')}>Снять 100$</button>
                <button onClick={()=>removeMoneyHandler('RUBLS')}>Снять 100p</button>
            </div>

            <City data={data}/>

        </div>
    )
}