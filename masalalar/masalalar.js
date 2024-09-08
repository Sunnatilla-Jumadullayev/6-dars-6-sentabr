// 1 - masala
{
  // Convert a Number to a String!
  console.log("1 - masala");
  function numberToString(num) {
    return String(num);
    // Return a string of the number here!
  }
  console.log(numberToString(56));
}
// 2 -masala
{
  console.log(`2-masala`);
  // oppasite number

  function opposite(number) {
    return -number;
  }
  console.log(opposite(-7));
}
//3-masala
{
  console.log(` 3 - masala`);

  // Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

  function boolToWord(bool) {
    //...
    if (bool === true) return "Yes";
    else return "No";
  }
  console.log(boolToWord(false));
}
// 4 - ,asala
{
  console.log(`4 - masala`);
  let number = [1, 2, 3, 4, -4, 5, -100];
  // Arraydagi musbat sonlar yigindisini qaytarish
  function positiveSum(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element > 0) num += element;
    }
    return console.log(num);
  }
  positiveSum(number);
}
// 5 - masala
{
  //
  console.log(`5 - masala`);

  function XO(str) {
    //code here
    array = str.toLowerCase().split("");
    let x = 0;
    let o = 0;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element === "x") {
        x += 1;
      } else if (element === "o") {
        o += 1;
      }
    }
    if (x === o) {
      return true;
    } else {
      return false;
    }
  }

  console.log(XO(`dghddggdgdgd`));
  let str = "asdfgh";
  console.log(str.split(""));
}
// 6 masala
{
  console.log(`6 - masala`);

  // Write a function "greet" that returns "hello world!"
  function greet() {
    return "hello world!";
  }
}
// 7  - masala
{
  console.log("7 - masala");
  // Given an array of integers your solution should find the smallest integer.
  function findSmallestInt(arr) {
    let kichkina = arr[0];
    //your code here
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (kichkina > element) {
        kichkina = element;
      }
    }
    return kichkina;
  }
  arr = [4, 6, , -4, 8, 4, 1];
  console.log(findSmallestInt(arr));
}
// 8 - masala
{
  const stringToNumber = function (str) {
    // put your code here
    return +str;
  };
}
// 9- masala
{
  // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
  function filter_list(l) {
    // Return a new array with the strings filtered out
    newArr = [];
    for (let i = 0; i < l.length; i++) {
      const element = l[i];
      if (+element === NaN) {
      } else newArr.push(element);
    }
    return newArr;
  }
  filter_list;
}
// 10 - masala
{
  //  Complete the square sum function so that it squares each number passed into it and then sums the results together.
  function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      const element = numbers[i];
      sum += element ** 2;
    }
    return sum;
  }
  let son = [2, 3, 4];
  console.log(squareSum(son));
}
