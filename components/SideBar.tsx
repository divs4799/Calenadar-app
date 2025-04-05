import React from 'react'
import MiniCalendar from './MiniCalendar'
import { Poppins } from "next/font/google";
import styles from '@/components/styles/sidebar.module.css'
import MyCalendar from './MyCalendar';

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
const SideBar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={`${poppins.className} ${styles.heading}`}>
            Calendar
        </div>
        <div>
        <MiniCalendar />
        </div>
        <div className={styles.subheading} >
            <MyCalendar />
        </div>
    </div>
  )
}

export default SideBar