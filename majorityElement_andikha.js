
/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
  const majorityNumber = {};

  nums.forEach((number) => {
    if (!majorityNumber[number]){
      majorityNumber[number]= 0;
    }
    majorityNumber[number]++
  })

  const arr = Object.entries(majorityNumber);
  let maxElement = arr[0];

  for (i=0; i<arr.length; i++){
    if (arr[i][1] > maxElement[1]){
      maxElement = arr[i];
    }
  }
  
  return maxElement[0];

  
}

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 