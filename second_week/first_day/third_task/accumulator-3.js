// создай массив с десятью элементами строкового типа. Перечисли в них известные тебе названия языков программирования. Создай переменную accumulator и собери в ней только те названия, которые длиннее трёх символов. (accumulator будет массивом, вспомни про .push()).

const array = ['JavaScript', 'Java', 'Python', 'Kotlin', 'C#', 'C++', 'C', 'Pascal', 'Swift', 'Go']
const accumulator = []
for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
        accumulator.push(array[i])
    }
}
console.log(accumulator);
