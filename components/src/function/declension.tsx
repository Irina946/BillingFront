export function declension(count: number) {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `${ count } рублей`;
    }

    switch (lastDigit) {
        case 1:
            return ` ${ count } рубль `;
        case 2:
        case 3:
        case 4:
            return ` ${ count } рубля `;
        default:
            return ` ${ count } рублей `;
    }
}