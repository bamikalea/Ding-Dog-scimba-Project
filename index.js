// Remember to import the data and Dog class!

import dogs from "/data.js"
import Dog from "/Dog.js"


const indexArr = [0,1,2]
function getNewDog (data){
    const newDog = data[indexArr.shift()]
    return newDog? newDog : {}
}


let createDog = new Dog(getNewDog(dogs))
render()

//render Dog html 
function render (){
    document.getElementById("container").innerHTML = createDog.setDogHtml()
}

document.getElementById("like-btn").addEventListener("click", function(){
    createDog.hasBeenLiked = true
    render()
    setTimeout (newDog, 1000)
})

document.getElementById("reject-btn").addEventListener("click", function(){
    createDog.hasBeenSwiped = true
    render()
    setTimeout (newDog, 1000)
})


function newDog(){
    if (indexArr.length > 0){
        createDog = new Dog(getNewDog(dogs))
        render()
    } else {document.getElementById("container").innerHTML = `<div>><p class="empty-state">There are no more dogs for you</p></div`}
     
}


