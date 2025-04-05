import React from 'react'
import CalenderHeaderTile from './CalenderHeaderTile';

const monthHeader =['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
const CalendarHeader = () => {
  return (
    <>
     <div className="grid grid-cols-7 px-4 py-2">
    {monthHeader.map((month,index)=>{
        return <CalenderHeaderTile key={index}  tileName={month} />
    })}
    </div>
    </>
  )
}

export default CalendarHeader