const numbers = [2, 4, 5, 6, 7, 8, 9, 13, 27, 51];
let value = 27;


function findValue(arr, value) {
    let startIndex = 0;
    let endIndex = arr.length-1;
 
  while (startIndex <= endIndex) {
    midPoint = Math.floor((endIndex + startIndex) / 2);

    if (arr[midPoint] == value) {
      return  "The number is present at the index :" + midPoint;
    } else if (arr[midPoint] > value) {
      endIndex = midPoint - 1;
    }else if (arr[midPoint]< value) {
        startIndex = midPoint + 1;
    } 
  } return "The number you search does not exist";
}


console.log(findValue(numbers, value));
