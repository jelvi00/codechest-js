
//Get random item
const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)]

getRandomItem([1, 7, 9, 3, 6])

getRandomItem([{ name: "Ted" }, { name: "Philip" }, { name: "Jack" }])


//Sort random
const sortRandom = (arr) => arr.sort(() => Math.random() - 0.5)

sortRandom([1, 2, 3, 4, 5])