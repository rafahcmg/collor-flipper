const colors = ['green', 'red', "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    // console.log(randomNumber)
    for(let index = 0; index < colors.length; index++) {
        document.body.style.backgroundColor = colors[randomNumber]
        color.textContent = colors[randomNumber] 
    }
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
};