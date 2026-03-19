import React from 'react'

const ArrayMethod = () => {


    function map(arry,funct){
        let newArray = []
        for(let i = 0;i<arry.length;i++){
            let ch = funct(arry[i]);
            newArray.push(ch);
        }
        return newArray;
    }

    const double = (num) =>{
        return num*2;
    }
    console.log(map([1,2,3],double));



    function filter(arry,funct){
        let newArray = []
        for(let i = 0;i<arry.length;i++){
            if(funct(arry[i])){
                newArray.push(arry[i]);
            }
        }
        return newArray;
    }



        






  return (
   <>
   </>
  )
}

export default ArrayMethod
