/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

document.querySelector('html').addEventListener('click', function(){
    alert("Ohh, don't poke me!")
})
*/
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName(){
    let myName = prompt('Please enter your name')
    if(!myName){
        setUserName()
    }else{
    localStorage.setItem('name', myName)
    myHeading.textContent = 'Mozila is cool ' + myName
    }

    
if(!localStorage.getItem('name')){
    setUserName()
}else{
    let storeName = localStorage.getItem('name')
    myHeading.textContent = 'Mozila is cool ' + storeName
}

}


myButton.onclick = function() {
    setUserName();
  }

let myImage = document.querySelector('img')

myImage.onclick = function(){
    let imgSrc = myImage.getAttribute('src');
    if(imgSrc === 'images/girl1.jpg'){
        myImage.setAttribute('src', 'images/girl2.jpg')
    }else{
        myImage.setAttribute('src', 'images/girl1.jpg')
    }
}