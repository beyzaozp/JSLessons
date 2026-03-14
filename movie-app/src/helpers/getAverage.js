const getAverage = (array) =>
  array.reduce((sum, value) => sum + value / array.length, 0);

export default getAverage;