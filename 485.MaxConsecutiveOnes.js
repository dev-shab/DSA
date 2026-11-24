const findMaxConsecutiveOnes = (nums) => {
  let count = 0;
  let maxCount = 0;
  for (const num of nums) {
    if (num) count++;
    else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }
  return Math.max(count, maxCount);
};
