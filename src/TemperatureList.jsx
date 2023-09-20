const getWeatherEmoji = (temp) => {
    if (temp <= 10) {
      return "❄️"; 
    } else if (temp >= 10 && temp <= 15) {
      return "⚡";
    } else if (temp >= 16 && temp <= 20) {
      return "🌧️"; 
    } else {
      return "☀️";
    }
  }
  
  const TemperatureList = ({ temperatures }) => {
    return (
      <div className="card-container">
        {temperatures.map((temp, index) => (
          <div className="card" key={index}>
            <h5>{`Hour ${index}:00`}</h5>
            <p>{`Temperature: ${temp}°C`}</p>
            <p>{`Condition: ${getWeatherEmoji(temp)}`}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default TemperatureList;
  