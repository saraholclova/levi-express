import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat/SelectedSeat';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? <JourneyDetail journey={journey.stops} /> : null}
      {/* Tady jsem si musela odtečkovat journey.stops, protože journey je ten celý objekt, ale mě zajímají jen zastávky */}
      {/* {journey && `Nalezeno spojení s id ${journey.journeyId}`} */}
      {journey && <SelectedSeat number={journey.autoSeat} />}
    </main>
  );
};
