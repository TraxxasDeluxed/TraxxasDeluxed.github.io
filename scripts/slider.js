let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[items.length-1]) // here the length of the items = 6
})

