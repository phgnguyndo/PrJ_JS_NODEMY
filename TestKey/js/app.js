const wrapper=document.querySelector('.wrapper')

const eKey=document.querySelector('.card.key p:last-child')
const eLocation=document.querySelector('.card.location p:last-child')
const eWhich=document.querySelector('.card.which p:last-child')
const eCode=document.querySelector('.card.code p:last-child')

document.addEventListener('keydown', (e)=>{

	document.querySelector('.round').innerText = e.which

    eKey.innerText=e.key
    eLocation.innerText=e.location
    eWhich.innerText=e.which
    eCode.innerText=e.code

    document.querySelector('.enter').classList.add('hide')
    wrapper.classList.remove('hide')
})  
