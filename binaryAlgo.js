//binary search is log2n steps or 2 multiplied by 2 how many times to reach n
// ?? above
//also called divide and conquer
//start index
//middle index
//end index
//if target greater, move start index to middle index
//if target is smaller, move end index to middle index

//Binary Search pseudocode
// function accepts a sorted array and a value
// create left pointer [0] and a right pointer [.length - 1]
// while left is less than right, check middle compared to value
// if middle is too small, move left to middle // too big, move right to middle
// it is log(n), which is better than linear O(n), almost as good as constant O(1)

const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;
    console.log(`Searching ${startIndex} through ${endIndex}`)
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      
      if(target === array[middleIndex]) {
        return console.log("Target was found at index " + middleIndex);
      }
      if(target > array[middleIndex]) {
        
        startIndex = middleIndex + 1;
        console.log(`Searching ${startIndex} through ${endIndex}`)
      }
      if(target < array[middleIndex]) {
        
        endIndex = middleIndex - 1;
        console.log(`Searching ${startIndex} through ${endIndex}`)
      }
      
    }
    
    console.log("Target value not found in array");
  }

  arrt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  // binarySearch(arrt, 11)

  const bSearch = function (arr, value) {
    let left = 0
    let right = arr.length - 1
    while(left <= right){
      let middle = Math.floor((left + right) / 2)
      if(arr[middle] === value) return middle;
      else if(arr[middle] < value) left = middle + 1;
      else right = middle - 1;
    }
    return -1; //or null or whatever is asked for if value not found
  }

 console.log(bSearch(["Adam", "Bob", "Clinton", "Dale", "Erin", "Frank", "Gary"], "Alain"))

