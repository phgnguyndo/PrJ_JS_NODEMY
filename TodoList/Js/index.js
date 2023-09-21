var card=document.getElementById('card')
var inp=document.getElementById('inp')
inp.addEventListener('input',(e)=>{  
   var node=document.getElementsByClassName('node')
   node =node[0]
   node.addEventListener('click',function(){           
       let txtInp=e.target.value
       console.log(txtInp)
       inp.value=''
       let newTag=document.createElement('div')
       newTag.classList.add('add')
       newTag.innerHTML=txtInp
         
       card.appendChild(newTag)
   })

})