//function declaration

  //using arguments
function greet(a) {
    let v = arguments.length;
    for (let i = 0; i < v; i++) {
        console.log("hello " + arguments[i]);
    }
}
greet("shubham","kash"); //calling the function

function noArgs(){
    let v = arguments.length;
    console.log("number of arguments : " + v);
}

noArgs("shubham","kash","hello","world op");


//using rest operator 

function sprArgs(...args){
    console.log(args);
}
sprArgs("shubham","kash","hello","world op");
