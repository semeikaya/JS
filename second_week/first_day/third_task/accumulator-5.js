// создай массив с десятью элементами числового типа.Создай переменную accumulatorEven и собери в ней четные числа массива. Для решения используй любой из циклов на своё усмотрение.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const accumulatorEven = []
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        accumulatorEven.push(array[i])
    }
}
console.log(accumulatorEven);