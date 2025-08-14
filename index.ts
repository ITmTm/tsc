const currRate = "1.05";

const fetchCurr = (response: string): number => {
  return JSON.parse(response);
};

function transferEurToUsd(available: boolean, amount: number, commission: number): void {
  if (available) {
    let res: number = fetchCurr(currRate) * amount * commission;
    console.log(res);
    // Или запись в элемент на странице вместо консоли
  } else {
    console.log("Сейчас обмен недоступен");
  }
}

transferEurToUsd(true, 500, 1.05);
