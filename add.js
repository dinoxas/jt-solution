export const add = (...nums) => {
  return nums.reduce((a, b) => {
    return a + b;
  });
};
