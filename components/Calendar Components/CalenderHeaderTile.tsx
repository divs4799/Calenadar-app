import React from 'react'

const CalenderHeaderTile = ({tileName}:{tileName:string}) => {
  return (
    <div style={{
        flex:"0 1 14.28%",
        padding:"5px",
        border:"1px solid black"
    }} >
        
        {tileName}</div>
  )
}

export default CalenderHeaderTile