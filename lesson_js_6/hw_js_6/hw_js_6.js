// block 1 -  Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

// let str = "hello world";
// let strtwo = "lorem ipsum";
// let strthree = "javascript is cool";
//
// console.log(str.length);
// console.log(strtwo.length);
// console.log(strthree.length);

// block 2 - Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'

// let str = "hello world";
// let strtwo = "lorem ipsum";
// let strthree = "javascript is cool";
//
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
// let toUpperCase2 = strtwo.toUpperCase();
// console.log(toUpperCase2);
// let toUpperCase3 = strthree.toUpperCase();
// console.log(toUpperCase3);

// block 3 - - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = "HELLO WORLD";
// let strtwo = "LOREM IPSUM";
// let strthree = "JAVASCRIPT IS COOL";
//
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);
// let toLowerCase2 = strtwo.toLowerCase();
// console.log(toLowerCase2);
// let toLowerCase3 = strthree.toLowerCase();
// console.log(toLowerCase3);

// block 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = '     cx       ds   dirty string   ';
// console.log(str.trim());

// block 5 -  Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

//
//
// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) =>{
//     return str.split(' ');
// }
// let arr = stringToarray(str);
// console.log(arr)
//
// let str = 'Каждый охотник желает знать';
// console.log(str.split(" "));

// два варианта

// block 6- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let substringone = (str, length) => {
//     return str.substr(0, length);
// }
// let vv = substringone(str, 7)
// console.log(vv)


// let str = 'Каждый охотник желает знать';
// let vvv  = str.substr(0,7);
// console.log(vvv)


//
// block 7 - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
//
// let insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase()
// let vv = insert_dash(str)
// console.log(vv)


// block 8 - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = "kjlea wfui3rwgr fvdhefd"
// let toUpperCase_fist_s = (str) => {
//     return str[0].toUpperCase() + str.slice(0) ;
// }
// let vv = toUpperCase_fist_s(str)
// console.log(vv)

//
// block 9 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = "kjlea wfui3rwgr fvdhefd";
//
// let capitalize = (str) => {
//     return str.split(" ").map(capitalize_=>capitalize_.charAt(0).toUpperCase() + capitalize_.slice(1)).join(" ");
// }
// let vv = capitalize(str);
// console.log(vv)




