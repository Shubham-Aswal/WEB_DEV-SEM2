let cart = ["sugar", "salt", "rice", "wheat", "oil"];

let promise =  createorder(cart);
promise.then(function(orderId){
    console.log("Order created with Id: "+ orderId);
}).catch(function(err){
    console.log("Error occured: "+ err.message);
});


function createorder(cart){

    let pr = new Promise(function(resolve, reject){

        if(!validatecart(cart)){
            let err = new Error("Cart is not valid");
            reject(err);
        }

        //order creation logic
        let orderId = "12345";
        if(validatecart(cart)){
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    });

    return pr;
}

function validatecart(cart){
    return ;
}