import React from 'react'
import { getMonthData } from '@/logic/CalendarStart';
import { OneDay } from '@/dataStructures/Interfaces';
import { daysNameListLong, monthNameListShort } from '@/dataStructures/StaticData';


const CalendarContent = () => {
  let today =  new Date();
  let days :OneDay[]  =  getMonthData(2025,1);
  console.log(days)
  return (<>
   <div className="grid grid-cols-7 px-4">
      {days.map((day,index) => (
        <div key={index} className={`border p-2 ${day.date.getDate() == today.getDate() ? 'bg-blue-100' : ''}`}>
          <div>{daysNameListLong[day.date.getDay()]}</div> {/* Day name: Mon, Tue */}
          <div>{day.date.getDate() }{monthNameListShort[day.date.getMonth()]}</div> {/* Date: 5 Apr */}
        </div>
      ))}
    </div>
  </>
  )
}

export default CalendarContent