const dateHTML = document.getElementById('date');
const title = document.querySelector("[data-title]");
const img = document.querySelector("[data-img]");
const exp = document.querySelector("[data-exp]");
const btn = document.querySelector("[data-btn]");
const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=a58TDabeuMXxj3F88oiL3wDHTAII0j7m9pvsKlbB';
var selected;
var getMsg;

async function getApi(date) {
    exp.style.display = 'block';
    try {
        const res = await fetch(API_URL+`&date=${date}`);
        console.log(res);
        const data = await res.json();
            title.innerHTML = data.title;
            exp.innerHTML = data.explanation;
            img.src = data.hdurl;
            getMsg = data.msg;
    } catch (err) {
        console.log('err');
        title.innerHTML = "fu"
    }
    
};

    async function  getApiRandom(){
    exp.style.display = 'block';
    try {
        // const res = await fetch(API_URL+`&count=1`);
        const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=a58TDabeuMXxj3F88oiL3wDHTAII0j7m9pvsKlbB&count=1");
        console.log(res);
        const data = await res.json();
            title.innerHTML = data.title;
            exp.innerHTML = data.explanation;
            img.src = data.hdurl;
            getMsg = data.msg;
    } catch (err) {
        console.log('err');
        title.innerHTML = "fu"
    };
} 
    
// {code: 404, msg: 'No data available for date: 1995-06-17', service_version: 'v1'}

function ifUndefined() {
    if (title.innerHTML === 'undefined') {
        title.innerHTML = getMsg;
        exp.innerHTML = 'Sorry we searching for life...';
        img.src = 'https://i.etsystatic.com/5714577/r/il/6ab150/1574335624/il_fullxfull.1574335624_8li1.jpg';
    }
};


dateHTML.addEventListener('change', async () => {
    selected = dateHTML.value;
    await getApi(selected);
    ifUndefined();
});

btn.addEventListener('click', async ()=> {
    await getApiRandom();
})