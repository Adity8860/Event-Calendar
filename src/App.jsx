// src/App.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import EventManager from './Component/EventManager/EventManager';
const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setSelectedDate} />
      <EventManager date={selectedDate} />
    </div>
  );
};

export default App;
