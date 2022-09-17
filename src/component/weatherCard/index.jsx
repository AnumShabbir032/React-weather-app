import moment from "moment"
import Card from 'react-bootstrap/Card';
import './index.css';
import { WiHumidity, WiWindy } from "react-icons/wi";

let WeatherCard = ({ date, temp, min, max, humidity, wind, icon }) => {
  return (
    <div className="card">
      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>{moment(date).format('llll')}</Card.Header>
        <Card.Body>
          <Card.Title><h1>{temp} °C</h1></Card.Title>
          <Card.Text>
            <p> Min: {min} °C - Max: {max} °C</p>
            <p> <WiHumidity /> {humidity} - <WiWindy /> {wind}</p>
            <p>{icon}</p>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  );
}


export default WeatherCard;