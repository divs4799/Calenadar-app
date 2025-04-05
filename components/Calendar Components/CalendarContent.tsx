import React from 'react'

const getMonthData = (year:number, month:number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay(); // Sunday = 0, Monday = 1, etc.
  
    // Create an array representing the calendar days
    let days = [];
    for (let i = 0; i < daysInMonth; i++) {
      let currentDate = new Date(year, month, i + 1);
      days.push({
        date: currentDate,
        events:""
      });
    }
    return days;
  };
  


const CalendarContent = () => {
    let days =  getMonthData(2025,3);
    console.log(days)
  return (<>
  
  </>
  )
}

export default CalendarContent