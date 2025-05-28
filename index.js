import { generateTextAndImage } from "./utils.js"

let name = "John Doe"
let favoriteActivity = "doing crosswords"
let favoritePlace = "beach"
// Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more random & experimental output
let temperature = 1

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)
