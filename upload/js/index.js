const inputImg = document.querySelector('#inp')
var err=document.querySelector('.err')
var lbal=document.querySelector('#lba')
inputImg.addEventListener('change', (e) => {
    let file = e.target.files[0]
    
    if (!file) return

    if(!file.name.endsWith('.jpg')){        
          err.innerHTML='File up len phai o dang jpeg'
          return
    }else{
        err.innerHTML=''
    }

    let image = document.createElement('img')
    image.src = URL.createObjectURL(file)

    lbal.appendChild(image)
})