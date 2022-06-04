const getRandomNumber = () => {
    return Math.floor(Math.random() * 255)
}

const getRgbNum = () => {
    //return rgbNum = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    return rgbNum = [getRandomNumber(), getRandomNumber(), getRandomNumber()]
}

const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', () => {
    let rgb = getRgbNum()
    let rgbColor = `rgb`
    rgbColor += `(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    document.body.style.backgroundColor = rgbColor
    color.textContent = rgbColor
})




