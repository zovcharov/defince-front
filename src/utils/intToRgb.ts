export default (i: number): string => {
  // eslint-disable-next-line no-bitwise
  const c = (i & 0x00ffffff).toString(16).toUpperCase();

  return '00000'.substring(0, 6 - c.length) + c;
};
