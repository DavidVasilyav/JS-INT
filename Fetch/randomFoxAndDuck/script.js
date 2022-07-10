const form = document.querySelector("form");
const foxCheckBox = document.querySelector("#foxCheckBox");
const duckCheckBox = document.querySelector("#duckCheckBox");

console.log(form);
console.log(foxCheckBox);
console.log(duckCheckBox);

function handleSubmit(e) {
    e.preventDefault();
    console.log('i got submitted');
}

function vaidateCheckboc(e){
    console.log(e.target);
}



form.onsubmit = handleSubmit;
foxCheckBox.onchange = vaidateCheckboc;
duckCheckBox.onchange = vaidateCheckboc;