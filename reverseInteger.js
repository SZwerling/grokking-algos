function reverseInteger(integ) {
   let sign = Math.sign(integ);  //so we can keep neg nums neg and pos nums pos
   return parseInt(integ.toString().split("").reverse().join("")) * sign;
}

console.log(reverseInteger(-21));

function reverseInteger2(integ) {
   let x = Math.sign(integ);
   let reversed = "";
   let asString = integ.toString();
   for (const el of asString) {
      reversed = el + reversed;
   }
   return parseInt(reversed) * x;
}

console.log(reverseInteger2(-90));
