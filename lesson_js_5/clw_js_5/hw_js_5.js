//Всі функції повинні бути описані стрілочним типом!!!!

// block 1 створити функцію яка обчислює та повертає площу прямокутника висотою
// let s =(a, b) => {
//     return a * b;
// }
// console.log(s(4,3));
//
//block2 - створити функцію яка обчислює та повертає площу кола
// let sk = (r) => {
//     return Math.PI * r ** 2;
// }
// console.log(sk(4));
//block3 - створити функцію яка обчислює та повертає площу циліндру
// let scc = (h, r) => {
//     return Math.PI * r ** 2 * h;
// }
// console.log(scc(10,2));
//block 4- створити функцію яка приймає масив та виводить кожен його елемент

// let masone = [12, 32, 43, 23, 99, 66, 45, 65, 34, 22];
//
// let  mas = (a) => {
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//     }
// }
// mas(masone);

// block 5 - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let par = (a) => {
//     document.write(`<p>${a}</p>`);
// }
// par("ceghjnehblehjeeuidebhjduiodqhbj");

// block 6 - - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let li = (a) => {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`</ul>`)
// }
// li(3445);

// block 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let li = (a, b) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < a; i++) {
//         document.write(`<li>${b}</li>`);
//     }
//     document.write(`</ul>`);
// }
// li(9, "jkevjn");

// block 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let fist = [2132, 43, "fewaf", "wefw", 32, true];
// let mas = (a) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < a.length; i++) {
//         document.write(`<li>${a[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// mas(fist);

// block 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let mas = [
//     {
//         id: 43,
//         name: "Leps",
//         age: 54,
//     }]
//
// let per = (a) => {
//     for (const elemets of a) {
//         document.write(`<div>${elemets.id},${elemets.name},${elemets.age} </div>`);
//     }
// }
// per(mas);