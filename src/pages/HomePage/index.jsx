import { useEffect, useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail/JourneyDetail';

import { useNavigate } from 'react-router-dom';
import { SeatPicker } from '../../components/SeatPicker/SeatPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const navigate = useNavigate();

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  };

  const handleBuy = () => {
    const fetchRezervace = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/reservation',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'create',
            seat: journey.autoSeat,
            journeyId: journey.journeyId,
          }),
        },
      );
      const data = await response.json();

      const reservationId = data.results.reservationId;
      navigate(`/reservation/${reservationId}`);
    };
    fetchRezervace();
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? <JourneyDetail journey={journey.stops} /> : null}
      {/* Tady jsem si musela odtečkovat journey.stops, protože journey je ten celý objekt, ale mě zajímají jen zastávky */}
      {/* {journey && `Nalezeno spojení s id ${journey.journeyId}`} */}
      <SeatPicker />

      <div className="controls container">
        <button onClick={handleBuy} className="btn btn--big" type="button">
          Rezervovat
        </button>
      </div>
    </main>
  );
};
