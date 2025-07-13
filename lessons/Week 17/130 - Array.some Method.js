/*
    Array Methods
        - Array.some(CallbackFunc(Element, Index, Array), This Argument)
            --- CallbackFunc => Function To Run On Every Element On The Given Array
                ------ Element => The Current Element To Process
                ------ Index => Index Of Current Element
                ------ Array => The Current Array Working With
            --- This Argument => Value To Use As This When Executing CallbackFunc

            Usage
                - Check if Element Exists In Array
                - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myNumber = 10;

// let check = nums.some((ele) => {
//   console.log('Test');
//   return ele > 5;
// });

let checkOne = nums.some(function () {
  // console.log(this);
  return this > 5;
}, myNumber);

console.log(checkOne);

// NOTE: Arrow Function ( * - * )
// let check = nums.some((ele) => ele > 5);

function checkValues(arr, value) {
  return arr.some(function (ele) {
    ele === value;
  });
}

console.log(checkValues(nums, 5));

/* ---------------------------- */

// NOTE: Check Range

let range = {
  min: 10,
  max: 20,
};

// NOTE: Very Important NOTE
// FIXME: The Arrow function is not good at this Argument

let checkRange = nums.some(function (ele) {
  // NOTE: Min value && Max Value
  // console.log(this.min);
  // console.log(this.max);
  return ele >= this.min && ele <= this.max;
}, range);

console.log(checkRange);
