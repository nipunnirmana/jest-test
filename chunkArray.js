const chunkArray = (arr, len) => {
  var chunkedArray = [];
  var chunks = arr.length / len < 1 ? len : Math.floor(arr.length / len);
  for (var i = 0; i <= chunks; i++) {
    chunkedArray.push(arr.splice(0, chunks));
    if (chunks == len) {
      break;
    }
  }
  return chunkedArray;
};

console.log(chunkArray([1, 2, 3], 3));

module.exports = chunkArray;
