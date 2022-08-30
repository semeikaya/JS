// В файле arrays-6.js создай массив с десятью элементами числового типа. Ниже напиши цикл for, который выводит в консоль всё четные числа. Еще ниже напиши цикл while, который выводит в консоль все нечетные числа.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i])
    }
}
let i = 0
while (i < array.length) {
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
    i++
}
