module.exports = {
  minValue: (arr) => Math.min(...arr),

  maxValue: (arr) => Math.max(...arr),

  averageValue: (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length,

  firstNElement: (arr, n) => arr.slice(0, n),

  lastNElements: (arr, n) => arr.slice(-n),

  reverseArray: (arr) => arr.slice().reverse(),

  removeAtIndex: (arr, index) =>
    index > -1 ? (arr.splice(index, 1), arr) : arr,

  insertAtIndex: (arr, index, value) => {
    arr.splice(index, 0, value);
    return arr;
  },

  sumArray: (arr) => arr.reduce((acc, val) => acc + val, 0),

  shuffleArray: (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  },

  mapWithIndex: (arr, callback) => {
    arr.map((val, index) => {
      callback(val, index);
    });
  },

  countOccurrences: (arr) => {
    return arr.reduce(
      (acc, val) => ({ ...acc, [val]: (acc[val] || 0) + 1 }),
      {}
    );
  },
};
