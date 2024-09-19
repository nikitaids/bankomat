const onClickHandler = (name:string) => {
    console.log(name)
}

export function ButtonClass() {
    return <div>
        <button onClick={()=>{onClickHandler("Vasya ")}}>Жмяк</button>
    </div>

}