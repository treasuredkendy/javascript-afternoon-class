function removeDuplicates(nums) {
    return nums.filter((num, index, arr) => arr.indexOf(num) === index);
  }
  
  // Example usage
  const nums = [1, 1, 2, 3, 3, 4];
  const uniqueNums = removeDuplicates(nums);
  console.log(uniqueNums); // Output: [1, 2, 3, 4]
  