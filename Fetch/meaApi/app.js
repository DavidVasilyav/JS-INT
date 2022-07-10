const randomBtn = document.getElementById("randomMeal");

const result = document.querySelector(".result");
console.log(result);

let meals;

async function fetchApi() {
    meals = await fetch("https://www.themealdb.com/api/json/v1/1/random.php"
    ).then((res) => res.json())
    .then((data) => data.meals)
}



async function displayRandom() {
    await fetchApi();
    result.innerHTML = meals.map(meal => {
        return `
         <div class="randomContainer">
            <h4>${meal.strMeal}</h4>
            <p>Category: ${}</p>
         </div>
        
        `
        
    })

}


randomBtn.addEventListener('click', displayRandom);