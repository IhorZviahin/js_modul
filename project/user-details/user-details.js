let mas = localStorage.getItem('key')
let key = JSON.parse(mas)
let keynum = Number(key)
console.log(keynum)
// console.log(typeof (keynum))

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(fullusers => {
        for (const fulluser of fullusers) {
            if (keynum === fulluser.id) {
                let div = document.createElement('div');
                let posts = document.createElement('div');
                let h1 = document.createElement('h1');
                let h31 = document.createElement('h3');
                let h32 = document.createElement('h3');
                let h33 = document.createElement('h3');
                div.classList.add('blockfull');
                h1.innerText = `${fulluser.id}`;
                h31.innerText = `${fulluser.name}`;
                h32.innerText = `${fulluser.username}`;
                h33.innerText = `${fulluser.email}`;

                for (let addres of fulluser.address) {
                    let div2 = document.createElement('div');
                    let h34 = document.createElement('h3');
                    let h35 = document.createElement('h3');
                    let h36 = document.createElement('h3');
                    let h37 = document.createElement('h3');

                    // h34.innerText = `${addres}`

                    div2.append(h34, h35, h36, h37);
                    div.appendChild(div2);
                }


                posts.append(h1, h31, h32, h33);
                div.appendChild(posts)
                document.body.append(div);
            }
        }
    });