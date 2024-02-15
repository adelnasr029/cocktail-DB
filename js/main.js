//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
let drink = document.querySelector('input').value.split(' ').join('')
console.log(drink)
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)// this url has a query parameter that enables us to plug in the different drinks that would want
.then(res => res.json()) //parse response as Json
.then(data => {
    console.log(data)
        data.drinks.forEach(obj =>{
            console.log(obj)
            let li = document.createElement('li')
            let img = document.createElement('img')
            let instruction = document.createElement('span')
            li.textContent = obj.strDrink
            instruction.textContent = obj.strInstructions
            img.srcset = obj.strDrinkThumb

            document.querySelector('ul').appendChild(li)
            document.querySelector('ul').appendChild(instruction)
            document.querySelector('ul').appendChild(img)
        })
})
.catch(err => {
    console.log(`error ${err}`)
})
}


