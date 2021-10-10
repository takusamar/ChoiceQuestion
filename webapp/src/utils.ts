export const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const shuffle = ([...array]: any[]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = getRandom(0, i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
