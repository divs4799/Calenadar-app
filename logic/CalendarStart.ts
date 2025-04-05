const getMonthData = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  console.log("Last Day : ", lastDay);
  const daysInMonth = lastDay.getDate();
  const startDayOfWeek = firstDay.getDay(); // Sunday = 0, Monday = 1, etc.

  // Create an array representing the calendar days
  let days = [];
  // previous Days
  if (firstDay.getDay() != 2) {
    let tempDay = new Date(firstDay);
    tempDay.setDate(tempDay.getDate() - tempDay.getDay());
    while (tempDay < firstDay) {
        days.push({
            date: new Date(tempDay),
            events: ""
        });
        tempDay.setDate(tempDay.getDate() + 1);
    }
  }
  for (let i = 0; i < daysInMonth; i++) {
    let currentDate = new Date(year, month, i + 1);
    days.push({
      date: currentDate,
      events: "",
    });
  }

  // next days till Saturday
  if (lastDay.getDay() != 1) {
    let tempDate = new Date(lastDay);
    tempDate.setDate(tempDate.getDate() + 1);
    while (tempDate.getDay() !== 1) {
      days.push({
        date: new Date(tempDate),
        events: "",
      });
      tempDate.setDate(tempDate.getDate() + 1);
    }
  }
  return days;
};

export { getMonthData };
