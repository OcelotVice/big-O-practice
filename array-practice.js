const findMinimum = arr => {

  // Your code here
  //O(n);
  let min = arr[0];
  arr.forEach((ele) => {
    if (ele < min) {min = ele}
  })
  return min;

};

const runningSum = arr => {
  let adder = 0;
  let new_arr = [];
  //O(n);
  arr.forEach((ele) => {
    let new_ele = adder + ele;
    new_arr.push(new_ele);
    adder += ele;
  })
  return new_arr;

};

const evenNumOfChars = arr => {

  // Your code here
  //O(n);
  let even = arr.filter((ele) => {
    return ((ele.length % 2) == 0);
  })
  return even.length;
};

const smallerThanCurr = arr => {

  // Your code here
  let smallers = [];
  //O(n * n);
  arr.forEach(num => {
    let counter = 0;
    arr.forEach(num2 => {
      if (num > num2) counter++;
    })
    smallers.push(counter);
  })
  return smallers;
};

const twoSum = (arr, target) => {

  // Your code here
  //
  for ( let i = 0; i < arr.length; i++) {
    let num = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        let num2 = arr[j];
        let sum = num + num2;
        if (sum === target) return true;
      }
    }
  }
  return false;
};

const secondLargest = arr => {
  if (arr.length < 2) return undefined;
  // Your code here
  //O(n);
  let max = Math.max(...arr);
  let second = 0;
  arr.forEach(num => {
    if (num !== max) {
      if (num > second) {
        second = num;
      }
    }
  })
  if (second === 0) return max;
  return second;


};

const shuffle = (arr) => {

  // Your code here
  //O(n)
  let new_arr = [];
  let indexes = [];

  while (new_arr.length < arr.length) {
    let min = Math.ceil(0);
    let max = Math.floor(arr.length);
    let rand_i = Math.floor(Math.random() * (max - min) + min);
    if (indexes.includes(rand_i) === false) {
      let rand_ele = arr[rand_i];
      new_arr.push(rand_ele);
      indexes.push(rand_i);
    }
  }

  return new_arr;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
