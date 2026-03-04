import './App.css'
import { useState } from 'react'
import CityList from './components/CityList'
import CityForecast from './components/CityForecast';

function App() {
  const [selected, setSelected] = useState('');
  const [data, setData] = useState(null);
  return (
    <>
    <h1>What's the Weather like in...</h1>
    <CityList selected={selected} setSelected={setSelected}/>
    <CityForecast selected={selected} setSelected={setSelected} data={data} setData={setData}/>
    </>
)
}

export default App
