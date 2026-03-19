/****************************************************
 * PROMISES PRACTICE WORKSHEET
 * --------------------------------------------------
 * Online Food Delivery App
 *
 * You are building an online food delivery app.
 * Every operation (server call) takes time.
 * JavaScript does NOT wait, so we use PROMISES.
 *
 * DO NOT use async / await.
 * Use only Promise, then, catch.
 ****************************************************/


/* ==================================================
   TASK 1
   ==================================================

   
   When the user opens the app, we must check
   if the restaurant is open.

   This check:
   - Takes time (API call)
   - Cannot block the app
   - Returns a PROMISE for future result
*/

let isOpen = true;

/*
 TODO:
 1. Create a function checkRestaurantStatus()
 2. Return a Promise
 3. After 1 second:
    - resolve "Restaurant is Open" if isOpen === true
    - reject "Restaurant is Closed" otherwise
*/

function checkRestaurantStatus(isOpen) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (isOpen === true) {
        resolve("Restaurant is Open");
      } else {
        reject("Restaurant is Closed");
      }
    }, 1000);
  });
}



/* ==================================================
   TASK 2
   ==================================================

   
   If the restaurant is open:
   1. Fetch Menu
   2. Place Order
   3. Assign Delivery Partner

   Each step depends on the previous step.
*/

/*
 TODO:
 getMenu()
 - return Promise
 - resolve ["Burger", "Pizza"]
*/
function getMenu() {
  // WRITE YOUR CODE HERE
  let promise = new Promise(function(resolve,reject){

    resolve(["Burger","Pizza"]);
  });
  return promise;
}

/*
 TODO:
 placeOrder(menu)
 - return Promise
 - resolve "Order Placed"
*/
function placeOrder(menu) {
  // WRITE YOUR CODE HERE
  let promise = new Promise(function(resolve,reject){
    resolve("Order Placed");
  });
  return promise;

}

/*
 TODO:
 assignDelivery(orderStatus)
 - return Promise
 - resolve "Delivery Partner Assigned"
*/
function assignDelivery(orderStatus) {
  // WRITE YOUR CODE HERE
  let promise = new Promise(function(resolve,reject){

    resolve("Delivery Partner Assigned");
  });
  return promise;
}


/* ==================================================
   TASK 3
   ==================================================
   Run the complete flow in correct order.

   EXPECTED FLOW:
   Restaurant is Open
   Menu fetched
   Order Placed
   Delivery Partner Assigned
*/

/*
 TODO:
 1. Chain all functions
 2. Print output at each step
 3. Handle errors at the end
*/

// WRITE YOUR CODE HERE
checkRestaurantStatus(isOpen).then(status => {console.log(status); 
  return getMenu();
}).then(menu =>{
  console.log("order items :",menu);
  return placeOrder(menu);
}).then(confirmation =>{
  console.log(confirmation);
  return assignDelivery(confirmation);
}).then(delivery =>{
  console.log(delivery);
}).catch(error =>{
  console.error("error : ",error);
})





/* ==================================================
   TASK 4
   ==================================================

   
   Payment may fail due to insufficient balance.
*/

/*
 TODO:
 makePayment(amount)
 - return Promise
 - resolve "Payment Successful" if amount <= 500
 - reject "Payment Failed" if amount > 500
*/

function makePayment(amount) {
  // WRITE YOUR CODE HERE
  let pr = new Promise(function(resolve,reject){

    if(amount >= 500){
      resolve("Payment Successful");
    }
    else{
      reject("Payment Failed");
    }


  });
  return pr;
}


/* ==================================================
   TASK 5
   ==================================================

   
   If payment fails, delivery should NOT be assigned.
*/

checkRestaurantStatus(isOpen)
  .then(() => getMenu())
  .then(menu => placeOrder(menu))
  .then(() => makePayment(600))
  .then(payment => assignDelivery(payment))
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error));
  


/* ==================================================
   TASK 6
   ==================================================

   
   If payment fails, user selects
   "Cash on Delivery" and continues.
*/

/*
 TODO:
 1. Catch payment error
 2. Recover with "Cash on Delivery Selected"
 3. Continue delivery assignment
*/

  // WRITE YOUR CODE HERE
checkRestaurantStatus(isOpen)
  .then(() => getMenu())
  .then(menu => placeOrder(menu))
  .then(() => makePayment(600))
  .then(payment => assignDelivery(payment))
  .then(amount =>makePayment(amount))
  .catch(error =>{
    console.log("Error : ",error);
    return "cash on delivery (COD)";
  })
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error));
  






/* ==================================================
   REFLECTION QUESTIONS (WRITE ANSWERS)
   ==================================================

 1. Why must every .then() return something?
 2. What happens if you forget to return a Promise?
 3. Why does .catch() handle errors from any step?
 4. How does this approach avoid callback hell?

 =================================================== */