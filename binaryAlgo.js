//binary search is log2n steps or 2 multiplied by 2 how many times to reach n.
//start index
//middle index
//end index
//if target greater, move start index to middle index
//if target is smaller, move end index to middle index

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
  binarySearch(arrt, 4)

