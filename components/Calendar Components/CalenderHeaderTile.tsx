import React from 'react'
import style from '@/components/styles/MainCalendar.module.css'
const CalenderHeaderTile = ({tileName}:{tileName:string}) => {
  return (
    <div className={style.headerTile} >
        {tileName}</div>
  )
}

export default CalenderHeaderTile