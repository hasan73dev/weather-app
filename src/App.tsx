import React,{useState} from 'react';
import './App.css';
import WeatherCard from './component/WeatherCard';



type dataProp = {
  main:{
    temp: number
  }
}
function App() {

const [data,setData] = useState<dataProp>()

const SearchCity = (e:React.KeyboardEvent<HTMLInputElement>) =>{
  if(e.key === "Enter" && e.currentTarget.value !== ""){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.currentTarget.value}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => setData(data))
  }
}


  return (
    <div className="App">
      <WeatherCard SearchCity = {SearchCity} data = {data}/>
    </div>
  );
}

export default App;
