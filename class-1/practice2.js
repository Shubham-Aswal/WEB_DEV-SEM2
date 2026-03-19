let x =10;
function outer(){
    x = 20;
    function inner(){
        console.log(x);
    }
}
inner();
