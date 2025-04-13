export const calcList = (productWidth, productLength, listWidth, priceList) => {
  const listLength = 1;

  const productArea = productWidth * productLength;
  const listArea = listWidth * listLength;

  const listCount = Math.ceil(productArea / listArea);
  const listSum = listCount * priceList;

  return { quantity: listCount, sum: listSum };
};

const calculateTubeLength = (
  productWidth,
  productLength,
  pipeWidthMm,
  maxDistanceBetweenPipes
) => {
  const pipeWidthMeters = pipeWidthMm / 1000; // Конвертация мм в метры
  const effectiveDistance = maxDistanceBetweenPipes - pipeWidthMeters; // Эффективное расстояние между трубами

  // Определяем количество труб по ширине и длине
  const numberOfTubesWidth = Math.ceil(
    (productWidth + pipeWidthMeters) / effectiveDistance
  );
  const numberOfTubesLength = Math.ceil(
    (productLength + pipeWidthMeters) / effectiveDistance
  );

  // Общая длина трубы: труб по ширине и длине на соответствующую длину
  const totalLength =
    numberOfTubesWidth * productLength + numberOfTubesLength * productWidth;

  return totalLength;
};

export const calcPipe = (
  productWidth,
  productLength,
  pipeWidthMm,
  maxDistanceBetweenPipes,
  pricePipe
) => {
  const totalTubeLength = calculateTubeLength(
    productWidth,
    productLength,
    pipeWidthMm,
    maxDistanceBetweenPipes
  );

  const pipeCount = Math.round(totalTubeLength);

  const pipeSum = pipeCount * pricePipe;

  return { quantity: pipeCount, sum: Math.round(pipeSum) };
};

export const calculateScrewsNeeded = (
  productWidth,
  productLength,
  screwsPerSqMeter,
  priseScrews
) => {
  const productArea = productWidth * productLength; // Общая площадь в квадратных метрах
  const productScrews = Math.ceil(productArea * screwsPerSqMeter); // Количество саморезов
  const screwsSum = (productScrews * priseScrews).toFixed(2);

  return { quantity: productScrews, sum: screwsSum };
};
