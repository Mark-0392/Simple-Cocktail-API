import get from './getElement.js'
import presentDrinks from './presentDrinks.js'

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a'
const form = get('.search-form')
const input = get('[name="drink"]')

// form.addEventListener('keyup', function (e) {
//   e.preventDefault()
//   const value = input.value
//   console.log(value)
//   if (!value) return
//   presentDrinks(`${baseURL}${value}`)
// })
form.addEventListener('keyup', function (e) {
  e.preventDefault()
  const value = input.value
  // console.log(value)
  if (!value) {
    presentDrinks(url)
  } else presentDrinks(`${baseURL}${value}`)
})
