const isPowerOfTwo = (n) => {
  if (n === 1) return true;
  if (n % 2 || n <= 0) return false;
  return isPowerOfTwo(n / 2);
};
