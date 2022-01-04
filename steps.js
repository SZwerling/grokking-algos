//write a function making 'steps shape' with # with N levels
//shape must have spaces on right-hand side
//steps(4)
//'#   '
//'##  '
//'### '
//'####'

function steps(n) {
   if (n < 1) return null;
   let i = 1;
   let space = " ";
   let pound = "#";
   let times = n - 1;  
   while (i <= n) { 
      console.log(pound.repeat(i) + space.repeat(times));  
      i++;                                                 
      times--;
   }
}

//OR......

function steps2(n) {
   
   for (let row = 0; row < n; row++) {
    let stair = "";
      for (let col = 0; col < n; col++) {
         if (col <= row) {
            stair = stair + "#";
         } else {
            stair = stair + " ";
         } 
      } //we've now constructed one level (row)
      console.log(stair)  //then we print a row
   } //here we reset stair to add another row
}

//recursive way
function steps3(n, row = 0, stair = ''){
    if(n === row) return;
    if(n === stair.length){
        console.log(stair);
        return steps2(n, row ++)
    };

    if(stair.length <= row){
        stair += '#'
    } else {
        stair += ' '
    }

    steps(n, row, stair)

}

//steps(3);
steps2(4);
//steps(4)