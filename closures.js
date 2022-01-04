function outer() {
    var b = 10;
    function inner() {
         
          var a = 20; 
          console.log(a+b);
     }
    return inner;

 }
 var one = outer(); //outer() invoked the first time
 var two = outer(); //outer() invoked the second time


 //further exampl
 function outer() {
    var b = 10;
    var c = 100;
       function inner() {
            
             var a = 20; 
             console.log("a= " + a + " b= " + b);
             a++;
             b++;
        }
       return inner;
    }
    var X = outer();  // outer() invoked the first time
    var Y = outer();  // outer() invoked the second time
    //end of outer() function executions
    console.log(X()); // X() invoked the first time  // a= 20 b= 10
    console.log(X()); // X() invoked the second time // a= 20 b= 11
    console.log(X()); // X() invoked the third time  // a=20  b= 12
    console.log(Y()); // Y() invoked the first time  // a=20  b= 10