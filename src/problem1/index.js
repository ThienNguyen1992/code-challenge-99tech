var sum_to_n_a = function (n) {
  if (n <= 0) return 0;

  return (n * (n + 1)) / 2;
};

var sum_to_n_b = function (n) {
  if (n <= 0) return 0;

  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
};

var sum_to_n_c = function (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return sum_to_n_c(n - 1) + n;
};
