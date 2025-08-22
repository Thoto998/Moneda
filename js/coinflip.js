const coin = document.querySelector('#coin img')
const btn =document.querySelector('#btn button')
const caracruz = document.querySelector('#determinador')
let giros = 0

function flipCoin()
{
const Random = Math.random()

if (Random < 0.5)
{
coin.src = 'img/cara.png'
caracruz.textContent = 'Cara'
giros +=180
coin.style.transform = 'rotateY(' + giros + 'deg)'
}
else
{
coin.src = 'img/cruz.png'
caracruz.textContent = 'Cruz'
giros -=180
coin.style.transform = 'rotateY(' + giros + 'deg)'
}
}   

btn.addEventListener('click', flipCoin)
coin.addEventListener('click', flipCoin)