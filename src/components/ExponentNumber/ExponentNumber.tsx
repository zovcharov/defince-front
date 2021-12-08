import React from 'react';

import parseExponentialNumber from '../../utils/parseExponentialNumber';

const ExponentNumber = ({ value }: { value: number }): JSX.Element => {
  const parsedValue = parseExponentialNumber(value, 5);

  if (parsedValue[1] === 0) {
    return <>{parsedValue[0]}</>
  }

  return <>{parsedValue[0]} * 10<sup>&nbsp;{parsedValue[1]}</sup></>
}

export default ExponentNumber;
