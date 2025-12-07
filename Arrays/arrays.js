"use strict";

(function () {
    const numbers = [17, 8, 5, 14, 7, 15, 19];
    console.log("Массив numbers = " + numbers);
    numbers.sort((element1, element2) => element2 - element1);
    console.log("Отсортированный массив numbers по убыванию = " + numbers);
}());

(function () {
    const numbers = [17, 8, 5, 14, 7, 15, 19];
    console.log(`Подмассив массива ${numbers} из первых 5 элементов = ${numbers.slice(0, 5)}`);
    console.log(`Подмассив массива ${numbers} из последних 5 элементов = ${numbers.slice(numbers.length - 5)}`);
}());

(function () {
    const numbers = [17, 8, 5, 14, 7, 15, 19];
    const evenElementsSum = numbers.filter(element => element % 2 === 0).reduce(
        (elementsSum, currentElement) => elementsSum + currentElement, 0);
    console.log(`Сумма элементов массива ${numbers}, которые являются четными числами = ${evenElementsSum}`);
}());

(function () {
    const numbers = Array.from({length: 100}, (_, i) => i + 1);
    const evenNumbersSquares = numbers.filter(element => element % 2 === 0).map(element => element * element);
    console.log("Список квадратов четных чисел из массива от 1 до 100 = " + evenNumbersSquares);
}());