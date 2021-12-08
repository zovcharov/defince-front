export default (value: number, fractionDigits = 0) => {
  const splittedData = String(value).split(/[eE]/);

  if (splittedData.length == 1) {
    return [Number(splittedData[0]).toFixed(fractionDigits), 0]
  }

  return [Number(splittedData[0]).toFixed(fractionDigits), Number(splittedData[1])];
}