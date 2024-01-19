function findRotatedIndex(arr, val) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] === val) {
      return mid;
    }
    
    // check if val is in left side
    if (arr[low] <= val && val < arr[mid]) {
      high = mid - 1;
    // check if val is in right side
    } else if (arr[high] >= val) {
      low = mid + 1;
    // if number is outside left and right limits
    } else {
      return -1;
    }
  }
  return -1;
}

module.exports = findRotatedIndex