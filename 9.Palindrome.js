const isPalindrome = (num) => {
  if (num < 0) return false;
  const original = num;
  let reverse = 0;
  while (num) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return original === reverse;
};
