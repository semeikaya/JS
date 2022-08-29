// создай массив с десятью элементами строкового типа. Перечисли в них известные тебе названия языков программирования.Ниже напиши цикл while, который выводит в консоль все названия длиннее трёх символов.
const array = ['JavaScript', 'Java', 'Python', 'Kotlin', 'C#', 'C++', 'C', 'Pascal', 'Swift', 'Go']

let i = 0
while (i < array.length) {
    if (array[i].length > 3) {
        console.log(array[i]);
    }
    i++
}