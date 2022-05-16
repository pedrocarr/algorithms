// Function that will return the numbers of pairs in the array
function sockMerchant(n, arr) { // parameters

  const sortedArr = arr.sort(); // sorting the array will help to check the pairs
  let currentPosition = 0; // to save the current position of each item in te array
  let nextPosition = 0; // to save the next position of each item in te array
  let counter = 0; //  this counter will be incremented by 1 in every pair

  // To go through every array position
  for(let i = 0; i < n - 1 ; i++) { // check that here we are using the "n" parameter instead of array.length (also could work) but use "n"
      currentPosition = sortedArr[i]; // holding the current position
      nextPosition = sortedArr[i+1]; // holding the next position
      
      // if current position and next positions are the same then this is a pair of "socks"
      if (currentPosition === nextPosition) {
          counter++; // increment the counter because is a pair
          i++; // increment the counter that handler the positions in the array
      }
  }

  return counter;
}