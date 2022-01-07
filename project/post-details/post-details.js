let mas = localStorage.getItem('key2')
let key2 = JSON.parse(mas)
let keynum = Number(key2)

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(fullusers => {});