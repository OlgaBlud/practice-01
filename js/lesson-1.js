//~ У змінній min лежить число від 0 до 59. Визначте у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).
const min = 65;
function checkHourQuarter(number) {
  if (number >= 0 && number <= 15) {
    return "This is first quarter";
  } else if (number <= 30) {
    return "This is second quarter";
  } else if (number <= 45) {
    return "This is third quarter";
  } else if (number <= 60) {
    ("This is 4th quarter");
  } else return "Incorrect number";
}
console.log(checkHourQuarter(min));
