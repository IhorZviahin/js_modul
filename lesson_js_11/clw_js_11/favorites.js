let withmas = localStorage.getItem('key')
let favorites = JSON.parse(withmas)
for (const i of favorites) {
    document.write(i)
}


// let withmas = localStorage.getItem('mas')
// let favorites = JSON.parse(withmas)
// for (const i of favorites) {
//         document.write(JSON.stringify(i))
// }