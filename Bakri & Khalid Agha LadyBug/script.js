
const ladyBugLength = prompt('enter lady bug length',)

//get input field
const input = document.getElementById('input')

//set input field max length to inputted length
input.setAttribute('maxlength', ladyBugLength)
input.setAttribute("placeholder", `max length is ${ladyBugLength}`)
console.log(input)


const button = document.getElementById('button')
let inputValue = ""

button.addEventListener('click', () => {
    inputValue = input.value;
    console.log(inputValue)
    processInput(inputValue)
})

function processInput(input) {
    const array = input.split("")
    console.log(array)
}