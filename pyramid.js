//function that accepts a positive number. Should console log pyramid shape
//w N levels using '#'
//pyramid(3)   '   #   '
//             '  ###  '
//             ' ##### '
//             '#######'
//1/1, 2/3, 3/5, 4/7

function pyramid(n) {
   let width = n * 2 - 1;
   let midpoint = Math.floor(width / 2);
   for (let row = 0; row < n; row++) {
      let level = "";
      for (let column = 0; column < width; column++) {
         if (midpoint - row <= column && midpoint + row >= column) {
            level = level + "#";
         } else {
            level = level + " ";
         }
      }
      console.log(level)
   }
}

//(pyramid(3));


function piramid(n){
   let width = (n * 2) - 1
   let mid = Math.floor(width/2)
   for(let row = 0; row < n; row++){
      let level = ""
      for(let col = 0; col < width; col++){
         if(col >= mid - row && col <= mid + row){
            level += "#"
         } else {
            level += "-"
         }
      }
     console.log(level)
   }  
}


console.log(piramid(5))
