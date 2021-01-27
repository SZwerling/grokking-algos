//binary search is log2n steps or 2 multiplied by 2 how many times to reach n.
//start index
//middle index
//end index
//if target greater, move start index to middle index
//if target is smaller, move end index to middle index

const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if(target === array[middleIndex]) {
        return console.log("Target was found at index " + middleIndex);
      }
      if(target > array[middleIndex]) {
        console.log("Searching the right side of Array")
        startIndex = middleIndex + 1;
      }
      if(target < array[middleIndex]) {
        console.log("Searching the left side of array")
        endIndex = middleIndex - 1;
      }
      else {
        console.log("Not Found this loop iteration. Looping another iteration.")
      }
    }
    
    console.log("Target value not found in array");
  }

  arrt = [1, 2, 3, 4, 7, 9, 10, 14, 16, 22, 34]
  binarySearch(arrt, 34)

