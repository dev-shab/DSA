const maxProfit = (prices) => {
  let max = 0;
  let minPrice = Infinity;
  for (const price of prices) {
    if (price < minPrice) minPrice = price;
    else {
      const profit = price - minPrice;
      if (profit > max) max = profit;
    }
  }
  return max;
};
