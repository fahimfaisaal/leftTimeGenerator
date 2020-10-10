/*
 * dlHour = DeadLineHour
 * dlMinute = DeadLineMinute
 * dlFormat = DeadLineFormat -> am / pm
 * crHour = CurrentHour
 * crMinute = CurrentMinute
 * crFormat = CurrentFormat -> am / pm
 */
const Timer = (dlHour, dlMinute, dlFormat) => {
  //* Generate Current Hours & Minutes
  const date = new Date(),
    crMinute = date.getMinutes();

  let crHour = date.getHours(),
    crFormat = "am";

  //* am & pm generator
  if (crHour > 11) {
    crHour === 12 ? crHour : (crHour -= 12);
    crFormat = "pm";
  } else {
    crHour === 0 ? (crHour += 12) : crHour;
  }
  //* Switch to 0 - 24 hour [0, 12, 24]
  let Switch = 0;

  if (
    (crFormat === "pm" && dlFormat === "pm") ||
    (crFormat === "am" && dlFormat === "am")
  ) {
    if (dlHour === 12) {
      Switch += 12;
    } else {
      dlHour > crHour ? Switch : (Switch += 24);
    }
  } else if (
    (crFormat === "pm" && dlFormat === "am") ||
    (crFormat === "am" && dlFormat === "pm")
  ) {
    dlHour === 12 && dlFormat === "am" ? Switch : (Switch += 12);
  }

  //* Normal Calculation
  let hour = dlHour + Switch - crHour,
    minutes = dlMinute - crMinute;

  //* Hour & Minute Generator
  if (dlMinute < crMinute) {
    minutes = dlMinute + 60 - crMinute;
    dlHour < crHour || (dlHour === crHour && dlMinute < crMinute)
      ? (hour = dlHour + Switch - 1 - crHour)
      : (hour = dlHour + Switch - 1 - crHour);
  } else if (dlHour < crHour) {
    hour = dlHour + Switch - crHour;
  }

  return `Left Time -> ${hour} hour ${minutes} minutes
Dead Line -> ${dlHour}:${dlMinute === 0 ? "00" : dlMinute} ${dlFormat}
Current Time -> ${crHour}:${crMinute} ${crFormat}`;
};

console.log(Timer(8, 40, "pm"));
