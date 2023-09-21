var imageShow=document.querySelector(".imageShow")
var listImg=document.querySelectorAll(".imageSmall img.image")
console.log(listImg)
listImg.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        let link=e.target.src
        const imag=document.getElementById("empty")
        imag.src=link
    })
})

function Next(){
    const imag=document.getElementById("empty")
    let index
    listImg.forEach((item,i)=>{
        if(imag.src==item.src){
            index=i
        }
    })
    if(index<listImg.length-1)
       index++
    else
       index=0    
    imag.src=listImg[index].src
}
function Preve(){
    const imag=document.getElementById("empty")
    let index
    listImg.forEach((item,i)=>{
        if(imag.src==item.src){
            index=i
        }
    })
    if(index>0)
       index--
    else
       index=listImg.length-1    
    imag.src=listImg[index].src
}