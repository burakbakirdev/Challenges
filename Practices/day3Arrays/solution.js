function getSecondLargest(nums) {
  // Complete the function
  nums.sort((x, y) => x - y);
  let counter = 2;
  while (nums[nums.length - counter + 1] === nums[nums.length - counter]) {
    ++counter;
  }
  return nums[nums.length - counter];
}
