const slider = document.getElementById("myRange");
const output = document.getElementById("slider-value");
const quoteBox = document.querySelector(".qoute") ;
const btn = document.querySelector(".btn-qoute");
const API_URL = "https://api.breakingbadquotes.xyz/v1/quotes";

let numberOfQoutes = 1;
let quote;
let quote2;
let author;


slider.oninput = () => {
    output.innerHTML = slider.value;
    numberOfQoutes = slider.value;
};
output.innerHTML = slider.value;

async function fetchApi(){
    try {
            const res = await fetch(`${API_URL}/${numberOfQoutes}`);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log('Err!')
            

        }
    
    };

    async function display() {
        quote = await fetchApi();
        quoteBox.innerHTML = quote.map((q) =>{
            return `
            <div class='quoteMap'>
              <h3 class='quotes'>${q.quote}</h3>
               <span>Author: ${q.author}</span>
            </div>
          `;
        })
        .join("");

        console.log(quote);
    };

btn.addEventListener('click', display)