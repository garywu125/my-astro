import React, { useState } from "react";
// npm install react-day-picker --save 
import DayPicker from "react-day-picker";
// import from node module
import "react-day-picker/lib/style.css";

export default function Calendar() {
  const [day, setDay] = useState(null);
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' };

  const handleDayClick = (event) => {
    setDay(event)
  };

  return (
    <div>
      <DayPicker selectedDays={day} onDayClick={handleDayClick} />
      <p>{day ? day.toLocaleDateString('en-CA', options) : "Please select a day 👻"}</p>
    </div>
  )
};