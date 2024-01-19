function findFloor(arr, val) {
  let low = 0;
  let high = arr.length - 1;
  let flooredVal = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    // exact match is same as floor of val
    if (arr[mid] === val) {
      return arr[mid];
    // check if mid is smaller shift to check right
    } else if (arr[mid] < val) {
      flooredVal = arr[mid];
      low = mid + 1;
    // if mid is larger then check left side
    } else {
      high = mid - 1;
    }
  }
  return flooredVal;
}

module.exports = findFloor