document.querySelector("#grandparent").addEventListener("click", function() {
    console.log("Grandparent Clicked");
});

document.querySelector("#parent").addEventListener("click", function() {
    console.log("Parent Clicked");
});

document.querySelector("#child").addEventListener("click", function(event) {
    console.log("Child Clicked");
    
});