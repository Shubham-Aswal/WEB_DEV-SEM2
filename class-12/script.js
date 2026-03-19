const counter = document.querySelector("#count");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");

let count = 0;
increment.addEventListener("click",()=>{
    count++;
    counter.textContent=count;
})

decrement.addEventListener("click",()=>{
    count -= 1;
    counter.innerText =count;
})
reset.addEventListener("click",()=>{
    count=0;
    counter.textContent=count;
}) 

