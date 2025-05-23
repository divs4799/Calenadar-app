"use client";

import { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from "react";

type CalendarContextType = {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
};

export const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};