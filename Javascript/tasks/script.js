
let inputbox = document.getElementById("inputbox").value
let result = document.getElementById("result")
let chances = document.getElementById("chances")

let random_num = Math.floor(Math.random() * 5) + 1
let no_of_guess = 3

function guess() 
{
    if (random_num == inputbox) 
    {
        result.textContent = "You guessed it right !"
        alert("You Guessed it Right!")
    }

    else 
    {
        no_of_guess -= 1
        result.textContent = "You guessed wrong!"
        chances.textContent = "Available Guesses : " + (no_of_guess) 

        if (no_of_guess == 0)
        {
            chances.textContent = "Available Guesses : 0" 
            alert("You Lost, Generated Random number is " + random_num)
        }
    }
}