const omit = (obj: any, keys: (string | number)[]) => {
  const ret = {} as {
    [K in keyof typeof obj]: typeof obj[K];
  };

  Object.keys(obj).forEach((key: any) => {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  });

  return ret;
};

export default omit;
