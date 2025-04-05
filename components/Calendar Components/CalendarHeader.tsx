import React from 'react'
import CalenderHeaderTile from './CalenderHeaderTile';

const monthHeader =['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
const CalendarHeader = () => {
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between",padding:"0px 30px"}} >
    {monthHeader.map((month,index)=>{
        return <CalenderHeaderTile key={index}  tileName={month} />
    })}
    </div>
    </>
  )
}

export default CalendarHeader