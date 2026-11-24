const reverse = (num) => {
  const isNegative = num < 0;
  num = Math.abs(num);
  let reverse = 0;
  while (num) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (reverse >= 2 ** 31) return 0;
  return isNegative ? -reverse : reverse;
};
