/*
DESCRIPTION:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

//  MY SOLUTION
function moveZeros(arr) {
  return [...arr.filter((num) => num !== 0), ...arr.filter((num) => num === 0)];
}

//  FOR FUN - If ANY number contains a 0 then make move that zero to back as well.
function moveZeros(arr) {
  let nonZeros = [];
  let zeros = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else if (arr[i].toString().includes("0")) {
      nonZeros.push(arr[i]);
    } else {
      nonZeros.push(arr[i]);
    }
  }
  return nonZeros.concat(zeros).map((char) => parseInt(char));
}
