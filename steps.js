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
   while (i <= n) {
      console.log(pound.repeat(i) + space.repeat(n - i));
      i++;
   }
}

//OR......

function steps2(n) {
   for (let row = 0; row < n; row++) {
      //nested loop so columns grow faster than rows.
      let stair = "";
      for (let col = 0; col < n; col++) {
         if (col <= row) {
            stair = stair + "#";
         } else {
            stair = stair + " ";
         }
      }
      console.log(stair);
   }
}

//recursive way
function steps3(n, row = 0, level = "") {
   if (row === n) return; // base case
 
   if (level.length === n) { // level built, recurse to next row/level with ""
      console.log(level);
      return steps(n, row + 1);
   }

   if (level.length <= row) {  // recursively building level/row
      level += "#";
   } else {
      level += " ";
   }
   steps(n, row, level)
}

steps3(5);
