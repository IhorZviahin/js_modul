// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// block a -- додає клас з назвою групи, елементу з ід main_header

// let a = document.getElementById('main_header')
// a.classList.add('group')

// block b робить ширину елементу ul 400px

// let b = document.getElementsByTagName('ul')
// for (const i of b){
//     // i.style.background = "red"
//     i.style.width = "400px"
// }

// block c  робить шириниу всіх елементів з класом linkList шириною 50%

// let c = document.getElementsByClassName('linkList')
// for (const i of c){
//     i.style.width = "50%"
// }

// block d отримує текст який зберігається в елементі з класом listElement2

// let d = document.getElementsByClassName('listElement2')
// for (const i of d){
//     i.innerText = "hihihiihhihihihihihihii";
// }
// block e отримує всі елементи li та змінює ім колір фону на сірий
//  let e = document.getElementsByTagName('li')
// for (const i of e){
//     i.style.background = "silver"
// }
// block f) отримує всі елементи 'a' та додає їм клас anchor

// let f = document.getElementsByTagName('a')
// for (const i of f){
//     i.classList.add('anchor')
// }

//  block g отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let g = document.getElementsByTagName('a')
//
// for ( const i of g){
//     if( i.innerText === 'link3' ){
//         i.style.fontSize = "40px"
//     }
// }

// block h отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let h = document.getElementsByTagName('a')
// for ( const i of h){
//     i.classList.add(`element_${i.innerText}`)
//
// }

// block i отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let bgcolor = prompt('Введите цвет фона')
// let i = document.getElementsByClassName('sub-header')
// for ( const item of i){
//     item.style.background = bgcolor;
// }

// block j отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елементу = content 2 segment . Колір отримати з prompt()

// let color = prompt (' Введите Цвет');
// let j = document.getElementsByClassName('sub-header')
// for ( const item of j){
//     if ( item.innerText === 'content 2 segment' ){
//         item.style.color = color;
//     }
// }

// block k отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let text = prompt(" Введите текст")
// let k = document.getElementsByClassName('content_1')
// for ( const item of k){
//     item.innerText = text;
// }

// block l отримати елементи p та змінити їм padding на 20px

// let l = document.getElementsByTagName('p')
// for (const item of l) {
//     item.style.padding = "20px"
// }

// block m отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let m = document.getElementsByClassName('text2')
//
// for (const item of m) {
//     item.innerText = 'sep-2021'
// }