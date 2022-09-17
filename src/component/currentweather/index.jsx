// import React from "react";
// import axios from "axios"
// import { useState } from "react";
// // import WeatherCard from "../weatherCard"
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import InputGroup from 'react-bootstrap/InputGroup';
// const temp = () => {
//     const [searchValue, setSearchValue] = useState("pune");
//     const [tempInfo, setTempInfo] = useState({});

//     let submitHandler = async (e) => {
//         e.preventDefault();
//         console.log("submitHandler");
//         const getWeatherInfo = async () => {
//           try {
//             let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=b1708209b978d9c1ec832fb519c4d16a`;
      
//             let res = await fetch(url);
//             let data = await res.json();
      
//             const { temp, humidity, pressure } = data.main;
//             const { main: weathermood } = data.weather[0];
//             const { name } = data;
//             const { speed } = data.wind;
//             const { country, sunset } = data.sys;
      
//             const myNewWeatherInfo = {
//               temp,
//               humidity,
//               pressure,
//               weathermood,
//               name,
//               speed,
//               country,
//               sunset,
//             };
      
//             setTempInfo(myNewWeatherInfo);
//           } catch (error) {
//             console.log(error);
//           }
//         };
      
//         useEffect(() => {
//           getWeatherInfo();
//         }, []);
//     }

  
  
//     return (
//       <>
//         <div className="wrap">
//           <div className="search">
//           <form onSubmit={submitHandler}>
//             <input
//               type="search"
//               placeholder="search..."
//               autoFocus
//               id="search"
//               className="searchTerm"
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//             />
  
//             <button
//               className="searchButton"
//               type="button"
//               onClick={getWeatherInfo}>
//               Search
//             </button>
//             </form>
//           </div>
//         </div>
  
//         {/* our temp card  */}
//         <Weathercard {...tempInfo} />
//       </>
//     );
// }
// export default temp
