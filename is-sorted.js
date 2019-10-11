function isSorted(arr){
  // copy array to new variable, not reference
  const arrSorted = arr.slice();
  if ( arr.length === 0 ){
    return true;
  }
  return (arrSorted.join(' ') === arr.sort().join(' '));
}

const arr1 = []; //return true
const arr2 = [1, 2, 3, 4, 5]; //return true;
const arr3 = [-3, 10, 1, 9]; //return false;
console.log( isSorted(arr2) );