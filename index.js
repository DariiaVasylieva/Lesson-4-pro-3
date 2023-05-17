do {
    operation = prompt('Выберите действие (+ - * /):');
} while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/');

do {
    countOfOperations = parseInt(prompt('Сколько чисел?'));
} while (countOfOperations > 7 || countOfOperations < 2 || isNaN(countOfOperations));

count = 0;
result = 0;

do {
    count++;

    do {
        number = parseInt(prompt('Введите число:', '10'));
    } while (isNaN(number));

    switch (operation) {
        case '+':
            result += number;
            break;
        case '-':
            result = count === 1 ? number : result - number;
            break;
        case '*':
            if (count === 1) result = 1;
            result *= number;
            break;
        case '/':
            result = count === 1 ? number : result / number;
            break;
    }

} while (count < countOfOperations);

alert(result);