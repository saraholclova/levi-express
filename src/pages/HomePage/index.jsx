import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? `Nalezeno spojení s id ${journey.journeyId}` : null}
      {/* {journey && `Nalezeno spojení s id ${journey.journeyId}`} */}
    </main>
  );
};
