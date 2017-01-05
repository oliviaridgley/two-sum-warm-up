"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7];
var target = 13;

function twoSum(arr, target) {
  var answerIndices = [];
  arr.map(function(iterator, index) {
    if (iterator + arr[index + 1] === target) {
      answerIndices = [index, (index + 1)];
    }
  });
  if (answerIndices.length !== 2) {
    return "No numbers in array can be summed to equal that target";
  } else {
    return answerIndices;
  }
}

twoSum(arr, target);

module.exports = twoSum;
