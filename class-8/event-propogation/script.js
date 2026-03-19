grandparent = document.querySelector("#grandparent");
parent = document.querySelector("#parent");
child = document.querySelector("#child");
clearBtn = document.querySelector(".clear");
log = document.querySelector(".feed");


function logEvent(message) {
    const entry = document.createElement("div");
    entry.textContent = message;
    let sep = document.createElement("hr");
    document.body.querySelector(".feed").appendChild(entry);
    document.body.querySelector(".feed").appendChild(sep);
}

// Capturing Phase

grandparent.addEventListener("click", function() {
    logEvent("Grandparent - capturing");

},true);

parent.addEventListener("click", function() {
    logEvent("Parent - capturing");

},true);

child.addEventListener("click", function(event) {
    logEvent("Capturing -> Target -> Bubbling");
    event.stopPropagation();
},true);


// Bubbling Phase

clearBtn.addEventListener("click", function() {
    log.innerHTML = "";
});


grandparent.addEventListener("click", function() {
    logEvent("Grandparent - bubbling");

},);

parent.addEventListener("click", function() {
    logEvent("Parent - bubbling");

},);

child.addEventListener("click", function(event) {
    logEvent("Child - bubbling");
    // event.stopPropagation();
},);







