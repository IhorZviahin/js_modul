// block 1 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

//
// function User(id, name, surname, email, phone) {
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }

// // block 2 створити пустий масив, наповнити його 10 об'єктами new User(....)
// let mas = [
//     new User(1, 'Gogo', 'Adin', 'rees@asd.com', 380945533893),
//     new User(22, 'Oliver', 'Baer', 'jyv@asd.com', 380945768893),
//     new User(567, 'Jack', 'Beegle', 'iuy@asd.com', 380945538983),
//     new User(4, 'Harry', 'Borror', 'nbv@asd.com', 380923538893),
//     new User(52, 'Jacob', 'Braum', 'vcxz@asd.com', 380945568993),
//     new User(12, 'Charley', 'Senhour', 'ghfds@asd.com', 380945548893),
//     new User(3, 'Thomas', 'Hisey', 'jhgf@asd.com', 380945575393),
//     new User(45, 'George', 'Reser', 'bvc@asd.com', 380945532163),
//     new User(78, 'Rosy', 'Shown', 'xde@asd.com', 380945587423),
//     new User(123266, 'Oscar', 'Shue', 'uiyhgv@asd.com', 38094556393),
// ];
// console.log(mas);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let vvone = mas.filter(mas => mas.id % 2 === 0)
// console.log(vvone)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let vvtrwo = mas.sort( (a, b) => a.id - b.id);
// console.log(vvtrwo)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
    }
}

let mastwo = [
    new Client(1, 'Gogo', 'Adin', 'rees@asd.com', 380945533893, ['appleб', 'at dinner', 'chop']),
    new Client(22, 'Oliver', 'Baer', 'jyv@asd.com', 380945768893, ['baked', ]),
    new Client(567, 'Jack', 'Beegle', 'iuy@asd.com', 380945538983, ['banana', 'at dinner']),
    new Client(4, 'Harry', 'Borror', 'nbv@asd.com', 380923538893, ['beefsteak',]),
    new Client(52, 'Jacob', 'Braum', 'vcxz@asd.com', 380945568993, ['berry', 'at dinner']),
    new Client(12, 'Charley', 'Senhour', 'ghfds@asd.com', 380945548893, ['blackberry', 'at dinner']),
    new Client(3, 'Thomas', 'Hisey', 'jhgf@asd.com', 380945575393, ['bread', 'at dinner']),
    new Client(45, 'George', 'Reser', 'bvc@asd.com', 380945532163, ['buckwheat', 'at dinner']),
    new Client(78, 'Rosy', 'Shown', 'xde@asd.com', 380945587423, ['candy', 'at dinner']),
    new Client(123266, 'Oscar', 'Shue', 'uiyhgv@asd.com', 38094556393, ['carp', 'at dinner']),
];

// console.log(mastwo)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let vvthree = mastwo.sort((a, b) => a.order.length - b.order.length);
console.log(vvthree)