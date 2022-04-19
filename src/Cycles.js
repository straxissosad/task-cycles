/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let counter = 0;
    for (start; start <= end; start += 1)
        if (start % 2 == 0) {
            counter += start;
        }
    return counter;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let counter = 0;
    while (a > 0.1) {
        a /= 2;
        counter += 1;
    }
    return counter;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let textArray = message.split('');
    let i = 2;
    while (i < textArray.length) {
        textArray[i] = '_';
        i += 3;
    }
    let newMessage = textArray.join('');
    return newMessage;
}
