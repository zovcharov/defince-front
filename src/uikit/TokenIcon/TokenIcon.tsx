import React, {useState} from 'react';
import cn from 'classnames';
import {useQuery} from 'react-query';

import intToRgb from '../../utils/intToRgb';
import getStringHashCode from '../../utils/getStringHashCode';
import hexToRgba from '../../utils/hexToRgba';
import {apiUrl} from '../../api/config';

import './TokenIcon.scss';

type SizeType = 'xs' | 's' | 'm' | 'l' | 'xl';

const TokenIcon = ({ name, size = 'xs', address }: { name: string, size?: SizeType, address?: string }): JSX.Element => {
  const [isError, setIsError] = useState(false);

  const cnTokenIcon = cn('token-icon', {
    [`token-icon--size-${size}`]: !!size,
  });

  const color = `#${intToRgb(getStringHashCode(name))}`;
  const backgroundColor = hexToRgba(color, '0.3');

  const style = {
    color,
    backgroundColor,
  };

  const handleImageErrorLoading = () => {
    setIsError(true);
  }

  if (address && !isError) {
    return (
      <img
        onError={handleImageErrorLoading}
        className={cnTokenIcon}
        src={`http://${apiUrl}/api/icon/${address}`}
      />
    )
  }

  return (
    <div className={cnTokenIcon} style={style}>
      {name.substr(0, 2)}
    </div>
  )
}

export default TokenIcon;