//block 1
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, brand, year, maxspeed, vg) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.vg = vg;
//
//     this.vv = function (maxv) {
//         return `${maxv} возможно, ${this.maxspeed}`
//     }
//     this.info = function () {
//         return xxx = [this.model, this.maxspeed, this.year, this.maxspeed, this.vg]
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxspeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }


//block 11
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// let carspeed = new Car('tavria','zaz', 1999, 'дай бог 70км/ч', 900)
// console.log(carspeed.vv('максимальна швидкість'));

//block 12
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// let allchar = new Car('tavria','zaz', 1999, 'дай бог 70км/ч', 900)
// console.log(allchar.info())

//block 13

//increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// let allcharrr = new Car('tavria', 'zaz', 1999, 70, 900)
// console.log(allcharrr.increaseMaxSpeed(33))

//block 14
//changeYear (newValue) - змінює рік випуску на значення newValue
// let chYear = new Car('tavria', 'zaz', 1999, 70, 900)
// chYear.changeYear(2003)
// console.log(chYear)

//block 15
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// let addDriver = new Car('tavria', 'zaz', 1999, 70, 900)
// addDriver.addDriver('Dima')
// console.log(addDriver)




// block 2
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car {
//     constructor(model, brand, year, maxspeed, vg) {
//         this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.vg = vg;
//         this.vv = function (maxv) {
//         return `${maxv} возможно, ${this.maxspeed}`
//     }
//     this.info = function () {
//             let x = [this.model, this.maxspeed, this.year, this.maxspeed, this.vg]
//         return x
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxspeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
//     }
// }

//block 21
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// let carspeed = new Car('tavria','zaz', 1999, 'дай бог 70км/ч', 900)
// console.log(carspeed.vv('максимальна швидкість'));

//block 22
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// let allchar = new Car('tavria','zaz', 1999, 'дай бог 70км/ч', 900)
// console.log(allchar.info())

//block 23

//increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// let allcharrr = new Car('tavria', 'zaz', 1999, 70, 900)
// console.log(allcharrr.increaseMaxSpeed(33))

//block 24
//changeYear (newValue) - змінює рік випуску на значення newValue
// let chYear = new Car('tavria', 'zaz', 1999, 70, 900)
// chYear.changeYear(2003)
// console.log(chYear)

//block 25
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// let addDriver = new Car('tavria', 'zaz', 1999, 70, 900)
// addDriver.addDriver('Dima')
// console.log(addDriver)


// block 3
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку