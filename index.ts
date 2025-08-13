const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = 'John';

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//   if (isBirthday) {
//     return (`Congrats ${userName}, age: ${age + 1}`);
//   } else {
//     return 'Error!';
//   }
// }

const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
  if (isBirthday) {
    return (`Congrats ${userName}, age: ${age + 1}`);
  } else {
    return 'Error!';
  }
}

logBrtMsg(isBirthdayData, userNameData, ageData);