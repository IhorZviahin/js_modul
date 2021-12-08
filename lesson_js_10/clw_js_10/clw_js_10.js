// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let botton = document.getElementById("button");
// botton.onclick = function (){
//
//     let value = document.forms.form_one.one.value;
//     let value1 = document.forms.form_one.two.value;
//
//     let value2 = document.forms.form_two.one_two.value;
//     let value3 = document.forms.form_two.two_two.value;
//     console.log(value,value1,value2,value3)
// }
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let table = document.forms['table'];
// table.onsubmit = function (e) {
//     e.preventDefault();
//     let row = +table.row.value;
//     let col = +table.col.value;
//     let txt = table.txt.value;
//     let table2 = document.createElement('table');
//     for (let item = 0; item < row; item++) {
//         let tr = document.createElement('tr');
//         for (let cotem = 0; cotem < col; cotem++) {
//             let td = document.createElement('td');
//             td.innerText = txt;
//             tr.appendChild(td)
//         }
//
//         table2.appendChild(tr);
//     }
//     document.body.appendChild(table2);
// }


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let mas = ['чайник', 'дурак', 'дундук']
// let button = document.getElementById('bad');
// button.onclick = function () {
//     let value = document.getElementById('words').value;
//     for (const item of mas) {
//         if (item === value){
//             console.log("Введите без плохих слов")
//         }
//             }
// }


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let mas = ['чайник', 'дурак', 'дундук']
// let button = document.getElementById('bad');
// button.onclick = function () {
//     let value = document.getElementById('words').value;
//     for (const item of mas) {
//         if (value.includes(item)){
//             alert("Введите без плохих слов")
//         }
//     }
// }