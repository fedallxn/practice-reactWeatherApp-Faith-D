import { useEffect, useRef } from 'react'
import weatherData from './mockWeatherData';

function CityForecast(props) {
    const overviewRef = useRef(null);
    //scrolls to the forecast information...the lesson mentioned focus but that wasn't working so I found this!
    const handleView = () => {
        overviewRef.current.scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => {
        //doesn't display anything unless a city is selected
        if (!props.selected) return;
        //used find instead of fetch since we are using mock data and not an actual API
        const result = weatherData.find(item => item.name === props.selected);
        props.setData(result);
        //responds after each selection
    }, [props.selected]);

    return (
        // using the && helps protect against props.data being null so the app doesn't crahs or return nothing!
        // also added a TON of breaks so that you could see that the useRef works!
        <>
            {props.data && (
                <>
                    <button onClick={handleView}>View Details</button>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <div ref={overviewRef}>
                        <h2>Forecast Details --</h2> 
                        <p><i>{props.data.summary}</i></p>
                        <p>{props.data.details}</p>
                    </div>

            </>)}
        </>
    )
}

export default CityForecast;