export const formatData = (date: string) => {
    return `${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(0, 4)}`;
};

export const formatPhoneNumber = (number: string) => {
    return `+7 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6, 8)} ${number.slice(8, 10)}`;

};

export const selectedEnding = (amount: number, endings: string[]) => {
    const lastDigit = amount % 10 // Последняя цифра
  const lastTwoDigits = amount % 100 // Последние две цифры

  if (lastTwoDigits >= 11 && lastTwoDigits <= 20) {
    return endings[0]
  }

  switch (lastDigit) {
    case 1:
      return endings[1]
    case 2:
    case 3:
    case 4:
      return endings[2]
    default:
      return endings[0]
  }
}

export const formatInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Удаляем все символы, кроме цифр
    let inputValue = event.target.value
    // Форматируем строку в нужный формат
    let formattedValue = '';
    for (let i = 0; i < inputValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += inputValue[i];
    }
    event.target.value = formattedValue.trim();
};