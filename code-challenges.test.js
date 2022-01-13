// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { array } = require("prop-types");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("arrayMixUpColors", () => {
  it("returns an array with the first index removed and the other values within the array mixed up", () => {
    var colors1 = ["purple", "blue", "green", "yellow", "pink"];
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    var colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron",
    ];
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    // Use expect method to take in variable and use expect.arrayContaining() for test
    expect(arrayMixUpColors(colors1)).toEqual(
      // I kept getting the
      expect.arrayContaining(["yellow", "blue", "pink", "green"])
    ),
      expect(arrayMixUpColors(colors2)).toEqual(
        expect.arrayContaining([
          "saffron",
          "aquamarine",
          "periwinkle",
          "indigo",
          "ochre",
        ])
      );
  });
});
// Red - Failed (not defined)

// b) Create the function that makes the test pass.
// Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// Use .shift(), to remove the first item from the array
const arrayMixUpColors = (array) => {
  array.shift();
  // Use .sort(), to sort the items within the array in ascending order
  let newArr = array.sort((a, b) => a.sort - b.sort);
  // Iterate over array using .map()
  array.map(({ value }) => value);
  return newArr;
};
// Green - Passed

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minNMax", () => {
  it("takes an array of numbers and returns an array of number, then returns an array of the minimum and maximum numbers in that order", () => {
    var nums1 = [3, 56, 90, -8, 0, 23, 6];
    // Expected output: [-8, 90]
    var nums2 = [109, 5, 9, 67, 8, 24];
    // Expected output: [5, 109]

    expect(minNMax(nums1)).toEqual([-8, 90]);
    expect(minNMax(nums2)).toEqual([5, 109]);
  });
});
// Red - Failed (not defined)

// b) Create the function that makes the test pass.
// Use Math.min() to get the smallest number and Math.max to get the largest number.
// Place both numbers into an array.

const minNMax = (array) => {
  return [Math.min(...array), Math.max(...array)];
};
// Green - Passed

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("allNumsNoRepeats", () => {
  it("Create a function that takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    var arrayOne = [3, 7, 10, 5, 4, 3, 3];
    var arrayTwo = [7, 8, 2, 3, 1, 5, 4];
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

    expect(allNumsNoRepeats(arrayOne, arrayTwo)).toEqual([
      3, 7, 10, 5, 4, 8, 2, 1,
    ]);
  });
});
// Red - Failed (not defined)

// b) Create the function that makes the test pass.
// Use tool new Set to iterate over set then give use value one time without repition.
// Use .concat() on both arrays to return a shallow copy of the original elements combined from the original arrays.

const allNumsNoRepeats = (arrayOne, arrayTwo) => {
  let concatArray = arrayOne.concat(arrayTwo);
  let newArray = [...new Set(concatArray)];
  return newArray;
};
// Green - Passed
