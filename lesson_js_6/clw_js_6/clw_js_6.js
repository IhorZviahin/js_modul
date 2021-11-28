// block 1
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let rename = (n, symfol) => {
//     if (n.includes(symfol, 0 )){
//     }
// return  n.replaceAll(symfol, ' ')
// }
// let vv = rename( n2, "---");
// console.log(vv)

// block 2
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random = (size, limit) => {
//     let mas = []
//     for (let i = 0; i < size; i++) {
//         mas.push(Math.round(Math.random() * limit));
//     }
//     return mas;
// }
// let vv = random(100, 100)
// console.log(vv)

// block 2.1 Відсортувати його за допомоги sort

// let block21 = random(100,100)
// console.log(block21.sort())

// block 2.2 відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let block22 = random(100, 100)
// console.log(block22.filter(block22 => block22 % 2 === 0))

// block 2.3  за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let block23 = random(100, 100)
// console.log(block23.map(callback=>callback.toString()));

// block 2.4
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11, 21, 3];
// let sortNums = (nums, direction) => {
//     if (direction === 'ascending'){
//     return nums.sort((a, b) => a - b) }
//
//     if (direction === 'descending'){
//     return nums.sort((a, b) => b - a)}
// }
// let vvn = sortNums(nums, 'ascending')
// console.log(vvn)

//block 3
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4},
// ]
// let vvvv = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
// console.log(vvvv)
//
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let vbig5 = coursesAndDurationArray.filter(user => user.monthDuration > 5);
// console.log(vbig5)


