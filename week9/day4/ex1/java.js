//fetch("https://www.swapi.tech/api/starships/9/")
   // .then(response => response.json())
   // .then(objectStarWars => console.log(objectStarWars.result));


    async function  StarWars() {
        const response = await fetch("https://www.swapi.tech/api/starships/9/")
        const result = await response.json()
        console.log(result)
    } 
    StarWars()