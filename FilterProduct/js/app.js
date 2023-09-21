fetch('https://fakestoreapi.com/products')
.then(res=>{
    return res.json()
})
.then(data=>{
    var product=document.querySelector('.product')
    product.innerHTML=''
    data.forEach(item=>{
        var newProduct=document.createElement('div')
        newProduct.classList.add('liii')
        newProduct.innerHTML=` 
         <div class="left">
            <img src="${item.image}">
        </div> 
        <div class="right">
            <h2>${item.title}</h2>
            <p>${item.price}</p>
        </div> `
        product.appendChild(newProduct)
    })
})

var searchInp=document.getElementById('inpu')
searchInp.addEventListener('input',function(e){
  let txtSearch=e.target.value.trim().toLowerCase()
  let listProduct=document.querySelectorAll('.liii')
  listProduct.forEach(item=>{
    if(item.innerText.toLowerCase().includes(txtSearch))
    {
        item.classList.remove('hide')

    }else{
        item.classList.add('hide')
    }
  })
})