import { BusStop } from '../BusStop/BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.map((zastavka) => (
          <BusStop
            key={zastavka.code}
            name={zastavka.name}
            station={zastavka.station}
            time={zastavka.time}
            //nezapomeň mít doplněný props všude, kde se JourneyDetail používá (tedy v HomePage a BusStop)
          />
        ))}
      </div>
    </div>
  );
};

{
  /* <div className="bus-stop">
          <div className="bus-stop__bullet"></div>
          <div className="bus-stop__place">
            <div className="bus-stop__city">Město 1</div>
            <div className="bus-stop__station">Zastávka</div>
          </div>
          <div className="bus-stop__departure">10:45</div>
        </div>
        <div className="bus-stop">
          <div className="bus-stop__bullet"></div>
          <div className="bus-stop__place">
            <div className="bus-stop__city">Město 2</div>
            <div className="bus-stop__station">Zastávka</div>
          </div>
          <div className="bus-stop__departure">10:45</div>
        </div>
        <div className="bus-stop">
          <div className="bus-stop__bullet"></div>
          <div className="bus-stop__place">
            <div className="bus-stop__city">Město 3</div>
            <div className="bus-stop__station">Zastávka</div>
          </div>
          <div className="bus-stop__departure">10:45</div>
        </div>
        <div className="bus-stop">
          <div className="bus-stop__bullet"></div>
          <div className="bus-stop__place">
            <div className="bus-stop__city">Město 4</div>
            <div className="bus-stop__station">Zastávka</div>
          </div>
          <div className="bus-stop__departure">10:45</div>
        </div> */
}
