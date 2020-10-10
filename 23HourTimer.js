/*
 * DLHour = DeadLineHour
 * DLMinute = DeadLineMinute
 * CrHour = CurrentHour
 * CrMinute = CurrentMinute
 */
const Timer = (DLHour, DLMinute) => {
  //* Generate Current Hours & Minutes
  const date = new Date(),
    CrHour = date.getHours(),
    CrMinute = date.getMinutes();

  //* Normal Calculation
  let hour = DLHour - CrHour,
    minute = DLMinute - CrMinute;

  //* Hour & Minute Generator
  if (DLMinute < CrMinute) {
    minute = DLMinute + 60 - CrMinute;
    DLHour < CrHour || (DLHour === CrHour && DLMinute < CrMinute)
      ? (hour = DLHour + 23 - CrHour)
      : (hour = DLHour - 1 - CrHour);
  } else if (DLHour < CrHour) {
    hour = DLHour + 24 - CrHour;
  }

  return `Left Time -> ${hour} hour ${minute} minutes
Dead Line -> ${DLHour}:${DLMinute === 0 ? "00" : DLMinute}
Current Time -> ${CrHour}:${CrMinute}`;
};
console.log(Timer(14, 10)); // 24 - hour clock
