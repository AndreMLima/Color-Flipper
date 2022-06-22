/*Set the constants for the program.
- btn: button
- color: span that specifies the name of the color in the HTML file.
*/
const colors = ["green", "red", "orange", "purple", "gold", "aquamarine", "blanchedalmond", "chocolate", "darkcyan", "brown", "darkgoldenrod", "darkgreen"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

/*Event that randomizes the click me button and the background color.*/
btn.addEventListener('click', function () {
    //get random number between the order of the array of colors already set. Red, for example, is [2] and so go on...
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    //changes the background color
    document.body.style.backgroundColor = colors[randomNumber];
    //changes the name of the color
    color.textContent = colors[randomNumber];
})

/*To get random numbers to randomize the colors*/
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}