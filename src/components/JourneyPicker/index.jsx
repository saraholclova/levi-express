import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      const data = await response.json();
      setCities(data.results);
    };
    const fetchDates = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/dates',
      );
      const data = await response.json();
      setDates(data.results);
    };

    fetchCities();
    fetchDates();

    // setCities([
    //   { name: 'Praha', code: 'CZ-PRG' },
    //   { name: 'Brno', code: 'CZ-BRQ' },
    // ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchCesta = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
      );
      const data = await response.json();
      const spoje = data.results;
      onJourneyChange(spoje);
    };
    fetchCesta();
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              disabled={!fromCity || !toCity || !date}
              className="btn"
              type="submit"
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};

export const CityOptions = ({ cities }) => {
  // console.log(cities);
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((mesto) => (
        <option key={mesto.code} value={mesto.code}>
          {mesto.name}
        </option>
      ))}
    </>
  );
};

export const DatesOptions = ({ dates }) => {
  console.log(dates);
  return (
    <>
      <option value="">Vyberte</option>

      {dates.map((datum) => (
        <option key={datum.dateBasic} value={datum.dateBasic}>
          {datum.dateCs}
        </option>
      ))}
    </>
  );
};
