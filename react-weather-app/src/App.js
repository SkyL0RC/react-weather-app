import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import City from "./City";

function App() {
  const key = "a9e5c06dddeacd43394104c6a3314be2";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    document.title = "React-weather-app"; // Burayı istediğiniz isimle değiştirin
  }, []);
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Şehir giriniz"
          className="border-8"
        ></input>
        <City city={city} />
      </div>
    </div>
  );
}

export default App;
