import axios from "axios"
import { useState } from "react";
import WeatherCard from "../weatherCard"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './index.css';

let Home = () => {

  //State Variables

  const [search, setsearch] = useState("");
  const [data, setData] = useState([]);


  let submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitHandler");

    try {
      let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=b1708209b978d9c1ec832fb519c4d16a&units=metric`)
      console.log("response: ", response);

      setData(response.data.list);




    } catch (error) {
      console.log("error in api call: ", error);

    }

  }

  return (
    <>
      <div className="top-container">
        <h1>Weather App </h1>
        <form onSubmit={submitHandler}>
          <InputGroup>
            <Form.Control
              placeholder="Search for city,country"
              aria-label="Search for city,country"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                setsearch(e.target.value)
              }}
            />
            <Button type="submit" variant="outline-secondary" id="button-addon2">
              Get Weather
            </Button>
          </InputGroup>
        </form>

      </div>
      <div className="wrapper">
        <div className="main">


          {

            data.map((eachForecast, index) => (

              <WeatherCard
                key={index}
                date={eachForecast.dt_txt}
                temp={eachForecast.main.temp}
                icon={eachForecast.weather.description}
                min={eachForecast.main.temp_min}
                max={eachForecast.main.temp_max}
                humidity={eachForecast.main.humidity}
                wind={eachForecast.wind.speed}
              />
            ))



          }



        </div>
      </div>

    </>
  );
}

export default Home;