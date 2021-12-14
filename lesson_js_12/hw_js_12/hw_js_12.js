//Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати,
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(posts => {
//         for (const post of posts) {
//             let div = document.createElement('div');
//             let posts = document.createElement('div');
//             let h3 = document.createElement('h3');
//             let p = document.createElement('p');
//             div.classList.add('block')
//
//             h3.innerText = `${post.id}`;
//             p.innerText = `${post.body}`;
//
//             posts.append(h3,p)
//             div.appendChild(posts)
//             document.body.append(div);
//         }
//     });

// block 2

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let div = document.createElement('div');
            let posts = document.createElement('div');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            div.classList.add('block2')

            h3.innerText = `${post.id}`;
            p.innerText = `${post.email} `;

            posts.append(h3,p)
            div.appendChild(posts)
            document.body.append(div);
        }
    });