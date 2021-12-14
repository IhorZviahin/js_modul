// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(posts => {

        let wrappers = document.createElement('div');
        wrappers.classList.add('wrapper');


        for (const post of posts) {
            let posts = document.createElement('div');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let button = document.createElement('button');
            posts.classList.add('block')
            button.classList.add('button')

            button.innerText = 'tuk'
            h3.innerText = `${post.id}`;
            p.innerText = `${post.title}`;
            posts.append(h3, p, button)
            wrappers.append(posts);

            button.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        for (com of comments) {
                            let comms = document.createElement('div');
                            comms.innerText = `${com.id} ${com.name}`
                            posts.appendChild(comms);
                        }
                    })
            }

        }

        document.body.appendChild(wrappers);
    });