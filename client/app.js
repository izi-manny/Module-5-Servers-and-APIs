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
            mealContainer.textContent = ''
            console.log(res.data.meals[0])
            const mealName = document.createElement('h2')
            mealName.textContent = res.data.meals[0].strMeal
            mealContainer.appendChild(mealName)
            const category = document.createElement('h3')
            category.textContent = `Category: ${res.data.meals[0].strCategory}`
            mealContainer.appendChild(category)

            const mealImg = document.createElement('img')
            mealImg.src = res.data.meals[0].strMealThumb
            mealContainer.appendChild(mealImg)

            const slicedYoutube = res.data.meals[0].strYoutube.slice(-11)
            // console.log(slicedYoutube)
            const embedYTLink = `https://www.youtube.com/embed/${slicedYoutube}`
            const youtubeClip = document.createElement('iframe')
            youtubeClip.src = embedYTLink
            mealContainer.appendChild(youtubeClip)
            
        })
})