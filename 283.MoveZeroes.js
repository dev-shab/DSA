const moveZeroes = (nums) => {
  let i = 0;
  for (const num of nums) {
    if (num) nums[i++] = num;
  }
  while (i < nums.length) {
    nums[i++] = 0;
  }
};
