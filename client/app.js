const complimentBtn = document.getElementById("compliment-button")
const fortuneBtn = document.getElementById("fortune-button")
const mealBtn = document.getElementById("meal-button")
const mealContainer = document.getElementById("meal-container")

complimentBtn.addEventListener('click', () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        })
})

fortuneBtn.addEventListener('click', () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(function (response) {
            const data = response.data
            alert(data)
        })
})

mealBtn.addEventListener('click', () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => {
            const mealName = document.createElement('li')
            mealName.textContent = res.data.meals[0].strMeal
            mealContainer.appendChild(mealName)
        })
})