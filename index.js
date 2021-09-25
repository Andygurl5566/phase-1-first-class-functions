
//1
let random = function(){return "Spy"}

function receivesAFunction(callback){
    return callback()
}

//2
function returnsANamedFunction(){
    let namedFunction = function howdy(){
      return "Hey!"
    }
  
    return namedFunction
  }
  
  returnsANamedFunction()

  //3

  function returnsAnAnonymousFunction(){
    return function(){
     return "Hey!" }
 }
 
 returnsAnAnonymousFunction()