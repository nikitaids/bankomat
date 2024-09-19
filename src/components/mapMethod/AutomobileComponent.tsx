type automobileComponentType = {
    cars: topCars[]
}


type topCars = {
    manufacturer: string,
    model: string
}

export function AutomobileComponent(props: automobileComponentType) {
    return <table>
        <tbody>
        {props.cars.map((car,index) => {
            return (<tr key={index}>
                    <td key={car.manufacturer}>{car.manufacturer}</td>
                    <td key={car.model}>{car.model}</td>
                </tr>
            )
        })}
        </tbody>
    </table>
}