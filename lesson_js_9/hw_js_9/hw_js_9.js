
//block 1 - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div')
// div.innerText ='kvneriufniokem'
// div.classList.add('wrap','collapse','alpha', 'beta')
// div.style.background = "silver";
// div.style.color = "white"
// div.style.fontSize = '20px'
//
// document.body.appendChild(div)
//
// document.body.appendChild(div.cloneNode(true))

// block 2

// Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let mas = ['Main','Products','About us','Contacts'];
// for (const item of mas){
//     let li = document.createElement('li')
//     li.innerText = `${item}`
//    let menu = document.getElementsByClassName('menu')[0]
//     menu.appendChild(li)
// }

// block 3 Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// for ( const item of coursesAndDurationArray){
//     let div = document.createElement('div')
//     div.innerText = `${item.title} ${item.monthDuration}`;
//     document.body.appendChild(div)
// }

//  block 4 За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
//  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.


for ( const i of coursesAndDurationArray){
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    // div.classList.add(item)
    // h1.classList.add(heading)
    h1.innerText = `${i.title}`;
    p.innerText = `${i.monthDuration}`
    div.append(h1, p)
    document.body.appendChild(div)

}



