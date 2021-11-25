const THOUSAND = 1_000;
const MILLION = 1_000_000;
const BILLION = 1_000_000_000;

export const getShortNumber = (value = 0, fractionDigits = 0): string => {
  const absValue = Math.abs(value);

  if (absValue >= BILLION) {
    return `${(value / BILLION).toFixed(fractionDigits)} B`;
  }

  if (absValue >= MILLION) {
    return `${(value / MILLION).toFixed(fractionDigits)} M`;
  }

  if (absValue >= THOUSAND) {
    return `${(value / THOUSAND).toFixed(fractionDigits)} K`;
  }

  return `${value.toFixed(fractionDigits)}`;
}