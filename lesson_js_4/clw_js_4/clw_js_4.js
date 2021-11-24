// block 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b)
//     {
//         console.log(c);
//     }
// }
// min(3,-43223,43);

//block2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(a,b,c){
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else if (c > a && c > b)
//     {
//         console.log(c);
//     }
// }
// max(23,-432,55);

// block 3 - створити функцію яка повертає найбільше число з масиву

// let mas = [1, 12, 23, 765, 3];
// function searchmaxnumber(aaa) {
//     let a = mas[0];
//     for (let i = 0; i < mas.length; i++) {
//         if (a < aaa[i]) {
//             a = aaa[i];
//         }
//     }
//     return a;
// }
// let act = searchmaxnumber(mas);
// {
//     console.log(act);
// }

// block 4 - створити функцію яка повертає найменьше число з масиву

// let mas = [32423, 12, 23, 765, 3];
// function searchminnumber(mas) {
//     let a = mas[0];
//     for (let i = 0; i < mas.length; i++) {
//         if (a > mas[i]) {
//             a = mas[i];
//         }
//     }
//     return a;
// }
// let act = searchminnumber(mas);
// {
//     console.log(act);
// }

//block 5 -> створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let mas = [43, 12, 43, 23];
//
// function summa(a) {
//     let chisla = 0;
//     for (i = 0; i < a.length; i++) {
//         chisla = chisla + a[i]
//     }
//     return chisla;
// }
// let dfef = summa(mas);
//     console.log(dfef);

//block 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mas = [43, 12, 43, 23];
//
// function summa(a) {
//     let chisla = 0;
//     for (let i = 0; i < a.length; i++) {
//         chisla = (chisla + a[i]);
//     }
//     return chisla/ a.length;
// }
//
// let dfef = summa(mas);
// console.log(dfef);

// block7 створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function minmax() {
// let minchislo = arguments[0];
// let maxchislo = arguments[0];
// for (let i = 0; i < arguments.length; i++) {
//     if (minchislo < arguments[i]) {
//         minchislo = arguments[i]
//     }
//     if (maxchislo > arguments[i]) {
//         maxchislo = arguments[i]
//     }
// }
// console.log(minchislo);
// return maxchislo;
// }
// let mmmm = minmax(3221, 21, 1223, 1, -423)
// console.log(mmmm);

// - створити функцію яка заповнює масив рандомними числами
// function random(a) {
//     let mas = [0];
//     for (let i = 0; i < a; i++) {
//         mas.push(Math.floor(Math.random() * 100));
//     }
//     return mas;
// }
//
// let vvv = random(3);
// console.log(vvv);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function random(a,l) {
//     let mas = [0];
//     for (let i = 0; i < l; i++) {
//         mas.push(Math.floor(Math.random() * a));
//     }
//     return mas;
// }
//
// let vvv = random(44,5);
// console.log(vvv);

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function masminys(a) {
//     let mas = [];
//     for (let i = a.length - 1; i >= 0; i--) {
//         let b = a[i];
//         mas.push(b);
//     }
//     return mas;
// }
// let res = masminys([9876, 1, -786543]);
// console.log(res);
