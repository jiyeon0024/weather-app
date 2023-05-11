import { useState } from "react";
const API_KEY = "058814dadf30b7b92760a5cd779a9817";
function App() {
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false);
  function getWeather() {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    )
      .then((data) => data.json())
      .then((value) => setLoading(false))
      .catch((error) => setLoading(false));
  }

  return (
    <>
      <div className="appContainer">
        <div className="bubble"></div>
        <main className="app">
          <div className="searchBarWrap">
            <input
              onChange={(e) => setCityName(e.target.value)}
              className="input"
              type="text"
              placeholder="Enter a city name"
            />
            <button className="btn" onClick={getWeather}>
              Search
            </button>
          </div>

          {loading ? (
            <div>loading</div>
          ) : (
            <div className="contentWrap">
              <p className="cityName">london</p>
              <p className="weather">cloud</p>
              <p className="subWeather">flw</p>
              <img className="icon" src="" alt="" />
              <p className="temp">18.5&deg;</p>
              <div className="rangeBox">
                <p className="min">
                  <span>min</span>17.14&deg;
                </p>
                <p className="max">
                  <span>max</span>19.95&deg;
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
