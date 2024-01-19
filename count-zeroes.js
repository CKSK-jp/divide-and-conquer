function countZeroes(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] === 1) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    zeroArr = arr.splice(low)
    return zeroArr.length;
}

module.exports = countZeroes;