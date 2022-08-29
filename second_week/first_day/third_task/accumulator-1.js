// создай массив с десятью элементами числового типа. Создай переменную accumulator и собери в ней сумму всех элементов массива. Для решения используй цикл for.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let accumulator = 0
for (let i = 0; i < array.length; i++) {
    accumulator = accumulator + array[i]
}
console.log(accumulator);
