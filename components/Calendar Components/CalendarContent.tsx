"use client"
import React from 'react'
import { getMonthData } from '@/logic/CalendarStart';
import { OneDay } from '@/dataStructures/Interfaces';
import { daysNameListLong, monthNameListShort } from '@/dataStructures/StaticData';
import { useCalendar } from '@/dataStructures/CalendarContext';
import styles from '@/components/styles/MainCalendar.module.css';

const CalendarContent = () => {
  const {date} = useCalendar();
  let today =  new Date();
  let year = date.getFullYear();
  let month = date.getMonth()
  let days :OneDay[]  =  getMonthData(year,month);
  return (<>
   <div className="grid grid-cols-7 px-4">
      {days.map((day,index) => (
        <div key={index} 
        className={`${styles.calendarBox} ${day.date.getDate() == today.getDate() ? styles.calendarBoxActive :'' }`}>
          <div className={`${day.date.getDate() == today.getDate() ?"" :""}`}>{monthNameListShort[day.date.getMonth()]} {day.date.getDate() }</div> 
        </div>
      ))}
    </div>
  </>
  )
}

export default CalendarContent