var node=document.getElementsByTagName('i')[0]
node.addEventListener('mouseenter',function(){
    var texxt=document.getElementsByClassName('texxt')[0]
    texxt.classList.add('hide')
})
node.addEventListener('mouseleave',function(){
    var texxt=document.getElementsByClassName('texxt')[0]
    texxt.classList.remove('hide')
})

