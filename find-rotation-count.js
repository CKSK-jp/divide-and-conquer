function findRotationCount(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // sorted
    if (arr[start] <= arr[end]) {
      return start;
    }

    let mid = Math.floor((start + end) / 2);
    // find if the inflextion is between two points
    if (arr[mid] <= arr[mid + 1] && arr[mid] <= arr[mid - 1]) {
      return mid
    }

    // if the inflextion is on the right side
    if (arr[mid] >= arr[start]) {
      start = mid + 1;
    // if the inflextion is on the left side
    } else if (arr[mid] <= arr[end]) {
      end = mid - 1;
    }
  }
  return -1;
}

module.exports = findRotationCount