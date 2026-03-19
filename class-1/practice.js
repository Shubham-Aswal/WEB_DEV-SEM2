function idk(obj){
    let  total = 500 * obj;
    if(obj >= 10){
        total = total - total * 10/100;
    }
    total = total + total * 18/100;
    console.log("The final price is: " + total);
    return total;
}

idk(2);

//using function expression

let greetExp = function(obj){
    let  total = 500 * obj;
    if(obj >= 10){
        total = total - total * 10/100;
    }
    total = total + total * 18/100;
    return total;
}
console.log(greetExp(2));


//using arrow function

let greetArr = (obj) => {
    let  total = 500 * obj;
    if(obj >= 10){
        total = total - total * 10/100;
    }
    total = total + total * 18/100;
    return total;
}
console.log(greetArr(3));

//using IIFE

(function(obj){
    let  total = 500 * obj;
    if(obj >= 10){
        total = total - total * 10/100;
    }
    total = total + total * 18/100;
    console.log("The final price using IIFE is: " + total);
})(4);
