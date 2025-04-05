"use client"
import React from 'react';
import { Calendar } from "@/components/ui/calendar";


const MiniCalendar = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full p-4 rounded-lg border-0 shadow-none"
        />
    </>
  )
}

export default MiniCalendar