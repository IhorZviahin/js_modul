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
                let forposts = document.createElement('div');
                let h1 = document.createElement('h1');
                let h31 = document.createElement('h3');
                let h32 = document.createElement('h3');
                let h33 = document.createElement('h3');
                let h34 = document.createElement('h3');
                let h35 = document.createElement('h3');
                let h36 = document.createElement('h3');
                let h37 = document.createElement('h3');
                let h38 = document.createElement('h3');
                let h39 = document.createElement('h3');
                let h310 = document.createElement('h3');
                let h311 = document.createElement('h3');
                let h312 = document.createElement('h3');
                let h313 = document.createElement('h3');
                let h314 = document.createElement('h3');
                let btn = document.createElement('button');

                div.classList.add('blockfull');
                posts.classList.add('post')
                btn.classList.add('botton')
                forposts.classList.add('forposts')

                h1.innerText = `${fulluser.id}`;
                h31.innerText = ` name: ${fulluser.name}`;
                h32.innerText = ` username: ${fulluser.username}`;
                h33.innerText = ` email: ${fulluser.email}`;
                h34.innerText = ` Street: ${fulluser.address.street}`;
                h35.innerText = ` suite: ${fulluser.address.suite}`;
                h36.innerText = ` city: ${fulluser.address.city}`;
                h37.innerText = ` zipcode: ${fulluser.address.zipcode}`;
                h38.innerText = ` lat: ${fulluser.address.geo.lat}`;
                h39.innerText = ` lat: ${fulluser.address.geo.lng}`;
                h310.innerText = ` phone: ${fulluser.phone}`;
                h311.innerText = ` website: ${fulluser.website}`;
                h312.innerText = ` company name: ${fulluser.company.name}`;
                h313.innerText = ` company catchPhrase: ${fulluser.company.catchPhrase}`;
                h314.innerText = ` company bs: ${fulluser.company.bs}`;
                btn.innerText = 'post of current user';


                posts.append(h1, h31, h32, h33, h34, h35, h36, h37, h38, h39, h310, h311, h312, h313, h314);
                div.append(posts, btn, forposts)
                document.body.append(div);

                btn.onclick = () => {
                    fetch(`https://jsonplaceholder.typicode.com/posts`)
                        .then(response => response.json())
                        .then(title => {
                            for (com of title) {
                                if (keynum === com.userId) {
                                    let comms = document.createElement('div');
                                    let btn2 = document.createElement('button');
                                    comms.classList.add('blockforpost')
                                    comms.innerText = `${com.title}`
                                    btn2.innerText = 'post-details'

                                    btn2.onclick = function () {
                                        window.location.href = 'file:///C:/Users/%D0%98%D0%B3%D0%BE%D1%80%D1%8C/WebstormProjects/js_modul/project/post-details/post-details.html'
                                        localStorage.setItem('key2', JSON.stringify(`${com.userId}`))
                                    }

                                    comms.appendChild(btn2)
                                    forposts.appendChild(comms);
                                    console.log(com)
                                }
                            }
                        })
                }
            }
        }
    });