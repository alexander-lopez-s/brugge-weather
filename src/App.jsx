import { useState, useEffect } from 'react';
import './App.css';
import WeatherHeader from './weatherHeader'
import TemperatureList from './TemperatureList';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const latitude = 51.2089;
  const longitude = 3.2242;

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=1`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      const temperatures = data.hourly.temperature_2m;
      setWeatherData(temperatures);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <WeatherHeader />
      <TemperatureList temperatures={weatherData} />
    </div>
  );
}

export default App;
