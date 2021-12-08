//Block 1- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let displaynone = document.getElementById('text');
let button = document.getElementById('button')
button.onclick = function () {
    displaynone.style.display = 'none';
}


// block 2- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let displaynonee = document.getElementById('txt');
displaynonee.onclick = function () {
    displaynonee.style.display = 'none';
}

// block 3- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.getElementById('vvod')
input.onclick = function () {
    let age = document.getElementById('age').value;
    if (!age) {
        alert('Введите свой возраст');
    } else if (+age < 18) {
        alert('Вам меньше 18');
    } else if (+age > 110) {
        alert('rip');
    } else {
        alert('Добро пожаловать');
    }
}


// block 4- Создайте меню, которое раскрывается/сворачивается при клике

let btnmenu = document.getElementById('btn_menu')
let menu_list = document.getElementById('menu_list')

btnmenu.onclick = function () {
    menu_list.hidden = !menu_list.hidden;
}


// block 5 - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comens = [
    {title: 'hi', body: 'Привіт'},
    {title: 'ua', body: 'Ukraine'}
];

for (let item of comens) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    let button = document.createElement('button')
    h1.innerText = `${item.title}`;
    p.innerText = `${item.body}`;
    button.innerHTML = 'button'
    div.append(h1, p, button)
    document.body.appendChild(div)

    button.onclick = function () {
        p.hidden = !p.hidden;
    }
}