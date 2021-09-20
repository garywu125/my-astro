// closure allow function access outer scope value
let laugh="哈哈"
export function myClosure() {
    let outerVar = 'closure:I am outside!';
  
    function innerFunc() {
      console.log(outerVar); // => logs "I am outside!"
      return laugh+outerVar
    }
  
    return innerFunc;
  }