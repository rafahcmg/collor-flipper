const getRandomNumber = () => {
    return `${Math.floor(Math.random() * 101)}`
}

const getHsl = () => {
    let h = Math.floor(Math.random() * 360)
    let s = `${getRandomNumber()}%`
    let l = `${getRandomNumber()}%`
    return hslNum = [h, s, l]
}

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    let hsl = getHsl()
    let hslColor = 'hsl'
    hslColor += `(${hsl[0]}, ${hsl[1]}, ${hsl[2]})`
    document.body.style.backgroundColor = hslColor
    color.textContent = hslColor
})