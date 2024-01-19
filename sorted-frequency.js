function sortedFrequency(arr, val) {
  const startIndex = getStartIndex(arr, val);
  const endIndex = getEndIndex(arr, val);

  let count = -1;
  count = (startIndex === -1 || endIndex === -1) ? count : endIndex - startIndex + 1;
  return count;
}

function getStartIndex(arr, val) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === val) {
      result = mid;
      high = mid - 1;
    } else if (arr[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

function getEndIndex(arr, val) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === val) {
      result = mid;
      low = mid + 1;
    } else if (arr[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}


module.exports = sortedFrequency