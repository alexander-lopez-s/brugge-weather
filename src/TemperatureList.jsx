function TemperatureList({ temperatures }) {
  return (
    <div className="card-container">
      {temperatures.map((temp, index) => (
        <div className="card" key={index}>
          <h5>{`Hour ${index}:00`}</h5>
          <p>{`Temperature: ${temp}°C`}</p>
        </div>
      ))}
    </div>
  );
}

export default TemperatureList;
