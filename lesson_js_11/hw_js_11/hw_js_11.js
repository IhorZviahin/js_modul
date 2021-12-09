//block 1
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let botton = document.getElementById("button");
botton.onclick = function () {
    let name = document.forms.formone.name.value;
    let age = document.forms.formone.age.value;
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
}
// block 2
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let btn = document.getElementById("car");
btn.onclick = function () {
    let model = document.forms.inlocalsh.model.value;
    let type = document.forms.inlocalsh.type.value;
    let volume = document.forms.inlocalsh.volume.value;
    let mass = [];
    mass.push(model, type, volume);
    localStorage.setItem('mass', JSON.stringify(mass));
}





