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

// 2

//~ Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
//~ значення '1', то у змінну result запишемо 'зима', якщо має значення
//~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
const s = 5;
function chekSizon(s) {
  let sezon = "";
  switch (s) {
    case 1:
      sezon = "зима";
      break;
    case 2:
      sezon = "весна";
      break;
    case 3:
      sezon = "лето";
      break;
    case 4:
      sezon = "осень";
      break;

    default:
      sezon = " Enter 1-4";
      break; 
  }
  return sezon;
}

console.log(chekSizon(s));
