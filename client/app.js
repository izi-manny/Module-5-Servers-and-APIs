const complimentBtn = document.getElementById("compliment-button")
const fortuneBtn = document.getElementById("fortune-button")
const mealBtn = document.getElementById("meal-button")
const content = document.getElementById("content")
const clearBtn = document.getElementById("clear-button")

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

clearBtn.addEventListener('click', () => {
    content.textContent = ''
})

mealBtn.addEventListener('click', () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => {
            content.textContent = ''
            console.log(res.data.meals[0])
            const mealName = document.createElement('h2')
            mealName.textContent = res.data.meals[0].strMeal
            content.appendChild(mealName)
            const category = document.createElement('h3')
            category.textContent = `Category: ${res.data.meals[0].strCategory}`
            content.appendChild(category)

            const mealImg = document.createElement('img')
            mealImg.src = res.data.meals[0].strMealThumb
            content.appendChild(mealImg)

            const vidRecipeTitle = document.createElement('h3')
            vidRecipeTitle.textContent = 'Video Recipe:'
            content.appendChild(vidRecipeTitle)
            const slicedYoutube = res.data.meals[0].strYoutube.slice(-11)
            // console.log(slicedYoutube)
            const embedYTLink = `https://www.youtube.com/embed/${slicedYoutube}`
            const youtubeClip = document.createElement('iframe')
            youtubeClip.src = embedYTLink
            content.appendChild(youtubeClip)
            
        })
})