import weatherData from "./mockWeatherData"

function CityList(props) {
    const cities = weatherData.map(city =>
        //stole this from last last homework, keeps button active after being selected
        <button className={city.name === props.selected ? 'button active':'button'} key={city.id} 
        onClick={() => props.setSelected(city.name)}> {city.name} </button>
    )
    return (
        <>
            {cities}
        </>
    )
}

export default CityList;