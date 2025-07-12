// display how many times the button has been clicked by using a callback 
let count = 0;

document.getElementById('btn').addEventListener("click",function clickHandler(){
    console.log('Button Clicked', count++)
})
