export const getDate = (daysAgo: number) => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString();
};

export const getRandomInteger = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);
