import data from "./data.json";

const alcoholClasses = [];
// seprate data on basis of alcohol
export const alcoholData = Object.values(
  data.products.reduce((acc, cur) => {
    const { Alcohol } = cur;
    if (!acc[Alcohol]) {
      acc[Alcohol] = [];
      alcoholClasses.push(Alcohol);
    }
    acc[Alcohol].push(cur);
    return acc;
  }, {})
);

export { alcoholClasses };

// Array travarsal
const flavanoidsByAlcoholClass = [];
export const gammaTypeOfAlcohol = [];
for (let i = 0; i < alcoholData.length; i++) {
  const alcoholDataSet = alcoholData[i];
  const AlcoholFlavanoids = [];
  const AlcoholGamma = [];
  alcoholDataSet.forEach((item) => {
    AlcoholFlavanoids.push(item.Flavanoids);
    let Gamma = (item.Ash * item.Hue) / item.Magnesium;
    AlcoholGamma.push(Gamma);
  });
  flavanoidsByAlcoholClass.push(AlcoholFlavanoids);
  gammaTypeOfAlcohol.push(AlcoholGamma);
}

export { flavanoidsByAlcoholClass };

// utility method to calculate Mean
export const calculateMean = (item) => {
  const sum = item.reduce((acc, cur) => acc + cur);
  const mean = sum / item.length;
  return mean.toFixed(3);
};

// utility method to calculate Median
export const calculateMedian = (item) => {
  const sorted = item.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(3)
    : sorted[mid].toFixed(3);
};

// utility method to calculate Mode
export const calculateMode = (item) => {
  let mode = 0;
  let maxCount = 0;
  for (let i = 0; i < item.length; i++) {
    const count = item.filter((value) => value === item[i]).length;
    if (count > maxCount) {
      mode = item[i];
      maxCount = count;
    }
  }
  return mode.toFixed(3);
};
