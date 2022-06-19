// 1. send request on submit with input value
// 2. receive a response from the API
// 3. show data to the client

// Home work - Convert sendRequestToApi to async show all json response

const formEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const genderEl = document.querySelector("[data-gender]");

const API_URL = "https://api.genderize.io/?name=";

function sendRequestToApi(name) {
  if (name === undefined || name === "") return;
  fetch(API_URL + name)
    .catch(() => alert("Enter Valid Name"))
    .then((res) => res.json())
    .then((data) => (genderEl.textContent = data.gender));
}

formEl.onsubmit = function (e) {
  e.preventDefault();
  const inputVal = inputEl.value;
//   sendRequestToApi(inputVal);
  asyncFunction(inputVal);
};

const asyncFunction = async (name) => {
    try {
        // const url = API_URL;
        const url = await fetch(API_URL+name);
        const data = await url.json();
        genderEl.innerHTML = 'Name:'+ data.name +
        ' ' + 'Gender:' + data.gender +
         ' ' +'probility:' + data.probability +
             ' '  + 'count:' + data.count;
        console.log(genderEl);
    } catch (err) {
        console.log(err)
    }
} 