import { generateTextAndImage } from "./utils.js"

let name = "Hillel Schein"
let favoriteActivity = "doing crosswords"
let favoritePlace = "home"
// Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more random & experimental output
let temperature = 1

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)
