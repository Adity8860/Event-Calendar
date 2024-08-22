// src/components/EventManager.js
import React, { useState } from 'react';
import "../Calendar/Calendar.css"

const EventManager = ({ date }) => {
  const [events, setEvents] = useState([]);
  const [eventText, setEventText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addEvent = () => {
    
    setEvents([...events, { date, text: eventText }]);
    setEventText('');
  };

  const deleteEvent = (index) => {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
  };

  const startEditing = (index) => {
    setIsEditing(true);
    setCurrentEventIndex(index);
    setEditText(events[index].text);
  };

  const editEvent = () => {
    const newEvents = events.map((event, index) =>
      index === currentEventIndex ? { ...event, text: editText } : event
    );
    setEvents(newEvents);
    setIsEditing(false);
    setCurrentEventIndex(null);
    setEditText('');
  };

  return (
    <div  className='content'>
      <h3>Events on {date.toDateString()}</h3>
      <input placeholder='Add Event'
        type="text"
        value={eventText}
        onChange={(e) => setEventText(e.target.value)}
      />
      <button onClick={addEvent}>Add Event</button>
      <ul>
        {events
          .filter((event) => event.date.toDateString() === date.toDateString())
          .map((event, index) => (
            <li key={index}>
              {event.text}{' '}
              <button onClick={() => deleteEvent(index)}>Delete</button>
              <button onClick={() => startEditing(index)}>Edit</button>
            </li>
          ))}
      </ul>
      {isEditing && (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={editEvent}>Save</button>
        </div>
      )}
    </div>
  );
};

export default EventManager;