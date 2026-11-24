const missingNumber = (nums) =>
  (nums.length * (nums.length + 1)) / 2 -
  nums.reduce((acc, num) => acc + num, 0);
