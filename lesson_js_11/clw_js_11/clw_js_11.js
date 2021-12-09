// є масив -
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт
// потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let item of users) {
    let Bigdiv = document.createElement('div');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let btn = document.createElement('button');
    h2.innerText = `${item.name} ${item.age} `;
    btn.innerText = 'Нравиться'
    btn.onclick = function () {

        localStorage.setItem('key', JSON.stringify(`${item.name} ${item.age}`))
    }

    div.append(h2, btn)
    Bigdiv.appendChild(div)
    document.body.appendChild(Bigdiv);
}

// const data = localStorage.getItem('mas');
// if (data) {
//     const arr = JSON.parse(data)
//     localStorage.setItem('mas', JSON.stringify([...arr, item]));
// } else {
//     localStorage.setItem('mas', JSON.stringify([item]));
// }
// console.log(data)



// localStorage.setItem('key', JSON.stringify(`${item.name} ${item.age}`))
