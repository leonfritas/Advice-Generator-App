const button = document.querySelector(".btn")
const adviceText = document.querySelector('.advice-text')
const adviceId = document.querySelector('.advice-id')

async function adviceGerator(){
    const resposta = await fetch("https://api.adviceslip.com/advice")
    const catchAdvice =  await resposta.json()
    const text = catchAdvice.slip.advice
    const id =`Advice #${catchAdvice.slip.id}`  
    adviceText.innerHTML = text
    adviceId.innerHTML = id

}

button.addEventListener('click', adviceGerator)
adviceGerator()











