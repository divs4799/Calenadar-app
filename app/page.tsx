"use client"
import SideBar from "@/components/SideBar";
import Content from "@/components/Content";
import Image from "next/image";
import {CalendarContext}  from "@/dataStructures/CalendarContext";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());
  return (
  <>
  <CalendarContext.Provider value={{date,setDate}}>
  <div style={{display:"flex",justifyContent:"space-between"}}>
    <div style={{flex:"0 0 20%"}} >
  <SideBar />
    </div>
    <div style={{flex:"0 0 80%"}} >
  <Content  />
    </div>
  </div>
  </CalendarContext.Provider>
  </>
  );
}
