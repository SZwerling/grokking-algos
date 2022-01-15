// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either 
// of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. 
// So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), 
// you must complete one operation at a time. 
// Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

//using arguments object.


const a = [1, 2, 3]
const b = [4, 5, 1]

const sym1 = function(){
    const args = [...arguments];

    const symDiff = function(arr1, arr2){
        let result = [];
        arr1.forEach((item) => {
            if(result.indexOf(item) < 0 && arr2.indexOf(item) < 0) {
                result.push(item)
            }
        });

        arr2.forEach((item) => {
            if(result.indexOf(item) < 0 && arr1.indexOf(item) < 0){
                result.push(item)
            }
        });
        return result
    }

    return args.reduce(symDiff)
    
}

function sym2() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  function symDiff(arrayOne, arrayTwo) {
    var result = [];

    arrayOne.forEach(function(item) {
      if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    arrayTwo.forEach(function(item) {
      if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    return result;
  }

  // Apply reduce method to args array, using the symDiff function
  return args.reduce(symDiff);
}

function sym3() {
  // Convert the argument object into a proper array
  var args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  var getDiff = function(arr1, arr2) {
    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the other
    return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
  };

  // Reduce all arguments getting the difference of them
  var summary = args.reduce(getDiff, []);

  // Run filter function to get the unique values
  var unique = summary.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
  return unique;
}



console.log(sym1([1, 2, 5], [2, 3, 5], [3, 4, 5]))
