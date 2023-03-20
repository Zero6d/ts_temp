import dayjs from 'dayjs';

export const formatPrice = (price: string) => {
  if (!price) {
    return '0';
  } else {
    const round = Math.round(parseFloat(price));
    return round.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

export const formatDate = (date: Date, regex?: any) => {
  return dayjs(date).format(regex ? regex : 'DD/MM/YYYY');
};

export const replaceString = (
  oldS: string,
  newS: string,
  fullS: string,
  n: number,
) => {
  let count = 0;
  for (let i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      count += 1;
      if (count === n) {
        fullS =
          fullS.substring(0, i) +
          newS +
          fullS.substring(i + oldS.length, fullS.length);
      }
    }
  }
  return fullS;
};
