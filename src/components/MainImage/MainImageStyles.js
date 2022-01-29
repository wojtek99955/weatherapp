import styled from 'styled-components';
import rain from "../../assets/icons/rain.png";
import clouds from "../../assets/icons/cloudy.png";
import sun from "../../assets/icons/sun.png";
import fog from "../../assets/icons/mist.png";
import snow from "../../assets/icons/snow.png";

export const Img = styled.div`
  width: 180px;
  height: 180px;
  background-image: ${({ weather }) => {
        switch (weather.weather[0].main) {
            case "Clouds":
                return `url(${clouds})`;
            case "Sun":
                return `url(${sun})`;
            case "Rain":
                return `url(${rain})`;
            case "Shower rain":
                return `url(${rain})`;
            case "Clear":
                return `url(${sun})`;
            case "Fog":
                return `url(${fog});`;
            case "Mist":
                return `url(${fog});`;
            case "Snow":
                return `url(${snow});`;
            default:
                return "orange";
        }
    }};

  background-position: center;
  background-size: cover;
  margin: auto;
  margin-top: 5.5rem;
  animation-name: imgMove;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  position: relative;
  animation-direction: alternate;
  animation-timing-function: linear;

  @keyframes imgMove {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(15px);
    }
  }
`;
