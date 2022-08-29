// создай массив с десятью элементами числового типа. Создай переменную accumulator и собери в ней сумму всех элементов массива. Для решения используй цикл for.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let accumulator = 0
for (let i = 0; i < array.length; i++) {
    accumulator = accumulator + array[i]
}
console.log(accumulator);

function opposition(numbers) {
    // твой код
    const arr1 =[]
    let res1 = numbers[0]
    let res2 = numbers[0]
    for (const ar of numbers) {
      if (ar > res1) {
        res1 = ar
      }
    }

    for (const ar of numbers) {
        if (ar < res2) {
            res2 = ar
          }
    }

    return [res2, res1]
  }
  
  console.log(opposition([1, -4, 6, -144, 5])); // [-144, 6]